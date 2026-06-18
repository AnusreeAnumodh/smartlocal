import { Component, OnInit } from '@angular/core';
import { LocalServicesService } from '../../../dashboard/services/local-services.service';
import { ProviderProfile } from '../../../auth/models/provider-profile.model';
import { DAYS_OF_WEEK, TIME_SLOTS } from '../../models/booking.model';
import { SessionService } from '../../../../core/services/session.service';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.scss'
})
export class ProvidersListComponent implements OnInit {
  readonly days = DAYS_OF_WEEK;
  readonly timeSlots = TIME_SLOTS;

  providers: ProviderProfile[] = [];
  filteredProviders: ProviderProfile[] = [];
  loading = false;
  source = '';
  useScheduleFilter = false;

  category = '';
  city = '';
  selectedDay = '';
  selectedTime = '';

  categories: string[] = [];
  cities: string[] = [];

  constructor(
    private localServices: LocalServicesService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.categories = ['plumber', 'electrician', 'medical_store', 'ambulance', 'carpenter', 'painter', 'mechanic', 'cleaner'];
    this.cities = ['Ernakulam', 'Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Alappuzha', 'Kannur', 'Kottayam', 'Kollam', 'Palakkad', 'Malappuram', 'Pathanamthitta', 'Idukki', 'Wayanad'];
    this.loadProviders();
  }

  loadProviders(): void {
    this.loading = true;
    const day = this.useScheduleFilter ? this.selectedDay : undefined;
    const time = this.useScheduleFilter ? this.selectedTime : undefined;

    this.localServices.getProviders(this.category, this.city, day, time).subscribe({
      next: (res) => {
        this.providers = res.data;
        this.filteredProviders = res.data;
        this.source = res.source;
        this.loading = false;
      },
      error: () => {
        this.providers = [];
        this.filteredProviders = [];
        this.loading = false;
      }
    });
  }

  search(): void {
    this.loadProviders();
  }

  clearFilters(): void {
    this.category = '';
    this.city = '';
    this.selectedDay = '';
    this.selectedTime = '';
    this.useScheduleFilter = false;
    this.loadProviders();
  }

  getDayLabel(day: string): string {
    return this.days.find((d) => d.value === day)?.label || day;
  }
}
