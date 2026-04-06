export interface UserSession {
  token: string;
  user: {
    id: string;
    fullName: string;
    mobile: string;
    email: string;
    role: 'admin' | 'provider' | 'user' | 'guest';
    accountType?: 'individual' | 'community';
    communityName?: string;
    locality?: string;
    createdAt: string;
  };
  providerProfile?: {
    id: string;
    userId: string;
    businessName: string;
    ownerName: string;
    mobile: string;
    email: string;
    category: string;
    city: string;
    address: string;
    availability: string;
    experienceYears: number;
    verified: boolean;
    rating: number;
    responseTimeMinutes: number;
    highResponseRate: boolean;
    createdAt: string;
  } | null;
  expiresAt?: string;
}
