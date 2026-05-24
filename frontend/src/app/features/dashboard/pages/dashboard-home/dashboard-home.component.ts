import { Component, OnInit } from '@angular/core';
import { LocalServicesService } from '../../services/local-services.service';
import { ServiceItem } from '../../models/service-item.model';
import { ServiceRecommendation } from '../../models/service-recommendation.model';
import { ProviderProfile } from '../../../auth/models/provider-profile.model';
import { SessionService } from '../../../../core/services/session.service';
import { AuthService } from '../../../auth/services/auth.service';
import { DEMO_PROVIDERS, DEMO_SERVICES, KERALA_CITIES } from '../../../../shared/data/kerala-directory.data';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent implements OnInit {
  readonly cities = KERALA_CITIES;
  backendStatus = 'Checking...';
  backendMode = '';
  isUsingDemoData = false;
  category = 'plumber';
  city = 'Ernakulam';
  providersLoading = false;
  servicesLoading = false;
  recommendationLoading = false;
  services: ServiceItem[] = [];
  servicesSource = '';
  servicesLoaded = false;
  recommendation: ServiceRecommendation | null = null;
  recommendationSource = '';
  recommendationMessage = '';
  currentUserName = '';
  currentUserRole = '';
  currentProviderBusiness = '';
  selectedProviderId = '';
  providers: ProviderProfile[] = [];
  providersSource = '';
  providerProfile: ProviderProfile | null = null;

  constructor(
    private localServices: LocalServicesService,
    private sessionService: SessionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const session = this.sessionService.session;
    this.currentUserName = session?.user.fullName ?? 'Guest User';
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
        const localProviders = this.authService.getLocalProviders();
        const mergedProviders = [...DEMO_PROVIDERS, ...localProviders].filter((provider, index, list) => {
          return list.findIndex((entry) => entry.mobile === provider.mobile && entry.businessName === provider.businessName) === index;
        });

        this.providers = mergedProviders.filter((provider) => {
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

  get isProviderView(): boolean {
    return this.currentUserRole === 'provider';
  }

  get isUserView(): boolean {
    return this.currentUserRole === 'user' || this.currentUserRole === 'guest' || this.currentUserRole === 'visitor' || this.currentUserRole === 'admin';
  }

  get selectedProvider(): ProviderProfile | null {
    return this.providers.find((provider) => provider.id === this.selectedProviderId) ?? this.providers[0] ?? null;
  }

  get providerOfferings(): string[] {
    const provider = this.selectedProvider;
    return provider ? this.getOfferingsForCategory(provider.category) : [];
  }

  get providerAudienceOfferings(): string[] {
    return this.providerProfile ? this.getOfferingsForCategory(this.providerProfile.category) : [];
  }

  private getDemoServices(): ServiceItem[] {
    const category = this.category.toLowerCase();
    const city = this.city.trim().toLowerCase();
    const localProvidersAsServices = this.authService.getLocalProviders().map((provider) => ({
      _id: provider.id,
      category: provider.category,
      name: provider.businessName,
      phone: provider.mobile,
      city: provider.city,
      verified: provider.verified,
      rating: provider.rating,
      responseTimeMinutes: provider.responseTimeMinutes,
      availability: provider.availability,
      highResponseRate: provider.highResponseRate
    }));

    return [...DEMO_SERVICES, ...localProvidersAsServices].filter((service, index, list) => {
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
    switch (category) {
      case 'plumber':
        return ['Leak repair', 'Motor setup', 'Water tank maintenance'];
      case 'electrician':
        return ['Wiring check', 'Inverter support', 'Appliance installation'];
      case 'medical_store':
        return ['24x7 medicine support', 'Prescription pickup', 'Home delivery'];
      case 'ambulance':
        return ['Emergency pickup', 'Hospital transfer', 'Oxygen support'];
      default:
        return ['General local support'];
    }
  }
}
