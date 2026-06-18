import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Booking, BookingRequest } from '../models/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private api: ApiService) {}

  createBooking(payload: BookingRequest): Observable<{ message: string; data: Booking; source: string }> {
    return this.api.post('/bookings', payload);
  }

  getUserBookings(userId: string): Observable<{ data: Booking[]; count: number; source: string }> {
    return this.api.get(`/bookings/user?userId=${encodeURIComponent(userId)}`);
  }

  getProviderBookings(providerId: string): Observable<{ data: Booking[]; count: number; source: string }> {
    return this.api.get(`/bookings/provider?providerId=${encodeURIComponent(providerId)}`);
  }

  getBookingById(bookingId: string): Observable<{ data: Booking; source: string }> {
    return this.api.get(`/bookings/${bookingId}`);
  }

  updateBookingStatus(
    bookingId: string,
    status: 'accepted' | 'rejected' | 'completed',
    rejectionReason?: string
  ): Observable<{ message: string; data: Booking; source: string }> {
    return this.api.patch(`/bookings/${bookingId}/status`, { status, rejectionReason });
  }

  markFeedbackGiven(bookingId: string): Observable<{ message: string; data: Booking; source: string }> {
    return this.api.patch(`/bookings/${bookingId}/feedback`, {});
  }
}
