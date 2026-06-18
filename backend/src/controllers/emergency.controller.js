import { SosAlert } from '../models/sos-alert.model.js';
import { ensureFallbackStore } from '../utils/fallback-store.js';

const emergencyPatterns = [
  {
    priority: 'high',
    keywords: ['heart attack', 'chest pain', 'severe bleeding', 'accident', 'stroke', 'unconscious', 'fire', 'gas leakage'],
    actions: [
      'Call an ambulance immediately.',
      'Keep the affected person in a safe and ventilated area.',
      'Share the exact location with responders.'
    ],
    suggestedCategory: 'ambulance'
  },
  {
    priority: 'medium',
    keywords: ['fever', 'minor injury', 'dizziness', 'locked out', 'power outage'],
    actions: [
      'Contact the nearest available service provider.',
      'Monitor the situation and escalate if symptoms worsen.',
      'Keep emergency contact numbers ready.'
    ],
    suggestedCategory: 'medical_store'
  }
];

function classifyEmergency(text) {
  const normalized = String(text || '').toLowerCase();
  const matchedRule = emergencyPatterns.find((rule) => rule.keywords.some((keyword) => normalized.includes(keyword)));

  if (matchedRule) {
    return matchedRule;
  }

  return {
    priority: 'low',
    actions: [
      'Describe the issue clearly to get the right local service.',
      'Keep your phone line available for callbacks.',
      'Use SOS only if the situation becomes urgent.'
    ],
    suggestedCategory: 'plumber'
  };
}

function buildEmergencySummary(input) {
  const description = String(input.description || input.query || '').trim();
  const emergencyType = String(input.emergencyType || '').trim().toLowerCase();
  const combinedText = `${emergencyType} ${description}`.trim();
  const result = classifyEmergency(combinedText);

  return {
    description,
    emergencyType: emergencyType || result.suggestedCategory || 'general',
    priority: result.priority,
    recommendedActions: result.actions,
    assignedProviderCategory: result.suggestedCategory
  };
}

export async function triggerSos(req, res) {
  try {
    const { userId = '', userName = 'Anonymous', phone = 'N/A', city = '', latitude, longitude, selectedProviderIds = [] } = req.body || {};
    const isDbConnected = Boolean(req.app.locals.dbConnected);
    const emergency = buildEmergencySummary(req.body || {});
    const providerCount = Array.isArray(selectedProviderIds) ? selectedProviderIds.length : 0;

    if (latitude == null || longitude == null) {
      return res.status(400).json({
        message: 'latitude and longitude are required for SOS alerts'
      });
    }

    const notificationMessage = providerCount > 0
      ? `SOS alert sent — you and the admin team have been notified. ${providerCount} provider(s) have been notified of your emergency.`
      : 'SOS alert sent — you and the admin team have been notified for timely response.';

    if (!isDbConnected) {
      const store = ensureFallbackStore(req.app);
      const alert = {
        id: `fallback-${Date.now()}`,
        userId,
        userName,
        phone,
        city,
        emergencyType: emergency.emergencyType,
        description: emergency.description,
        latitude,
        longitude,
        status: 'queued',
        priority: emergency.priority,
        recommendedActions: emergency.recommendedActions,
        assignedProviderCategory: emergency.assignedProviderCategory,
        selectedProviderIds: providerCount > 0 ? selectedProviderIds : [],
        createdAt: new Date().toISOString()
      };

      store.sosAlerts.unshift(alert);

      return res.status(202).json({
        message: notificationMessage,
        notifications: {
          user: { channel: 'in-app', status: 'delivered', recipient: userName },
          admin: { channel: 'in-app', status: 'delivered', recipient: 'Admin Team' }
        },
        alert: {
          id: alert.id,
          userName: alert.userName,
          phone: alert.phone,
          city: alert.city,
          emergencyType: alert.emergencyType,
          description: alert.description,
          priority: alert.priority,
          recommendedActions: alert.recommendedActions,
          assignedProviderCategory: alert.assignedProviderCategory,
          location: { latitude, longitude },
          createdAt: alert.createdAt,
          status: alert.status
        }
      });
    }

    const alert = await SosAlert.create({
      userId,
      userName,
      phone,
      city,
      emergencyType: emergency.emergencyType,
      description: emergency.description,
      latitude,
      longitude,
      status: 'queued',
      priority: emergency.priority,
      recommendedActions: emergency.recommendedActions,
      assignedProviderCategory: emergency.assignedProviderCategory,
      selectedProviderIds: providerCount > 0 ? selectedProviderIds : []
    });

    return res.status(202).json({
      message: notificationMessage,
      notifications: {
        user: { channel: 'in-app', status: 'delivered', recipient: userName },
        admin: { channel: 'in-app', status: 'delivered', recipient: 'Admin Team' }
      },
      alert: {
        id: alert._id,
        userName: alert.userName,
        phone: alert.phone,
        city: alert.city,
        emergencyType: alert.emergencyType,
        description: alert.description,
        priority: alert.priority,
        recommendedActions: alert.recommendedActions,
        assignedProviderCategory: alert.assignedProviderCategory,
        location: { latitude: alert.latitude, longitude: alert.longitude },
        createdAt: alert.createdAt,
        status: alert.status
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to create SOS alert',
      error: error.message
    });
  }
}

export function analyzeEmergency(req, res) {
  const { query, emergencyType = '' } = req.body || {};

  if (!query) {
    return res.status(400).json({ message: 'query is required' });
  }

  const result = classifyEmergency(`${emergencyType} ${query}`.trim());

  return res.json({
    data: {
      query,
      emergencyType: emergencyType || result.suggestedCategory,
      priority: result.priority,
      recommendedActions: result.actions,
      suggestedCategory: result.suggestedCategory,
      shouldTriggerSos: result.priority === 'high',
      assistantMessage:
        result.priority === 'high'
          ? 'This looks critical. Follow the immediate steps below and send SOS now.'
          : 'Here is the recommended guidance based on the issue you described.'
    }
  });
}
