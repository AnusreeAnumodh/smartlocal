export interface SosAlertRequest {
  userId: string;
  userName: string;
  phone: string;
  city: string;
  emergencyType: string;
  description: string;
  latitude: number;
  longitude: number;
}
