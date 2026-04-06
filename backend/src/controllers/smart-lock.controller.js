const fallbackSmartLockOverview = {
  lockId: 'SL-2048-A',
  name: 'Front Door Smart Lock',
  location: 'Villa 12, Jubilee Hills',
  status: 'locked',
  batteryLevel: 78,
  signalStrength: 91,
  autoLockEnabled: true,
  autoLockSeconds: 30,
  doorState: 'closed',
  lastSyncedAt: new Date().toISOString(),
  keypadCodeSlotsUsed: 4,
  activity: [
    {
      id: 'activity-1',
      type: 'lock',
      actor: 'Priya (Owner)',
      channel: 'mobile app',
      timestamp: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
      summary: 'Door locked remotely after delivery'
    },
    {
      id: 'activity-2',
      type: 'unlock',
      actor: 'Arjun (Guest)',
      channel: 'temporary PIN',
      timestamp: new Date(Date.now() - 1000 * 60 * 32).toISOString(),
      summary: 'Temporary guest code used successfully'
    },
    {
      id: 'activity-3',
      type: 'alert',
      actor: 'System',
      channel: 'tamper sensor',
      timestamp: new Date(Date.now() - 1000 * 60 * 74).toISOString(),
      summary: 'Door shake detected and cleared'
    }
  ]
};

function ensureSmartLockState(app) {
  if (!app.locals.smartLockOverview) {
    app.locals.smartLockOverview = structuredClone(fallbackSmartLockOverview);
  }

  return app.locals.smartLockOverview;
}

function appendActivity(overview, type, summary, actor, channel) {
  overview.activity = [
    {
      id: `activity-${Date.now()}`,
      type,
      actor,
      channel,
      timestamp: new Date().toISOString(),
      summary
    },
    ...overview.activity
  ].slice(0, 6);
}

export function getSmartLockOverview(req, res) {
  const overview = ensureSmartLockState(req.app);

  res.json({
    data: overview,
    source: req.app.locals.dbConnected ? 'database-backed-session' : 'fallback-session'
  });
}

export function updateSmartLock(req, res) {
  const overview = ensureSmartLockState(req.app);
  const { action } = req.body || {};

  if (!action) {
    return res.status(400).json({ message: 'action is required' });
  }

  switch (action) {
    case 'lock':
      overview.status = 'locked';
      overview.doorState = 'closed';
      overview.lastSyncedAt = new Date().toISOString();
      appendActivity(overview, 'lock', 'Door locked from dashboard control', 'Current User', 'web dashboard');
      break;
    case 'unlock':
      overview.status = 'unlocked';
      overview.doorState = 'open';
      overview.lastSyncedAt = new Date().toISOString();
      appendActivity(overview, 'unlock', 'Door unlocked from dashboard control', 'Current User', 'web dashboard');
      break;
    case 'toggle-auto-lock':
      overview.autoLockEnabled = !overview.autoLockEnabled;
      overview.lastSyncedAt = new Date().toISOString();
      appendActivity(
        overview,
        'config',
        `Auto lock ${overview.autoLockEnabled ? 'enabled' : 'disabled'}`,
        'Current User',
        'web dashboard'
      );
      break;
    default:
      return res.status(400).json({ message: 'Unsupported smart lock action' });
  }

  overview.batteryLevel = Math.max(18, overview.batteryLevel - (action === 'toggle-auto-lock' ? 0 : 1));
  overview.signalStrength = Math.max(55, Math.min(99, overview.signalStrength + (action === 'unlock' ? -2 : 1)));

  return res.json({
    message: `Smart lock action "${action}" completed`,
    data: overview
  });
}
