import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FRONTEND_DEFAULTS } from '../../../shared/config/app-config';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/session.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../core/services/api.service";
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
        return this.api.post('/auth/login', payload).pipe(tap((response) => this.applySession(response)));
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
                approvalStatus: 'approved',
                isActive: true,
                createdAt: new Date().toISOString()
            },
            providerProfile: null
        });
        this.router.navigate(['/dashboard']);
    }
    registerUser(payload) {
        return this.api.post('/auth/register/user', payload).pipe(tap((response) => this.applySession(response)));
    }
    registerProvider(payload) {
        return this.api.post('/auth/register/provider', payload).pipe(tap((response) => this.applySession(response)));
    }
    signUp(payload) {
        const requestPayload = payload.role === 'provider'
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
        return this.api.post('/auth/register', requestPayload).pipe(tap((response) => this.applySession(response)));
    }
    resetPassword(payload) {
        return this.api.post('/auth/reset-password', payload);
    }
    requestOtp(mobile, channel = 'sms') {
        return this.api.post('/auth/otp/request', { mobile, channel });
    }
    verifyOtp(mobile, code) {
        return this.api.post('/auth/otp/verify', { mobile, code });
    }
    logout() {
        this.sessionService.clearToken();
        this.router.navigate(['/auth/login']);
    }
    applySession(response) {
        this.sessionService.setSession({
            token: response.data.token,
            user: response.data.user,
            providerProfile: response.data.providerProfile
        });
        this.router.navigate(['/dashboard']);
    }
    static { this.ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.SessionService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.ApiService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.SessionService }, { type: i2.Router }, { type: i3.ApiService }], null); })();
//# sourceMappingURL=auth.service.js.map