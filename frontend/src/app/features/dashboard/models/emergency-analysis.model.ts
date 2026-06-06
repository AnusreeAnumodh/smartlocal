export interface EmergencyAnalysis {
  query: string;
  emergencyType: string;
  priority: 'high' | 'medium' | 'low';
  recommendedActions: string[];
  suggestedCategory: string;
  shouldTriggerSos: boolean;
  assistantMessage: string;
}
