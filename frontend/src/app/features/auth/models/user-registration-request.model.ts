export interface UserRegistrationRequest {
  fullName: string;
  mobile: string;
  email: string;
  password: string;
  city: string;
  accountType: 'individual' | 'community';
  communityName: string;
  locality: string;
}
