import { Component, OnInit } from '@angular/core';
import { LocalServicesService } from '../../services/local-services.service';
import { ServiceItem } from '../../models/service-item.model';
import { ServiceRecommendation } from '../../models/service-recommendation.model';
import { ProviderProfile } from '../../../auth/models/provider-profile.model';
import { SessionService } from '../../../../core/services/session.service';
import { AuthService } from '../../../auth/services/auth.service';

const KERALA_CITIES = [
  'Kochi',
  'Thiruvananthapuram',
  'Kozhikode',
  'Thrissur',
  'Kollam',
  'Alappuzha',
  'Kottayam',
  'Kannur',
  'Palakkad',
  'Malappuram'
];

const DEMO_SERVICES: ServiceItem[] = [
  {
    _id: 'demo-1',
    category: 'plumber',
    name: 'Ravi Plumbing Services',
    phone: '+91-9000000001',
    city: 'Kochi',
    verified: true,
    rating: 4.8,
    responseTimeMinutes: 5,
    availability: 'available',
    highResponseRate: true
  },
  {
    _id: 'demo-2',
    category: 'plumber',
    name: 'Alappuzha Pipe Rescue',
    phone: '+91-9000000005',
    city: 'Alappuzha',
    verified: true,
    rating: 4.5,
    responseTimeMinutes: 11,
    availability: 'available',
    highResponseRate: false
  },
  {
    _id: 'demo-3',
    category: 'electrician',
    name: 'Trivandrum Power Care',
    phone: '+91-9000000002',
    city: 'Thiruvananthapuram',
    verified: true,
    rating: 4.7,
    responseTimeMinutes: 9,
    availability: 'busy',
    highResponseRate: true
  },
  {
    _id: 'demo-4',
    category: 'medical_store',
    name: 'Calicut LifeCare Pharmacy',
    phone: '+91-9000000003',
    city: 'Kozhikode',
    verified: true,
    rating: 4.6,
    responseTimeMinutes: 6,
    availability: 'available',
    highResponseRate: true
  },
  {
    _id: 'demo-5',
    category: 'ambulance',
    name: 'Thrissur Rapid Ambulance 24x7',
    phone: '+91-9000000004',
    city: 'Thrissur',
    verified: true,
    rating: 4.9,
    responseTimeMinutes: 4,
    availability: 'available',
    highResponseRate: true
  },
  {
    _id: 'demo-6',
    category: 'medical_store',
    name: 'Kottayam Health Hub',
    phone: '+91-9000000007',
    city: 'Kottayam',
    verified: true,
    rating: 4.4,
    responseTimeMinutes: 8,
    availability: 'available',
    highResponseRate: true
  },
  {
    _id: 'demo-7',
    category: 'ambulance',
    name: 'Kollam Emergency Link',
    phone: '+91-9000000008',
    city: 'Kollam',
    verified: true,
    rating: 4.7,
    responseTimeMinutes: 7,
    availability: 'available',
    highResponseRate: true
  }
];

const DEMO_PROVIDERS: ProviderProfile[] = [
  {
    id: 'provider-demo-1',
    userId: 'user-demo-provider',
    businessName: 'Ravi Plumbing Services',
    ownerName: 'Ravi Kumar',
    mobile: '+91-9000000001',
    email: 'ravi@smartlocal.app',
    category: 'plumber',
    city: 'Kochi',
    address: 'Marine Drive, Kochi',
    availability: 'available',
    experienceYears: 7,
    verified: true,
    rating: 4.8,
    responseTimeMinutes: 5,
    highResponseRate: true,
    createdAt: new Date().toISOString()
  }
];

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
  city = 'Kochi';
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
    this.loadProviders();
  }

  searchServices(): void {
    this.loadRecommendation();
    this.loadProviders();
    this.servicesLoading = true;

    this.localServices.getServices(this.category, this.city).subscribe({
      next: (res) => {
        this.services = res.data;
        this.servicesSource = res.source;
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
    const ranked = [...this.getDemoServices()].sort((left, right) => this.scoreService(right) - this.scoreService(left));
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
