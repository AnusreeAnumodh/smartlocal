import { Component, OnInit } from '@angular/core';
import { LocalServicesService } from '../../../dashboard/services/local-services.service';
import { AdminOverview } from '../../models/admin-overview.model';
import { ProviderProfile } from '../../../auth/models/provider-profile.model';
import { ProviderReview } from '../../../dashboard/models/provider-review.model';
import { SosAlert } from '../../../dashboard/models/sos-alert.model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent implements OnInit {
  overview: AdminOverview | null = null;
  source = '';
  loading = false;
  statusMessage = '';
  errorMessage = '';

  constructor(private localServices: LocalServicesService) {}

  ngOnInit(): void {
    this.loadOverview();
  }

  loadOverview(): void {
    this.loading = true;
    this.errorMessage = '';

    this.localServices.getAdminOverview().subscribe({
      next: (response) => {
        this.overview = response.data;
        this.source = response.source;
        this.loading = false;
      },
      error: (error: Error) => {
        this.errorMessage = error.message || 'Unable to load admin data';
        this.loading = false;
      }
    });
  }

  setProviderVerification(provider: ProviderProfile, verified: boolean): void {
    this.statusMessage = '';
    this.localServices.updateProviderVerification(provider.id, verified).subscribe({
      next: (response) => {
        if (this.overview) {
          this.overview.providers = this.overview.providers.map((entry) =>
            entry.id === provider.id ? response.data : entry
          );
        }
        this.statusMessage = response.message;
        this.loadOverview();
      },
      error: (error: Error) => {
        this.errorMessage = error.message || 'Unable to update provider status';
      }
    });
  }

  setAlertStatus(alert: SosAlert, status: SosAlert['status']): void {
    this.statusMessage = '';
    this.localServices.updateSosStatus(alert.id, status).subscribe({
      next: (response) => {
        if (this.overview) {
          this.overview.alerts = this.overview.alerts.map((entry) =>
            entry.id === alert.id ? response.data : entry
          );
        }
        this.statusMessage = response.message;
        this.loadOverview();
      },
      error: (error: Error) => {
        this.errorMessage = error.message || 'Unable to update SOS status';
      }
    });
  }

  trackProvider(_: number, provider: ProviderProfile): string {
    return provider.id;
  }

  trackAlert(_: number, alert: SosAlert): string {
    return alert.id;
  }

  trackReview(_: number, review: ProviderReview): string {
    return review.id;
  }
}
