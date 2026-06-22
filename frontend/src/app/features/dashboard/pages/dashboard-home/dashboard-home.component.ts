import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalServicesService } from '../../services/local-services.service';
import { ToastService } from '../../../../shared/components/toast/toast.service';
import { ServiceItem } from '../../models/service-item.model';
import { ServiceRecommendation } from '../../models/service-recommendation.model';
import { ProviderProfile } from '../../../auth/models/provider-profile.model';
import { SessionService } from '../../../../core/services/session.service';
import { DEMO_PROVIDERS, DEMO_SERVICES, KERALA_CITIES } from '../../../../shared/data/kerala-directory.data';
import { CATEGORY_OFFERINGS, FRONTEND_DEFAULTS, SERVICE_CATEGORIES } from '../../../../shared/config/app-config';
import { EmergencyAnalysis } from '../../models/emergency-analysis.model';
import { SosAlertRequest } from '../../models/sos-alert-request.model';
import { AdminOverview } from '../../../admin/models/admin-overview.model';
import { AdminUser } from '../../../admin/models/admin-user.model';
import { ProviderReview } from '../../models/provider-review.model';
import { SosAlert } from '../../models/sos-alert.model';
import { ApprovalStatus, UserRole } from '../../../../models/user-session.model';

const CITY_COORDINATES: Record<string, { latitude: number; longitude: number }> = {
  Ernakulam: { latitude: 9.9816, longitude: 76.2999 },
  Kochi: { latitude: 9.9312, longitude: 76.2673 },
  Thrissur: { latitude: 10.5276, longitude: 76.2144 },
  Kozhikode: { latitude: 11.2588, longitude: 75.7804 }
};

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent implements OnInit {
  readonly cities = KERALA_CITIES;
  readonly serviceCategories = SERVICE_CATEGORIES;
  readonly manageableRoles: Array<{ value: 'user' | 'provider' | 'admin' | 'super_admin'; label: string }> = [
    { value: 'user', label: 'User' },
    { value: 'provider', label: 'Provider' },
    { value: 'admin', label: 'Admin' },
    { value: 'super_admin', label: 'Super Admin' }
  ];
  readonly sosPresets = [
    'Severe chest pain and trouble breathing',
    'Water leak near electrical panel',
    'Need urgent medicine delivery for senior citizen',
    'Vehicle accident with possible injury'
  ];

  activeUserTab: 'discover' | 'sos' | 'admin' = 'discover';
  activeProviderTab: 'overview' | 'visibility' | 'reviews' = 'overview';
  backendStatus = 'Checking...';
  backendMode = '';
  isUsingDemoData = false;
  category = FRONTEND_DEFAULTS.category;
  city = FRONTEND_DEFAULTS.city;
  providersLoading = false;
  servicesLoading = false;
  recommendationLoading = false;
  emergencyLoading = false;
  sosLoading = false;
  services: ServiceItem[] = [];
  servicesSource = '';
  servicesLoaded = false;
  recommendation: ServiceRecommendation | null = null;
  recommendationSource = '';
  recommendationMessage = '';
  currentUserName = '';
  currentUserRole = '';
  currentUserId = '';
  currentUserPhone = '';
  currentProviderBusiness = '';
  selectedProviderId = '';
  providers: ProviderProfile[] = [];
  providerReviews: ProviderReview[] = [];
  providerReviewsLoading = false;
  providersSource = '';
  providerProfile: ProviderProfile | null = null;
  emergencyQuery = '';
  emergencyType = 'ambulance';
  emergencyAnalysis: EmergencyAnalysis | null = null;
  emergencyStatusMessage = '';
  emergencyErrorMessage = '';
  sosStatusMessage = '';
  sosErrorMessage = '';
  sosActionLoading = '';
  adminOverview: AdminOverview | null = null;
  adminLoading = false;

  constructor(
    private localServices: LocalServicesService,
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const session = this.sessionService.session;

    this.route.queryParams.subscribe((params) => {
      if (params['tab'] === 'admin') {
        this.activeUserTab = 'admin';
        if (!this.adminOverview && !this.adminLoading) {
          this.loadAdminOverview();
        }
      } else {
        this.activeUserTab = 'discover';
      }
    });
    this.currentUserId = session?.user.id ?? `guest-${Date.now()}`;
    this.currentUserName = session?.user.fullName ?? 'Guest User';
    this.currentUserPhone = session?.user.mobile ?? '';
    this.currentUserRole = session?.user.role ?? 'visitor';
    this.currentProviderBusiness = session?.providerProfile?.businessName ?? '';
    this.providerProfile = session?.providerProfile ?? null;

    this.localServices.getHealth().subscribe({
      next: (health) => {
        this.backendStatus = `${health.status} (${new Date(health.timestamp).toLocaleString()})`;
        this.backendMode = `${health.mode} mode`;
        this.isUsingDemoData = false;
      },
      error: () => {
        this.backendStatus = 'Backend not reachable, showing demo data';
        this.backendMode = 'demo mode';
        this.isUsingDemoData = true;
      }
    });

    this.searchServices();

    if (this.isSuperAdminView) {
      this.loadAdminOverview();
    }
  }

  searchServices(): void {
    this.recommendationMessage = '';
    this.providersLoading = true;
    this.servicesLoading = true;
    this.recommendationLoading = true;

    this.localServices.searchMarketplace(this.category, this.city).subscribe({
      next: (res) => {
        const liveProviders = res.data.map((provider) => this.mapMarketplaceProviderToProviderProfile(provider));
        const liveServices = res.data.map((provider) => this.mapMarketplaceProviderToServiceItem(provider));

        this.providers = liveProviders;
        this.providersSource = res.source;
        this.services = liveServices;
        this.servicesSource = res.source;
        this.servicesLoaded = true;
        this.recommendation = this.buildRecommendationFromServices(liveServices);
        this.recommendationSource = res.source;
        this.recommendationMessage = liveServices.length ? 'Showing live marketplace results from Google Places.' : 'No live marketplace providers found for this filter.';
        this.isUsingDemoData = false;
        this.ensureSelectedProvider();
        this.providersLoading = false;
        this.servicesLoading = false;
        this.recommendationLoading = false;
      },
      error: () => {
        this.loadRecommendation();
        this.loadProviders();

        this.localServices.getServices(this.category, this.city).subscribe({
          next: (fallbackRes) => {
            this.services = fallbackRes.data;
            this.servicesSource = fallbackRes.source;
            this.servicesLoaded = true;
            this.servicesLoading = false;
          },
          error: () => {
            this.services = this.getDemoServices();
            this.servicesSource = 'frontend demo data';
            this.servicesLoaded = true;
            this.isUsingDemoData = true;
            this.servicesLoading = false;
          }
        });
      }
    });
  }

  loadProviders(): void {
    this.providersLoading = true;
    this.localServices.getProviders(this.category, this.city).subscribe({
      next: (res) => {
        this.providers = res.data;
        this.providersSource = res.source;
        this.ensureSelectedProvider();
        this.providersLoading = false;
      },
      error: () => {
        this.providers = DEMO_PROVIDERS.filter((provider) => {
          const categoryMatch = this.category ? provider.category === this.category : true;
          const cityMatch = this.city ? provider.city.toLowerCase() === this.city.toLowerCase() : true;
          return categoryMatch && cityMatch;
        });
        this.providersSource = 'frontend local directory';
        this.isUsingDemoData = true;
        this.ensureSelectedProvider();
        this.providersLoading = false;
      }
    });
  }

  loadRecommendation(): void {
    this.recommendationMessage = '';
    this.recommendationLoading = true;

    this.localServices.getRecommendation(this.category, this.city).subscribe({
      next: (res) => {
        this.recommendation = res.data;
        this.recommendationSource = res.source;
        this.recommendationLoading = false;
      },
      error: () => {
        this.recommendation = this.buildDemoRecommendation();
        this.recommendationSource = 'frontend demo AI';
        this.recommendationMessage = 'Showing demo AI recommendation because backend is offline.';
        this.isUsingDemoData = true;
        this.recommendationLoading = false;
      }
    });
  }

  selectProvider(providerId: string): void {
    this.selectedProviderId = providerId;
  }

  get hasSelectedProviders(): boolean {
    return this.providers.length > 0;
  }

  analyzeEmergency(): void {
    this.emergencyStatusMessage = '';
    this.emergencyErrorMessage = '';
    this.sosStatusMessage = '';
    this.sosErrorMessage = '';

    if (!this.emergencyQuery.trim()) {
      this.emergencyErrorMessage = 'Describe the emergency first.';
      return;
    }

    this.emergencyLoading = true;
    this.localServices.analyzeEmergency(this.emergencyQuery.trim(), this.emergencyType).subscribe({
      next: (response) => {
        this.emergencyAnalysis = response.data;
        this.emergencyStatusMessage = response.data.assistantMessage;
        this.emergencyLoading = false;
      },
      error: (error: Error) => {
        this.emergencyErrorMessage = error.message || 'Unable to analyze this emergency';
        this.emergencyLoading = false;
      }
    });
  }

  sendSosAlert(): void {
    this.sosStatusMessage = '';
    this.sosErrorMessage = '';

    if (!this.emergencyQuery.trim()) {
      this.sosErrorMessage = 'Describe the emergency before sending SOS.';
      return;
    }

    const coords = CITY_COORDINATES[this.city] ?? CITY_COORDINATES['Ernakulam'];
    const selectedIds = this.providers.map((p) => p.id);
    const payload: SosAlertRequest = {
      userId: this.currentUserId,
      userName: this.currentUserName,
      phone: this.currentUserPhone || 'N/A',
      city: this.city,
      emergencyType: this.emergencyType,
      description: this.emergencyQuery.trim(),
      latitude: coords.latitude,
      longitude: coords.longitude,
      selectedProviderIds: selectedIds
    };

    this.sosLoading = true;
    this.localServices.triggerSos(payload).subscribe({
      next: (response) => {
        this.toast.show(response.message, 'success');
        this.sosLoading = false;
        this.loadAdminOverview();
      },
      error: (error: Error) => {
        this.toast.show(error.message || 'Unable to trigger SOS', 'error');
        this.sosLoading = false;
      }
    });
  }

  loadAdminOverview(): void {
    if (!this.isSuperAdminView) {
      return;
    }

    this.adminLoading = true;

    this.localServices.getAdminOverview().subscribe({
      next: (response) => {
        this.adminOverview = response.data;
        this.adminLoading = false;
      },
      error: (error: Error) => {
        this.toast.show(error.message || 'Unable to load super admin data', 'error');
        this.adminLoading = false;
      }
    });
  }

  updateUserApprovalStatus(user: AdminUser, approvalStatus: ApprovalStatus): void {
    this.localServices.updateUserApprovalStatus(user.id, approvalStatus).subscribe({
      next: (response) => {
        this.toast.show(`${user.fullName}: ${response.message}`, 'success');
        this.syncAdminUser(response.data);
      },
      error: (error: Error) => {
        this.toast.show(`${user.fullName}: ${error.message || 'Unable to update user status'}`, 'error');
      }
    });
  }

  updateUserRole(user: AdminUser, role: string): void {
    if (!['user', 'provider', 'admin', 'super_admin'].includes(role)) {
      return;
    }

    this.localServices.updateUserRole(user.id, role as 'user' | 'provider' | 'admin' | 'super_admin').subscribe({
      next: (response) => {
        this.toast.show(`${user.fullName}: ${response.message}`, 'success');
        this.syncAdminUser(response.data);
      },
      error: (error: Error) => {
        this.toast.show(`${user.fullName}: ${error.message || 'Unable to update user role'}`, 'error');
      }
    });
  }

  setProviderVerification(provider: ProviderProfile, verified: boolean): void {
    this.localServices.updateProviderVerification(provider.id, verified).subscribe({
      next: (response) => {
        this.toast.show(`${provider.businessName}: ${response.message}`, 'success');
        if (this.adminOverview) {
          this.adminOverview.providers = this.adminOverview.providers.map((entry) => (entry.id === provider.id ? response.data : entry));
          this.refreshAdminMetrics();
        }
      },
      error: (error: Error) => {
        this.toast.show(error.message || 'Unable to update provider status', 'error');
      }
    });
  }

  setAlertStatus(alert: SosAlert, status: SosAlert['status']): void {
    this.sosActionLoading = alert.id;

    this.localServices.updateSosStatus(alert.id, status).subscribe({
      next: (response) => {
        this.sosActionLoading = '';
        this.toast.show(`${alert.userName}: ${response.message}`, 'success');
        if (this.adminOverview) {
          this.adminOverview.alerts = this.adminOverview.alerts.map((entry) => (entry.id === alert.id ? response.data : entry));
          this.refreshAdminMetrics();
        }
      },
      error: (error: Error) => {
        this.sosActionLoading = '';
        this.toast.show(`${alert.userName}: ${error.message || 'Unable to update SOS status'}`, 'error');
      }
    });
  }

  applySosPreset(preset: string): void {
    this.emergencyQuery = preset;
  }

  refreshDashboard(): void {
    this.searchServices();
    if (this.isSuperAdminView) {
      this.loadAdminOverview();
    }
  }

  get isProviderView(): boolean {
    return this.sessionService.isProvider;
  }

  get isSuperAdminView(): boolean {
    return this.sessionService.isSuperAdmin;
  }

  get isAdminView(): boolean {
    return this.sessionService.isAdmin;
  }

  get isUserView(): boolean {
    return !this.isProviderView;
  }

  get topServices(): ServiceItem[] {
    return [...this.services].sort((left, right) => this.scoreService(right) - this.scoreService(left)).slice(0, 4);
  }

  get pendingProvidersCount(): number {
    return this.adminOverview?.metrics.pendingProviderCount ?? 0;
  }

  get pendingUsersCount(): number {
    return this.adminOverview?.metrics.pendingUserCount ?? 0;
  }

  get openSosCount(): number {
    return this.adminOverview?.metrics.openSosCount ?? 0;
  }

  get selectedProvider(): ProviderProfile | null {
    return this.providers.find((provider) => provider.id === this.selectedProviderId) ?? this.providers[0] ?? null;
  }

  get verifiedProvidersCount(): number {
    return this.providers.filter((provider) => provider.verified).length;
  }

  get availableProvidersCount(): number {
    return this.providers.filter((provider) => provider.availability === 'available').length;
  }

  get averageProviderRating(): string {
    if (!this.providers.length) {
      return '0.0';
    }

    const total = this.providers.reduce((sum, provider) => sum + (provider.rating || 0), 0);
    return (total / this.providers.length).toFixed(1);
  }

  get fastestResponseMinutes(): number | null {
    if (!this.providers.length) {
      return null;
    }

    return this.providers.reduce((fastest, provider) => Math.min(fastest, provider.responseTimeMinutes || fastest), this.providers[0].responseTimeMinutes || 0);
  }

  get selectedProviderScore(): number {
    const provider = this.selectedProvider;

    if (!provider) {
      return 0;
    }

    return Math.round(provider.rating * 20 + (provider.verified ? 8 : 0) + (provider.availability === 'available' ? 4 : 0));
  }

  get providerCompletionScore(): number {
    if (!this.providerProfile) {
      return 0;
    }

    const fields = [
      this.providerProfile.businessName,
      this.providerProfile.mobile,
      this.providerProfile.city,
      this.providerProfile.address,
      this.providerProfile.email
    ];
    const completed = fields.filter((field) => Boolean(field && field.trim())).length;
    return Math.round((completed / fields.length) * 100);
  }

  get providerOfferings(): string[] {
    const provider = this.selectedProvider;
    return provider ? this.getOfferingsForCategory(provider.category) : [];
  }

  get providerAudienceOfferings(): string[] {
    return this.providerProfile ? this.getOfferingsForCategory(this.providerProfile.category) : [];
  }

  get availabilityAccent(): string {
    const availability = this.selectedProvider?.availability ?? this.providerProfile?.availability;

    switch (availability) {
      case 'available':
        return 'available';
      case 'busy':
        return 'busy';
      default:
        return 'pending';
    }
  }

  setUserTab(tab: 'discover' | 'sos' | 'admin'): void {
    this.activeUserTab = tab;

    if (tab === 'admin' && this.isSuperAdminView && !this.adminOverview && !this.adminLoading) {
      this.loadAdminOverview();
    }
  }

  setProviderTab(tab: 'overview' | 'visibility' | 'reviews'): void {
    this.activeProviderTab = tab;
    if (tab === 'reviews' && !this.providerReviews.length && !this.providerReviewsLoading) {
      this.loadProviderReviews();
    }
  }

  loadProviderReviews(): void {
    const providerId = this.providerProfile?.id;
    if (!providerId) return;
    this.providerReviewsLoading = true;
    this.localServices.getProviderReviews(providerId).subscribe({
      next: (res) => {
        this.providerReviews = res.data;
        this.providerReviewsLoading = false;
      },
      error: () => {
        this.providerReviews = [];
        this.providerReviewsLoading = false;
      }
    });
  }

  private getDemoServices(): ServiceItem[] {
    const category = this.category.toLowerCase();
    const city = this.city.trim().toLowerCase();
    return [...DEMO_SERVICES].filter((service, index, list) => {
      const duplicateIndex = list.findIndex((entry) => entry.phone === service.phone && entry.name === service.name);
      if (duplicateIndex !== index) {
        return false;
      }

      const categoryMatch = category ? service.category === category : true;
      const cityMatch = city ? service.city.toLowerCase() === city : true;
      return categoryMatch && cityMatch;
    });
  }

  private buildDemoRecommendation(): ServiceRecommendation | null {
    return this.buildRecommendationFromServices(this.getDemoServices());
  }

  private buildRecommendationFromServices(services: ServiceItem[]): ServiceRecommendation | null {
    const ranked = [...services].sort((left, right) => this.scoreService(right) - this.scoreService(left));
    const provider = ranked[0];

    if (!provider || provider.rating == null || provider.responseTimeMinutes == null || provider.availability == null) {
      return null;
    }

    return {
      provider: {
        ...provider,
        rating: provider.rating,
        responseTimeMinutes: provider.responseTimeMinutes,
        availability: provider.availability,
        highResponseRate: Boolean(provider.highResponseRate),
        recommendationScore: this.scoreService(provider)
      },
      reason: `Recommended: ${provider.name} - ${provider.rating} star - ${provider.responseTimeMinutes} mins away - ${provider.highResponseRate ? 'High response rate' : 'Reliable availability'}`,
      scoreBreakdown: {
        rating: provider.rating,
        responseTimeMinutes: provider.responseTimeMinutes,
        availability: provider.availability,
        verified: provider.verified,
        highResponseRate: Boolean(provider.highResponseRate)
      }
    };
  }

  private mapMarketplaceProviderToProviderProfile(provider: {
    id: string;
    category: string;
    name: string;
    address: string;
    city: string;
    phone: string;
    rating: number | null;
    userRatingCount: number;
    verified: boolean;
    openNow: boolean | null;
    businessStatus: string;
  }): ProviderProfile {
    const createdAt = new Date().toISOString();

    return {
      id: provider.id,
      userId: provider.id,
      businessName: provider.name,
      ownerName: provider.name,
      mobile: provider.phone || 'Not shared',
      email: '',
      category: provider.category,
      city: provider.city || this.city,
      address: provider.address || provider.city || this.city,
      availability: provider.openNow === false ? 'busy' : 'available',
      experienceYears: 1,
      verified: provider.verified,
      rating: provider.rating ?? 4.2,
      reviewCount: provider.userRatingCount ?? 0,
      responseTimeMinutes: provider.openNow === false ? 18 : 10,
      highResponseRate: (provider.rating ?? 0) >= 4.4,
      createdAt
    };
  }

  private mapMarketplaceProviderToServiceItem(provider: {
    id: string;
    category: string;
    name: string;
    city: string;
    phone: string;
    rating: number | null;
    userRatingCount: number;
    verified: boolean;
    openNow: boolean | null;
  }): ServiceItem {
    return {
      _id: provider.id,
      category: provider.category,
      name: provider.name,
      phone: provider.phone || 'Not shared',
      city: provider.city || this.city,
      verified: provider.verified,
      rating: provider.rating ?? 4.2,
      reviewCount: provider.userRatingCount ?? 0,
      responseTimeMinutes: provider.openNow === false ? 18 : 10,
      availability: provider.openNow === false ? 'busy' : 'available',
      highResponseRate: (provider.rating ?? 0) >= 4.4
    };
  }

  private scoreService(service: ServiceItem): number {
    const ratingScore = (service.rating || 0) * 20;
    const responseScore = Math.max(0, 30 - (service.responseTimeMinutes || 30));
    const verifiedScore = service.verified ? 14 : 4;
    const availabilityScore = service.availability === 'available' ? 12 : 3;
    const responseRateScore = service.highResponseRate ? 8 : 0;

    return ratingScore + responseScore + verifiedScore + availabilityScore + responseRateScore;
  }

  private ensureSelectedProvider(): void {
    if (!this.providers.length) {
      this.selectedProviderId = '';
      return;
    }

    const stillExists = this.providers.some((provider) => provider.id === this.selectedProviderId);
    if (!stillExists) {
      this.selectedProviderId = this.providers[0].id;
    }
  }

  private getOfferingsForCategory(category: string): string[] {
    return CATEGORY_OFFERINGS[category] ?? ['General local support'];
  }

  private syncAdminUser(user: AdminUser): void {
    if (!this.adminOverview) {
      return;
    }

    this.adminOverview.users = this.adminOverview.users.map((entry) => (entry.id === user.id ? user : entry));
    this.refreshAdminMetrics();
  }

  private refreshAdminMetrics(): void {
    if (!this.adminOverview) {
      return;
    }

    const users = this.adminOverview.users;
    const providers = this.adminOverview.providers;
    const alerts = this.adminOverview.alerts;
    const reviews = this.adminOverview.reviews;

    this.adminOverview.metrics = {
      userCount: users.length,
      activeUserCount: users.filter((user) => user.isActive && user.approvalStatus !== 'suspended').length,
      pendingUserCount: users.filter((user) => user.approvalStatus === 'pending').length,
      providerCount: providers.length,
      verifiedProviderCount: providers.filter((provider) => provider.verified).length,
      pendingProviderCount: providers.filter((provider) => !provider.verified).length,
      reviewCount: reviews.length,
      openSosCount: alerts.filter((alert) => ['queued', 'dispatching'].includes(alert.status)).length
    };
  }
}
