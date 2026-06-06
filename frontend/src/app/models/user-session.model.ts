export type UserRole = 'super_admin' | 'admin' | 'provider' | 'user' | 'guest' | 'visitor';
export type ApprovalStatus = 'approved' | 'pending' | 'suspended';

export interface UserSession {
  token: string;
  user: {
    id: string;
    fullName: string;
    mobile: string;
    email: string;
    role: UserRole;
    approvalStatus?: ApprovalStatus;
    isActive?: boolean;
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
    reviewCount: number;
    responseTimeMinutes: number;
    highResponseRate: boolean;
    createdAt: string;
  } | null;
  expiresAt?: string;
}
