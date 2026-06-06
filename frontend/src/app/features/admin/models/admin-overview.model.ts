import { AdminUser } from './admin-user.model';
import { ProviderProfile } from '../../auth/models/provider-profile.model';
import { ProviderReview } from '../../dashboard/models/provider-review.model';
import { SosAlert } from '../../dashboard/models/sos-alert.model';

export interface AdminOverview {
  metrics: {
    userCount: number;
    activeUserCount: number;
    pendingUserCount: number;
    providerCount: number;
    verifiedProviderCount: number;
    pendingProviderCount: number;
    reviewCount: number;
    openSosCount: number;
  };
  users: AdminUser[];
  providers: ProviderProfile[];
  reviews: ProviderReview[];
  alerts: SosAlert[];
}
