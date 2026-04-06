export interface ServiceItem {
  _id?: string;
  category: string;
  name: string;
  phone: string;
  city: string;
  verified: boolean;
  rating?: number;
  responseTimeMinutes?: number;
  availability?: string;
  highResponseRate?: boolean;
}
