export interface AvailabilitySlot {
  day: string;
  startTime: string;
  endTime: string;
}

export interface ProviderProfile {
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
  availabilitySlots?: AvailabilitySlot[];
  experienceYears: number;
  verified: boolean;
  rating: number;
  reviewCount: number;
  responseTimeMinutes: number;
  highResponseRate: boolean;
  createdAt: string;
}
