export interface SosAlert {
  id: string;
  userId: string;
  userName: string;
  phone: string;
  city: string;
  emergencyType: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'queued' | 'dispatching' | 'resolved';
  recommendedActions: string[];
  assignedProviderCategory: string;
  location: {
    latitude: number;
    longitude: number;
  };
  createdAt: string;
}
