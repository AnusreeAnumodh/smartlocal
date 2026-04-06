export interface EmergencyAnalysis {
  query: string;
  priority: 'high' | 'medium' | 'low';
  recommendedActions: string[];
  suggestedCategory: string;
  shouldTriggerSos: boolean;
  assistantMessage: string;
}
