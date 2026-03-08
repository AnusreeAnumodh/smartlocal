import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ServiceItem } from '../models/service-item.model';
import { SosAlertRequest } from '../models/sos-alert-request.model';

@Injectable({ providedIn: 'root' })
export class LocalServicesService {
  constructor(private api: ApiService) {}

  getHealth(): Observable<{ status: string; timestamp: string }> {
    return this.api.get('/health');
  }

  getServices(category: string, city?: string): Observable<{ data: ServiceItem[] }> {
    const query = new URLSearchParams();
    if (category) query.append('category', category);
    if (city) query.append('city', city);
    return this.api.get(`/services?${query.toString()}`);
  }

  triggerSos(payload: SosAlertRequest): Observable<{ message: string }> {
    return this.api.post('/emergency/sos', payload);
  }
}
