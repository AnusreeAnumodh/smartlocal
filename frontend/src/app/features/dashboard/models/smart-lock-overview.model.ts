export interface SmartLockActivityItem {
  id: string;
  type: string;
  actor: string;
  channel: string;
  timestamp: string;
  summary: string;
}

export interface SmartLockOverview {
  lockId: string;
  name: string;
  location: string;
  status: 'locked' | 'unlocked';
  batteryLevel: number;
  signalStrength: number;
  autoLockEnabled: boolean;
  autoLockSeconds: number;
  doorState: 'open' | 'closed';
  lastSyncedAt: string;
  keypadCodeSlotsUsed: number;
  activity: SmartLockActivityItem[];
}
