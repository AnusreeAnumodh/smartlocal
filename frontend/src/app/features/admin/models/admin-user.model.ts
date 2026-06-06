import { ApprovalStatus, UserRole } from '../../../models/user-session.model';

export interface AdminUser {
  id: string;
  fullName: string;
  mobile: string;
  email: string;
  role: UserRole;
  approvalStatus: ApprovalStatus;
  isActive: boolean;
  accountType?: 'individual' | 'community';
  communityName?: string;
  locality?: string;
  createdAt: string;
}
