import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../core/services/session.service';
import { BookingService } from '../../services/booking.service';
import { Booking, BookingStatus } from '../../models/booking.model';

@Component({
  selector: 'app-provider-bookings',
  templateUrl: './provider-bookings.component.html',
  styleUrl: './provider-bookings.component.scss'
})
export class ProviderBookingsComponent implements OnInit {
  bookings: Booking[] = [];
  loading = false;
  source = '';
  filterStatus: BookingStatus | '' = 'pending';
  actionLoading = '';
  rejectionReasons: Record<string, string> = {};
  showRejectForm: Record<string, boolean> = {};
  completionMessage: Record<string, string> = {};

  constructor(
    public sessionService: SessionService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    const session = this.sessionService.session;
    if (!session || !session.providerProfile) return;

    this.loading = true;
    this.bookingService.getProviderBookings(session.providerProfile.id).subscribe({
      next: (res) => {
        this.bookings = res.data;
        this.source = res.source;
        this.loading = false;
      },
      error: () => {
        this.bookings = [];
        this.loading = false;
      }
    });
  }

  get filteredBookings(): Booking[] {
    if (!this.filterStatus) return this.bookings;
    return this.bookings.filter((b) => b.status === this.filterStatus);
  }

  acceptBooking(bookingId: string): void {
    this.actionLoading = bookingId;
    this.bookingService.updateBookingStatus(bookingId, 'accepted').subscribe({
      next: (res) => {
        this.updateBookingInList(res.data);
        this.actionLoading = '';
      },
      error: () => {
        this.actionLoading = '';
      }
    });
  }

  toggleRejectForm(bookingId: string): void {
    this.showRejectForm[bookingId] = !this.showRejectForm[bookingId];
    if (!this.showRejectForm[bookingId]) {
      this.rejectionReasons[bookingId] = '';
    }
  }

  rejectBooking(bookingId: string): void {
    const reason = (this.rejectionReasons[bookingId] || '').trim();
    if (!reason) return;

    this.actionLoading = bookingId;
    this.bookingService.updateBookingStatus(bookingId, 'rejected', reason).subscribe({
      next: (res) => {
        this.updateBookingInList(res.data);
        this.actionLoading = '';
        this.showRejectForm[bookingId] = false;
        this.rejectionReasons[bookingId] = '';
      },
      error: () => {
        this.actionLoading = '';
      }
    });
  }

  completeBooking(bookingId: string): void {
    this.actionLoading = bookingId;
    this.bookingService.updateBookingStatus(bookingId, 'completed').subscribe({
      next: (res) => {
        this.updateBookingInList(res.data);
        this.actionLoading = '';
        this.completionMessage[bookingId] = 'Task marked as completed. The customer has been notified and can now leave feedback.';
      },
      error: () => {
        this.actionLoading = '';
      }
    });
  }

  private updateBookingInList(updated: Booking): void {
    this.bookings = this.bookings.map((b) => (b.id === updated.id ? updated : b));
  }

  statusClass(status: BookingStatus): string {
    switch (status) {
      case 'accepted': return 'status-accepted';
      case 'rejected': return 'status-rejected';
      case 'completed': return 'status-completed';
      default: return 'status-pending';
    }
  }
}
