import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalServicesService } from '../../../dashboard/services/local-services.service';
import { ProviderProfile, AvailabilitySlot } from '../../../auth/models/provider-profile.model';
import { SessionService } from '../../../../core/services/session.service';
import { BookingService } from '../../services/booking.service';
import { DAYS_OF_WEEK, TIME_SLOTS } from '../../models/booking.model';
import { ProviderReview } from '../../../dashboard/models/provider-review.model';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrl: './provider-detail.component.scss'
})
export class ProviderDetailComponent implements OnInit {
  readonly days = DAYS_OF_WEEK;
  readonly timeSlots = TIME_SLOTS;

  provider: ProviderProfile | null = null;
  reviews: ProviderReview[] = [];
  loading = true;
  reviewLoading = false;
  bookingLoading = false;
  bookingMessage = '';
  bookingError = '';

  selectedDate = '';
  selectedTime = '';
  notes = '';
  minDate = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localServices: LocalServicesService,
    public sessionService: SessionService,
    private bookingService: BookingService
  ) {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    this.selectedDate = this.minDate;
  }

  ngOnInit(): void {
    const providerId = this.route.snapshot.paramMap.get('id');
    if (!providerId) {
      this.router.navigate(['/booking/providers']);
      return;
    }

    this.loadProvider(providerId);
  }

  private loadProvider(providerId: string): void {
    this.loading = true;
    this.localServices.getProviders().subscribe({
      next: (res) => {
        this.provider = res.data.find((p) => p.id === providerId) || null;
        this.loading = false;
        if (this.provider) {
          this.loadReviews(providerId);
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  private loadReviews(providerId: string): void {
    this.reviewLoading = true;
    this.localServices.getProviderReviews(providerId).subscribe({
      next: (res) => {
        this.reviews = res.data;
        this.reviewLoading = false;
      },
      error: () => {
        this.reviewLoading = false;
      }
    });
  }

  get selectedDayName(): string {
    if (!this.selectedDate) return '';
    const date = new Date(this.selectedDate + 'T12:00:00');
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return dayNames[date.getDay()];
  }

  get isProviderAvailableAtSlot(): boolean {
    if (!this.provider || !this.selectedDate || !this.selectedTime) return true;
    const slots = this.provider.availabilitySlots || [];
    if (slots.length === 0) return this.provider.availability === 'available';

    const day = this.selectedDayName;
    const daySlots = slots.filter((s: AvailabilitySlot) => s.day === day);
    if (daySlots.length === 0) return false;

    const timeMin = this.timeToMinutes(this.selectedTime);
    return daySlots.some((s: AvailabilitySlot) => {
      const start = this.timeToMinutes(s.startTime);
      const end = this.timeToMinutes(s.endTime);
      if (end <= start) return timeMin >= start || timeMin <= end;
      return timeMin >= start && timeMin <= end;
    });
  }

  private timeToMinutes(t: string): number {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  }

  get canBook(): boolean {
    return Boolean(
      this.provider &&
      this.selectedDate &&
      this.selectedTime &&
      this.sessionService.isAuthenticated &&
      !this.sessionService.isProvider
    );
  }

  sendBookingRequest(): void {
    if (!this.provider || !this.canBook) return;

    const session = this.sessionService.session;
    if (!session) return;

    const preferredTime = this.selectedTime;

    this.bookingLoading = true;
    this.bookingMessage = '';
    this.bookingError = '';

    this.bookingService
      .createBooking({
        providerId: this.provider.id,
        serviceCategory: this.provider.category,
        scheduledDate: this.selectedDate,
        scheduledTime: preferredTime,
        notes: this.notes,
        userName: session.user.fullName,
        userPhone: session.user.mobile,
        userEmail: session.user.email,
        userId: session.user.id
      })
      .subscribe({
        next: (res) => {
          this.bookingMessage = res.message;
          this.bookingLoading = false;
        },
        error: (err) => {
          this.bookingError = err.message || 'Failed to send booking request';
          this.bookingLoading = false;
        }
      });
  }

  getDayLabel(day: string): string {
    return this.days.find((d) => d.value === day)?.label || day;
  }
}
