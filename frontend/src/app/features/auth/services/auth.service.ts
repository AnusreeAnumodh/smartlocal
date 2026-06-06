import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from '../../../core/services/session.service';
import { ApiService } from '../../../core/services/api.service';
import { LoginRequest } from '../models/login-request.model';
import { ProviderRegistrationRequest } from '../models/provider-registration-request.model';
import { AuthResponse } from '../models/auth-response.model';
import { UserRegistrationRequest } from '../models/user-registration-request.model';
import { ResetPasswordRequest } from '../models/reset-password-request.model';
import { SignUpRequest } from '../models/sign-up-request.model';
import { FRONTEND_DEFAULTS } from '../../../shared/config/app-config';

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

    return this.api.post<AuthResponse>('/auth/login', payload).pipe(tap((response) => this.applySession(response)));
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
        approvalStatus: 'approved',
        isActive: true,
        createdAt: new Date().toISOString()
      },
      providerProfile: null
    });

    this.router.navigate(['/dashboard']);
  }

  registerUser(payload: UserRegistrationRequest): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/register/user', payload).pipe(tap((response) => this.applySession(response)));
  }

  registerProvider(payload: ProviderRegistrationRequest): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/register/provider', payload).pipe(tap((response) => this.applySession(response)));
  }

  signUp(payload: SignUpRequest): Observable<AuthResponse> {
    const requestPayload =
      payload.role === 'provider'
        ? {
            ...payload,
            businessName: payload.businessName || payload.fullName,
            category: payload.category || FRONTEND_DEFAULTS.category,
            address: payload.address || '',
            experienceYears: payload.experienceYears || 1
          }
        : {
            ...payload,
            accountType: payload.accountType || 'individual',
            communityName: payload.communityName || '',
            locality: payload.locality || payload.city
          };

    return this.api.post<AuthResponse>('/auth/register', requestPayload).pipe(tap((response) => this.applySession(response)));
  }

  resetPassword(payload: ResetPasswordRequest): Observable<{ message: string }> {
    return this.api.post<{ message: string }>('/auth/reset-password', payload);
  }

  requestOtp(mobile: string, channel: 'sms' | 'whatsapp' | 'call' = 'sms'): Observable<{ message: string; data: unknown; source: string }> {
    return this.api.post('/auth/otp/request', { mobile, channel });
  }

  verifyOtp(mobile: string, code: string): Observable<{ message: string; data: unknown; source: string }> {
    return this.api.post('/auth/otp/verify', { mobile, code });
  }

  logout(): void {
    this.sessionService.clearToken();
    this.router.navigate(['/auth/login']);
  }

  private applySession(response: AuthResponse): void {
    this.sessionService.setSession({
      token: response.data.token,
      user: response.data.user,
      providerProfile: response.data.providerProfile
    });
    this.router.navigate(['/dashboard']);
  }
}
