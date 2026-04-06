export interface SignUpRequest {
  fullName: string;
  mobile: string;
  email: string;
  password: string;
  role: 'user' | 'provider';
  city: string;
  category?: string;
  businessName?: string;
  address?: string;
  experienceYears?: number;
  accountType?: 'individual' | 'community';
  communityName?: string;
  locality?: string;
}
