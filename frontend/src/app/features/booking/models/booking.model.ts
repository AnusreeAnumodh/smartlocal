export type BookingStatus = 'pending' | 'accepted' | 'rejected' | 'completed';

export interface Booking {
  id: string;
  userId: string;
  providerId: string;
  serviceCategory: string;
  scheduledDate: string;
  scheduledTime: string;
  status: BookingStatus;
  rejectionReason: string;
  notes: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  businessName: string;
  providerPhone: string;
  feedbackGiven: boolean;
  createdAt: string;
}

export interface BookingRequest {
  providerId: string;
  serviceCategory: string;
  scheduledDate: string;
  scheduledTime: string;
  notes: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  userId: string;
}

export interface AvailabilitySlot {
  day: string;
  startTime: string;
  endTime: string;
}

export const DAYS_OF_WEEK = [
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' }
];

export const TIME_SLOTS = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00'
];
