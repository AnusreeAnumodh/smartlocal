import { SosAlert } from '../models/sos-alert.model.js';

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

export async function triggerSos(req, res) {
  try {
    const { userName = 'Anonymous', phone = 'N/A', latitude, longitude } = req.body || {};
    const isDbConnected = Boolean(req.app.locals.dbConnected);

    if (latitude == null || longitude == null) {
      return res.status(400).json({
        message: 'latitude and longitude are required for SOS alerts'
      });
    }

    if (!isDbConnected) {
      return res.status(202).json({
        message: 'SOS alert accepted (fallback mode)',
        alert: {
          id: `fallback-${Date.now()}`,
          userName,
          phone,
          location: { latitude, longitude },
          createdAt: new Date().toISOString(),
          status: 'queued'
        }
      });
    }

    const alert = await SosAlert.create({
      userName,
      phone,
      latitude,
      longitude,
      status: 'queued'
    });

    return res.status(202).json({
      message: 'SOS alert accepted',
      alert: {
        id: alert._id,
        userName: alert.userName,
        phone: alert.phone,
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
  const { query } = req.body || {};

  if (!query) {
    return res.status(400).json({ message: 'query is required' });
  }

  const result = classifyEmergency(query);

  return res.json({
    data: {
      query,
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
