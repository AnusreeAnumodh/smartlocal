import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { storage } from '../../../utilities/storage.util';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/session.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../core/services/api.service";
const LOCAL_PROVIDER_KEY = 'smartlocal_local_providers';
const LOCAL_USER_KEY = 'smartlocal_local_users';
const LOCAL_DEMO_PROVIDER = {
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
    role: 'user',
    accountType: 'community',
    communityName: 'Kochi Residents Forum',
    locality: 'Kochi',
    createdAt: new Date().toISOString()
};
export class AuthService {
    constructor(sessionService, router, api) {
        this.sessionService = sessionService;
        this.router = router;
        this.api = api;
    }
    login(payload) {
        if (!payload.mobile || !payload.password) {
            return throwError(() => new Error('Mobile number and password are required'));
        }
        return this.api.post('/auth/login', payload).pipe(catchError(() => {
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
                            role: 'admin',
                            createdAt: new Date().toISOString()
                        },
                        providerProfile: null
                    }
                });
            }
            const localMatch = this.getStoredProviders().find((provider) => provider.mobile === payload.mobile && provider.password === payload.password);
            if (localMatch) {
                return of(this.buildLocalProviderAuthResponse(localMatch));
            }
            const localUser = this.getStoredUsers().find((user) => user.mobile === payload.mobile && user.password === payload.password);
            if (localUser) {
                return of(this.buildLocalUserAuthResponse(localUser));
            }
            return throwError(() => new Error('Invalid mobile number or password'));
        }), tap((response) => this.applySession(response)));
    }
    continueAsGuest() {
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
    registerUser(payload) {
        return this.api.post('/auth/register/user', payload).pipe(catchError(() => {
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
                role: 'user',
                accountType: payload.accountType,
                communityName: payload.accountType === 'community' ? payload.communityName || payload.fullName : '',
                locality: payload.locality || payload.city,
                createdAt: new Date().toISOString()
            };
            users.push(user);
            storage.setItem(LOCAL_USER_KEY, JSON.stringify(users.filter((entry) => entry.id !== LOCAL_DEMO_USER.id)));
            return of(this.buildLocalUserAuthResponse(user));
        }), tap((response) => this.applySession(response)));
    }
    registerProvider(payload) {
        return this.api.post('/auth/register/provider', payload).pipe(catchError(() => {
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
        }), tap((response) => this.applySession(response)));
    }
    signUp(payload) {
        return this.api.post('/auth/register', payload).pipe(catchError(() => {
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
        }));
    }
    resetPassword(payload) {
        return this.api.post('/auth/reset-password', payload).pipe(catchError(() => {
            const providerMatch = this.getStoredProviders().find((provider) => provider.mobile === payload.mobile);
            if (providerMatch) {
                const providers = this.getStoredProviders().map((provider) => provider.mobile === payload.mobile ? { ...provider, password: payload.newPassword } : provider);
                storage.setItem(LOCAL_PROVIDER_KEY, JSON.stringify(providers.filter((entry) => entry.id !== LOCAL_DEMO_PROVIDER.id)));
                return of({ message: 'Password reset successful. You can login with the new password now.' });
            }
            const userMatch = this.getStoredUsers().find((user) => user.mobile === payload.mobile);
            if (userMatch) {
                const users = this.getStoredUsers().map((user) => user.mobile === payload.mobile ? { ...user, password: payload.newPassword } : user);
                storage.setItem(LOCAL_USER_KEY, JSON.stringify(users.filter((entry) => entry.id !== LOCAL_DEMO_USER.id)));
                return of({ message: 'Password reset successful. You can login with the new password now.' });
            }
            return throwError(() => new Error('No account found for this mobile number'));
        }));
    }
    logout() {
        this.sessionService.clearToken();
        this.router.navigate(['/auth/login']);
    }
    getLocalProviders() {
        return this.getStoredProviders().map(({ password: _password, ...provider }) => provider);
    }
    applySession(response) {
        this.sessionService.setSession({
            token: response.data.token,
            user: response.data.user,
            providerProfile: response.data.providerProfile
        });
        this.router.navigate(['/dashboard']);
    }
    getStoredProviders() {
        const raw = storage.getItem(LOCAL_PROVIDER_KEY);
        if (!raw) {
            return [LOCAL_DEMO_PROVIDER];
        }
        try {
            return [LOCAL_DEMO_PROVIDER, ...JSON.parse(raw)];
        }
        catch {
            return [LOCAL_DEMO_PROVIDER];
        }
    }
    getStoredUsers() {
        const raw = storage.getItem(LOCAL_USER_KEY);
        if (!raw) {
            return [LOCAL_DEMO_USER];
        }
        try {
            return [LOCAL_DEMO_USER, ...JSON.parse(raw)];
        }
        catch {
            return [LOCAL_DEMO_USER];
        }
    }
    buildLocalProviderAuthResponse(provider) {
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
    buildLocalUserAuthResponse(user) {
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
    static { this.ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.SessionService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.ApiService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.SessionService }, { type: i2.Router }, { type: i3.ApiService }], null); })();
//# sourceMappingURL=auth.service.js.map