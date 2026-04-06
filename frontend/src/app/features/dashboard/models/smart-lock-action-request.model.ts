export interface SmartLockActionRequest {
  action: 'lock' | 'unlock' | 'toggle-auto-lock';
}
