import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ServiceItem } from '../models/service-item.model';
import { SosAlertRequest } from '../models/sos-alert-request.model';
import { SmartLockOverview } from '../models/smart-lock-overview.model';
import { SmartLockActionRequest } from '../models/smart-lock-action-request.model';
import { ServiceRecommendation } from '../models/service-recommendation.model';
import { EmergencyAnalysis } from '../models/emergency-analysis.model';
import { ProviderProfile } from '../../auth/models/provider-profile.model';

@Injectable({ providedIn: 'root' })
export class LocalServicesService {
  constructor(private api: ApiService) {}

  getHealth(): Observable<{ status: string; timestamp: string; mode: string; dbConnected: boolean }> {
    return this.api.get('/health');
  }

  getServices(category: string, city?: string): Observable<{ data: ServiceItem[]; count: number; source: string }> {
    const query = new URLSearchParams();
    if (category) query.append('category', category);
    if (city) query.append('city', city);
    return this.api.get(`/services?${query.toString()}`);
  }

  getRecommendation(category: string, city?: string): Observable<{ data: ServiceRecommendation; source: string }> {
    const query = new URLSearchParams();
    if (category) query.append('category', category);
    if (city) query.append('city', city);
    return this.api.get(`/services/recommendation?${query.toString()}`);
  }

  getProviders(category?: string, city?: string): Observable<{ data: ProviderProfile[]; count: number; source: string }> {
    const query = new URLSearchParams();
    if (category) query.append('category', category);
    if (city) query.append('city', city);
    const suffix = query.toString();
    return this.api.get(`/providers${suffix ? `?${suffix}` : ''}`);
  }

  triggerSos(payload: SosAlertRequest): Observable<{ message: string }> {
    return this.api.post('/emergency/sos', payload);
  }

  analyzeEmergency(query: string): Observable<{ data: EmergencyAnalysis }> {
    return this.api.post('/emergency/analyze', { query });
  }

  getSmartLockOverview(): Observable<{ data: SmartLockOverview; source: string }> {
    return this.api.get('/smart-lock/overview');
  }

  updateSmartLock(payload: SmartLockActionRequest): Observable<{ message: string; data: SmartLockOverview }> {
    return this.api.post('/smart-lock/action', payload);
  }
}
