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
import { ProviderReview } from '../models/provider-review.model';
import { AdminOverview } from '../../admin/models/admin-overview.model';
import { AdminUser } from '../../admin/models/admin-user.model';
import { SosAlert } from '../models/sos-alert.model';
import { ApprovalStatus, UserRole } from '../../../models/user-session.model';

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

  getProviders(category?: string, city?: string, day?: string, time?: string): Observable<{ data: ProviderProfile[]; count: number; source: string }> {
    const query = new URLSearchParams();
    if (category) query.append('category', category);
    if (city) query.append('city', city);
    if (day) query.append('day', day);
    if (time) query.append('time', time);
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

  triggerSos(payload: SosAlertRequest): Observable<{
    message: string;
    notifications?: {
      user: { channel: string; status: string; recipient: string };
      admin: { channel: string; status: string; recipient: string };
    };
    alert?: unknown;
  }> {
    return this.api.post('/emergency/sos', payload);
  }

  analyzeEmergency(query: string, emergencyType: string): Observable<{ data: EmergencyAnalysis }> {
    return this.api.post('/emergency/analyze', { query, emergencyType });
  }

  getSmartLockOverview(): Observable<{ data: SmartLockOverview; source: string }> {
    return this.api.get('/smart-lock/overview');
  }

  updateSmartLock(payload: SmartLockActionRequest): Observable<{ message: string; data: SmartLockOverview }> {
    return this.api.post('/smart-lock/action', payload);
  }

  getProviderReviews(providerId: string): Observable<{ data: ProviderReview[]; count: number; source: string }> {
    return this.api.get(`/providers/${providerId}/reviews`);
  }

  createProviderReview(
    providerId: string,
    payload: { userId: string; userName: string; rating: number; comment: string }
  ): Observable<{ message: string; data: { review: ProviderReview; provider: ProviderProfile }; source: string }> {
    return this.api.post(`/providers/${providerId}/reviews`, payload);
  }

  getAdminOverview(): Observable<{ data: AdminOverview; source: string }> {
    return this.api.get('/admin/overview');
  }

  updateProviderVerification(providerId: string, verified: boolean): Observable<{ message: string; data: ProviderProfile }> {
    return this.api.patch(`/admin/providers/${providerId}/verification`, { verified });
  }

  updateUserApprovalStatus(userId: string, approvalStatus: ApprovalStatus): Observable<{ message: string; data: AdminUser }> {
    return this.api.patch(`/admin/users/${userId}/approval-status`, { approvalStatus });
  }

  updateUserRole(userId: string, role: Exclude<UserRole, 'guest' | 'visitor'>): Observable<{ message: string; data: AdminUser }> {
    return this.api.patch(`/admin/users/${userId}/role`, { role });
  }

  getProviderSosAlerts(providerId: string): Observable<{ data: SosAlert[]; count: number; source: string }> {
    return this.api.get(`/emergency/sos/provider/${encodeURIComponent(providerId)}`);
  }

  updateSosStatus(alertId: string, status: SosAlert['status']): Observable<{ message: string; data: SosAlert }> {
    return this.api.patch(`/admin/sos-alerts/${alertId}/status`, { status });
  }
}
