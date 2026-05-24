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

  searchMarketplace(category: string, city: string, query?: string, lat?: number, lng?: number, radius?: number): Observable<{
    data: Array<{
      id: string;
      source: string;
      category: string;
      categoryLabel: string;
      name: string;
      address: string;
      city: string;
      phone: string;
      rating: number | null;
      userRatingCount: number;
      verified: boolean;
      mapsUri: string;
      websiteUri: string;
      location: { latitude: number | null; longitude: number | null };
      openNow: boolean | null;
      businessStatus: string;
    }>;
    count: number;
    source: string;
    query: string;
    location: { latitude: number | null; longitude: number | null };
  }> {
    const params = new URLSearchParams({ category, city });
    if (query) params.append('query', query);
    if (lat != null) params.append('lat', String(lat));
    if (lng != null) params.append('lng', String(lng));
    if (radius != null) params.append('radius', String(radius));
    return this.api.get(`/marketplace/search?${params.toString()}`);
  }

  sendMarketplaceLead(payload: {
    to: string;
    providerName: string;
    customerName: string;
    customerPhone: string;
    category: string;
    city: string;
  }): Observable<{ message: string; data: unknown; source: string }> {
    return this.api.post('/marketplace/lead', payload);
  }

  createMarketplaceOrder(payload: {
    amount: number;
    currency?: string;
    receipt: string;
    notes?: Record<string, string>;
  }): Observable<{ message: string; data: unknown; source: string }> {
    return this.api.post('/marketplace/payments/order', payload);
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
