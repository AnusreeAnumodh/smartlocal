import { Component, OnInit } from '@angular/core';
import { LocalServicesService } from '../../services/local-services.service';
import { ServiceItem } from '../../models/service-item.model';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent implements OnInit {
  backendStatus = 'Checking...';
  category = 'plumber';
  city = 'Hyderabad';
  services: ServiceItem[] = [];
  sosMessage = '';

  constructor(private localServices: LocalServicesService) {}

  ngOnInit(): void {
    this.localServices.getHealth().subscribe({
      next: (health) => {
        this.backendStatus = `${health.status} (${new Date(health.timestamp).toLocaleString()})`;
      },
      error: () => {
        this.backendStatus = 'Backend not reachable';
      }
    });
  }

  searchServices(): void {
    this.localServices.getServices(this.category, this.city).subscribe({
      next: (res) => {
        this.services = res.data;
      },
      error: () => {
        this.services = [];
      }
    });
  }

  triggerSos(): void {
    if (!navigator.geolocation) {
      this.sosMessage = 'Geolocation is not supported in this browser.';
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.localServices
          .triggerSos({
            userName: 'Demo User',
            phone: '+91-9000000010',
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
          .subscribe({
            next: (res) => {
              this.sosMessage = res.message;
            },
            error: () => {
              this.sosMessage = 'Unable to send SOS right now.';
            }
          });
      },
      () => {
        this.sosMessage = 'Location permission denied.';
      }
    );
  }
}
