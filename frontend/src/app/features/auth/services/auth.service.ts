import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from '../../../core/services/session.service';
import { ApiService } from '../../../core/services/api.service';
import { storage } from '../../../utilities/storage.util';
import { LoginRequest } from '../models/login-request.model';
import { ProviderRegistrationRequest } from '../models/provider-registration-request.model';
import { AuthResponse } from '../models/auth-response.model';
import { ProviderProfile } from '../models/provider-profile.model';
import { UserRegistrationRequest } from '../models/user-registration-request.model';
import { ResetPasswordRequest } from '../models/reset-password-request.model';
import { SignUpRequest } from '../models/sign-up-request.model';

const LOCAL_PROVIDER_KEY = 'smartlocal_local_providers';
const LOCAL_USER_KEY = 'smartlocal_local_users';
const LOCAL_DEMO_PROVIDER: ProviderProfile & { password: string } = {
  id: 'local-demo-provider',
  userId: 'local-demo-provider-user',
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
  createdAt: new Date().toISOString(),
  password: 'provider123'
};
const LOCAL_DEMO_USER = {
  id: 'local-demo-public-user',
  fullName: 'Anjali Joseph',
  mobile: '+91-9000000200',
  email: 'anjali@smartlocal.app',
  password: 'user123',
  role: 'user' as const,
  accountType: 'community' as const,
  communityName: 'Kochi Residents Forum',
  locality: 'Kochi',
  createdAt: new Date().toISOString()
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private sessionService: SessionService,
    private router: Router,
    private api: ApiService
  ) {}

  login(payload: LoginRequest): Observable<AuthResponse> {
    if (!payload.mobile || !payload.password) {
      return throwError(() => new Error('Mobile number and password are required'));
    }

    return this.api.post<AuthResponse>('/auth/login', payload).pipe(
      catchError(() => {
        if (payload.mobile === '+91-9000000100' && payload.password === 'admin123') {
          return of({
            message: 'Local admin session created',
            source: 'frontend-local',
            data: {
              token: 'local-admin-token',
              user: {
                id: 'local-admin-user',
                fullName: 'Aarav Admin',
                mobile: '+91-9000000100',
                email: 'admin@smartlocal.app',
                role: 'admin' as const,
                createdAt: new Date().toISOString()
              },
              providerProfile: null
            }
          });
        }

        const localMatch = this.getStoredProviders().find(
          (provider) => provider.mobile === payload.mobile && (provider as ProviderProfile & { password?: string }).password === payload.password
        );

        if (localMatch) {
          return of(this.buildLocalProviderAuthResponse(localMatch));
        }

        const localUser = this.getStoredUsers().find((user) => user.mobile === payload.mobile && user.password === payload.password);

        if (localUser) {
          return of(this.buildLocalUserAuthResponse(localUser));
        }

        return throwError(() => new Error('Invalid mobile number or password'));
      }),
      tap((response) => this.applySession(response))
    );
  }

  continueAsGuest(): void {
    this.sessionService.setSession({
      token: `guest-session-${Date.now()}`,
      user: {
        id: `guest-${Date.now()}`,
        fullName: 'Guest Access',
        mobile: '',
        email: '',
        role: 'guest',
        createdAt: new Date().toISOString()
      },
      providerProfile: null
    });

    this.router.navigate(['/dashboard']);
  }

  registerUser(payload: UserRegistrationRequest): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/register/user', payload).pipe(
      catchError(() => {
        const users = this.getStoredUsers();

        if (users.some((user) => user.mobile === payload.mobile)) {
          return throwError(() => new Error('A user with this mobile number is already registered'));
        }

        const user = {
          id: `local-user-${Date.now()}`,
          fullName: payload.fullName,
          mobile: payload.mobile,
          email: payload.email,
          password: payload.password,
          role: 'user' as const,
          accountType: payload.accountType,
          communityName: payload.accountType === 'community' ? payload.communityName || payload.fullName : '',
          locality: payload.locality || payload.city,
          createdAt: new Date().toISOString()
        };

        users.push(user);
        storage.setItem(LOCAL_USER_KEY, JSON.stringify(users.filter((entry) => entry.id !== LOCAL_DEMO_USER.id)));

        return of(this.buildLocalUserAuthResponse(user));
      }),
      tap((response) => this.applySession(response))
    );
  }

  registerProvider(payload: ProviderRegistrationRequest): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/register/provider', payload).pipe(
      catchError(() => {
        const providers = this.getStoredProviders();

        if (providers.some((provider) => provider.mobile === payload.mobile)) {
          return throwError(() => new Error('A provider with this mobile number is already registered'));
        }

        const createdAt = new Date().toISOString();
        const provider = {
          id: `local-provider-${Date.now()}`,
          userId: `local-user-${Date.now()}`,
          businessName: payload.businessName,
          ownerName: payload.fullName,
          mobile: payload.mobile,
          email: payload.email,
          category: payload.category,
          city: payload.city,
          address: payload.address,
          availability: 'available',
          experienceYears: Number(payload.experienceYears) || 1,
          verified: false,
          rating: 4.2,
          responseTimeMinutes: 15,
          highResponseRate: false,
          createdAt,
          password: payload.password
        };

        providers.push(provider);
        storage.setItem(LOCAL_PROVIDER_KEY, JSON.stringify(providers));

        return of(this.buildLocalProviderAuthResponse(provider));
      }),
      tap((response) => this.applySession(response))
    );
  }

  signUp(payload: SignUpRequest): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/register', payload).pipe(
      catchError(() => {
        if (payload.role === 'provider') {
          return this.registerProvider({
            fullName: payload.fullName,
            mobile: payload.mobile,
            email: payload.email,
            password: payload.password,
            businessName: payload.businessName || payload.fullName,
            category: payload.category || 'plumber',
            city: payload.city,
            address: payload.address || '',
            experienceYears: payload.experienceYears || 1
          });
        }

        return this.registerUser({
          fullName: payload.fullName,
          mobile: payload.mobile,
          email: payload.email,
          password: payload.password,
          city: payload.city,
          accountType: payload.accountType || 'individual',
          communityName: payload.communityName || '',
          locality: payload.locality || payload.city
        });
      })
    );
  }

  resetPassword(payload: ResetPasswordRequest): Observable<{ message: string }> {
    return this.api.post<{ message: string }>('/auth/reset-password', payload).pipe(
      catchError(() => {
        const providerMatch = this.getStoredProviders().find((provider) => provider.mobile === payload.mobile);
        if (providerMatch) {
          const providers = this.getStoredProviders().map((provider) =>
            provider.mobile === payload.mobile ? { ...provider, password: payload.newPassword } : provider
          );
          storage.setItem(LOCAL_PROVIDER_KEY, JSON.stringify(providers.filter((entry) => entry.id !== LOCAL_DEMO_PROVIDER.id)));
          return of({ message: 'Password reset successful. You can login with the new password now.' });
        }

        const userMatch = this.getStoredUsers().find((user) => user.mobile === payload.mobile);
        if (userMatch) {
          const users = this.getStoredUsers().map((user) =>
            user.mobile === payload.mobile ? { ...user, password: payload.newPassword } : user
          );
          storage.setItem(LOCAL_USER_KEY, JSON.stringify(users.filter((entry) => entry.id !== LOCAL_DEMO_USER.id)));
          return of({ message: 'Password reset successful. You can login with the new password now.' });
        }

        return throwError(() => new Error('No account found for this mobile number'));
      })
    );
  }

  logout(): void {
    this.sessionService.clearToken();
    this.router.navigate(['/auth/login']);
  }

  getLocalProviders(): ProviderProfile[] {
    return this.getStoredProviders().map(({ password: _password, ...provider }) => provider);
  }

  private applySession(response: AuthResponse): void {
    this.sessionService.setSession({
      token: response.data.token,
      user: response.data.user,
      providerProfile: response.data.providerProfile
    });
    this.router.navigate(['/dashboard']);
  }

  private getStoredProviders(): Array<ProviderProfile & { password?: string }> {
    const raw = storage.getItem(LOCAL_PROVIDER_KEY);

    if (!raw) {
      return [LOCAL_DEMO_PROVIDER];
    }

    try {
      return [LOCAL_DEMO_PROVIDER, ...(JSON.parse(raw) as Array<ProviderProfile & { password?: string }>)];
    } catch {
      return [LOCAL_DEMO_PROVIDER];
    }
  }

  private getStoredUsers(): Array<{
    id: string;
    fullName: string;
    mobile: string;
    email: string;
    password: string;
    role: 'user';
    accountType: 'individual' | 'community';
    communityName: string;
    locality: string;
    createdAt: string;
  }> {
    const raw = storage.getItem(LOCAL_USER_KEY);

    if (!raw) {
      return [LOCAL_DEMO_USER];
    }

    try {
      return [LOCAL_DEMO_USER, ...(JSON.parse(raw) as Array<typeof LOCAL_DEMO_USER>)];
    } catch {
      return [LOCAL_DEMO_USER];
    }
  }

  private buildLocalProviderAuthResponse(provider: ProviderProfile & { password?: string }): AuthResponse {
    return {
      message: 'Local provider session created',
      source: 'frontend-local',
      data: {
        token: `local-provider-token-${provider.userId}`,
        user: {
          id: provider.userId,
          fullName: provider.ownerName,
          mobile: provider.mobile,
          email: provider.email,
          role: 'provider',
          createdAt: provider.createdAt
        },
        providerProfile: {
          id: provider.id,
          userId: provider.userId,
          businessName: provider.businessName,
          ownerName: provider.ownerName,
          mobile: provider.mobile,
          email: provider.email,
          category: provider.category,
          city: provider.city,
          address: provider.address,
          availability: provider.availability,
          experienceYears: provider.experienceYears,
          verified: provider.verified,
          rating: provider.rating,
          responseTimeMinutes: provider.responseTimeMinutes,
          highResponseRate: provider.highResponseRate,
          createdAt: provider.createdAt
        }
      }
    };
  }

  private buildLocalUserAuthResponse(user: {
    id: string;
    fullName: string;
    mobile: string;
    email: string;
    role: 'user';
    accountType: 'individual' | 'community';
    communityName: string;
    locality: string;
    createdAt: string;
  }): AuthResponse {
    return {
      message: 'Local user session created',
      source: 'frontend-local',
      data: {
        token: `local-user-token-${user.id}`,
        user: {
          id: user.id,
          fullName: user.fullName,
          mobile: user.mobile,
          email: user.email,
          role: user.role,
          accountType: user.accountType,
          communityName: user.communityName,
          locality: user.locality,
          createdAt: user.createdAt
        },
        providerProfile: null
      }
    };
  }
}
