import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../core/services/session.service';
import { BookingService } from '../../services/booking.service';
import { LocalServicesService } from '../../../dashboard/services/local-services.service';
import { ToastService } from '../../../../shared/components/toast/toast.service';
import { Booking, BookingStatus } from '../../models/booking.model';
import { SosAlert } from '../../../dashboard/models/sos-alert.model';

@Component({
  selector: 'app-provider-bookings',
  templateUrl: './provider-bookings.component.html',
  styleUrl: './provider-bookings.component.scss'
})
export class ProviderBookingsComponent implements OnInit {
  bookings: Booking[] = [];
  sosAlerts: SosAlert[] = [];
  loading = false;
  sosLoading = false;
  source = '';
  filterStatus: BookingStatus | '' = 'pending';
  actionLoading = '';
  rejectionReasons: Record<string, string> = {};
  showRejectForm: Record<string, boolean> = {};
  completionMessage: Record<string, string> = {};
  sosStatusMessage = '';
  sosErrorMessage = '';

  constructor(
    public sessionService: SessionService,
    private bookingService: BookingService,
    private localServices: LocalServicesService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
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

    this.sosLoading = true;
    this.localServices.getProviderSosAlerts(session.providerProfile.id).subscribe({
      next: (res) => {
        this.sosAlerts = res.data;
        this.sosLoading = false;
      },
      error: () => {
        this.sosAlerts = [];
        this.sosLoading = false;
      }
    });
  }

  refreshSosAlerts(): void {
    const session = this.sessionService.session;
    if (!session || !session.providerProfile) return;

    this.sosLoading = true;
    this.localServices.getProviderSosAlerts(session.providerProfile.id).subscribe({
      next: (res) => {
        this.sosAlerts = res.data;
        this.sosLoading = false;
      },
      error: () => {
        this.sosAlerts = [];
        this.sosLoading = false;
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
        this.toast.show(res.message || 'Booking accepted', 'success');
      },
      error: () => {
        this.actionLoading = '';
        this.toast.show('Unable to accept booking', 'error');
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
        this.toast.show(res.message || 'Booking rejected', 'success');
      },
      error: () => {
        this.actionLoading = '';
        this.toast.show('Unable to reject booking', 'error');
      }
    });
  }

  completeBooking(bookingId: string): void {
    this.actionLoading = bookingId;
    this.bookingService.updateBookingStatus(bookingId, 'completed').subscribe({
      next: (res) => {
        this.updateBookingInList(res.data);
        this.actionLoading = '';
        this.toast.show('Booking completed. Customer has been notified.', 'success');
      },
      error: () => {
        this.actionLoading = '';
        this.toast.show('Unable to complete booking', 'error');
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
