import { ApprovalStatus, UserRole } from '../../../models/user-session.model';
import { ProviderProfile } from './provider-profile.model';

export interface AuthUser {
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
}

export interface AuthResponse {
  message: string;
  data: {
    token: string;
    user: AuthUser;
    providerProfile: ProviderProfile | null;
  };
  source?: string;
}
