import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../core/services/session.service';
import { BookingService } from '../../services/booking.service';
import { LocalServicesService } from '../../../dashboard/services/local-services.service';
import { Booking, BookingStatus } from '../../models/booking.model';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent implements OnInit {
  bookings: Booking[] = [];
  loading = false;
  source = '';
  filterStatus: BookingStatus | '' = '';

  feedbackForm: Record<string, { rating: number; comment: string; submitting: boolean; message: string; error: string }> = {};

  constructor(
    private sessionService: SessionService,
    private bookingService: BookingService,
    private localServices: LocalServicesService
  ) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    const session = this.sessionService.session;
    if (!session) return;

    this.loading = true;
    this.bookingService.getUserBookings(session.user.id).subscribe({
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

  statusClass(status: BookingStatus): string {
    switch (status) {
      case 'accepted': return 'status-accepted';
      case 'rejected': return 'status-rejected';
      case 'completed': return 'status-completed';
      default: return 'status-pending';
    }
  }

  getFeedbackForm(bookingId: string): { rating: number; comment: string; submitting: boolean; message: string; error: string } {
    if (!this.feedbackForm[bookingId]) {
      this.feedbackForm[bookingId] = { rating: 5, comment: '', submitting: false, message: '', error: '' };
    }
    return this.feedbackForm[bookingId];
  }

  submitFeedback(booking: Booking): void {
    const session = this.sessionService.session;
    if (!session) return;

    const form = this.getFeedbackForm(booking.id);
    form.submitting = true;
    form.message = '';
    form.error = '';

    this.localServices
      .createProviderReview(booking.providerId, {
        userId: session.user.id,
        userName: session.user.fullName,
        rating: form.rating,
        comment: form.comment.trim()
      })
      .subscribe({
        next: (res) => {
          form.message = res.message;
          form.submitting = false;
          this.bookingService.markFeedbackGiven(booking.id).subscribe({
            next: (updated) => {
              this.bookings = this.bookings.map((b) => (b.id === booking.id ? updated.data : b));
            }
          });
        },
        error: (err) => {
          form.error = err.message || 'Failed to submit feedback';
          form.submitting = false;
        }
      });
  }

  hasRecentCompletion(booking: Booking): boolean {
    if (booking.status !== 'completed') return false;
    if (booking.feedbackGiven) return false;
    const created = new Date(booking.createdAt);
    const now = new Date();
    const diffHours = (now.getTime() - created.getTime()) / (1000 * 60 * 60);
    return diffHours < 72;
  }
}
