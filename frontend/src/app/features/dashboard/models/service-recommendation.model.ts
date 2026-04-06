import { ServiceItem } from './service-item.model';

export interface ServiceRecommendation {
  provider: ServiceItem & {
    rating: number;
    responseTimeMinutes: number;
    availability: string;
    highResponseRate: boolean;
    recommendationScore: number;
  };
  reason: string;
  scoreBreakdown: {
    rating: number;
    responseTimeMinutes: number;
    availability: string;
    verified: boolean;
    highResponseRate: boolean;
  };
}
