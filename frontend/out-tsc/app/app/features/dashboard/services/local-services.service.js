import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/api.service";
export class LocalServicesService {
    constructor(api) {
        this.api = api;
    }
    getHealth() {
        return this.api.get('/health');
    }
    getServices(category, city) {
        const query = new URLSearchParams();
        if (category)
            query.append('category', category);
        if (city)
            query.append('city', city);
        return this.api.get(`/services?${query.toString()}`);
    }
    getRecommendation(category, city) {
        const query = new URLSearchParams();
        if (category)
            query.append('category', category);
        if (city)
            query.append('city', city);
        return this.api.get(`/services/recommendation?${query.toString()}`);
    }
    getProviders(category, city) {
        const query = new URLSearchParams();
        if (category)
            query.append('category', category);
        if (city)
            query.append('city', city);
        const suffix = query.toString();
        return this.api.get(`/providers${suffix ? `?${suffix}` : ''}`);
    }
    searchMarketplace(category, city, query, lat, lng, radius) {
        const params = new URLSearchParams({ category, city });
        if (query)
            params.append('query', query);
        if (lat != null)
            params.append('lat', String(lat));
        if (lng != null)
            params.append('lng', String(lng));
        if (radius != null)
            params.append('radius', String(radius));
        return this.api.get(`/marketplace/search?${params.toString()}`);
    }
    sendMarketplaceLead(payload) {
        return this.api.post('/marketplace/lead', payload);
    }
    createMarketplaceOrder(payload) {
        return this.api.post('/marketplace/payments/order', payload);
    }
    triggerSos(payload) {
        return this.api.post('/emergency/sos', payload);
    }
    analyzeEmergency(query, emergencyType) {
        return this.api.post('/emergency/analyze', { query, emergencyType });
    }
    getSmartLockOverview() {
        return this.api.get('/smart-lock/overview');
    }
    updateSmartLock(payload) {
        return this.api.post('/smart-lock/action', payload);
    }
    getProviderReviews(providerId) {
        return this.api.get(`/providers/${providerId}/reviews`);
    }
    createProviderReview(providerId, payload) {
        return this.api.post(`/providers/${providerId}/reviews`, payload);
    }
    getAdminOverview() {
        return this.api.get('/admin/overview');
    }
    updateProviderVerification(providerId, verified) {
        return this.api.patch(`/admin/providers/${providerId}/verification`, { verified });
    }
    updateUserApprovalStatus(userId, approvalStatus) {
        return this.api.patch(`/admin/users/${userId}/approval-status`, { approvalStatus });
    }
    updateUserRole(userId, role) {
        return this.api.patch(`/admin/users/${userId}/role`, { role });
    }
    updateSosStatus(alertId, status) {
        return this.api.patch(`/admin/sos-alerts/${alertId}/status`, { status });
    }
    static { this.ɵfac = function LocalServicesService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LocalServicesService)(i0.ɵɵinject(i1.ApiService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalServicesService, factory: LocalServicesService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalServicesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.ApiService }], null); })();
//# sourceMappingURL=local-services.service.js.map