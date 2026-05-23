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
    triggerSos(payload) {
        return this.api.post('/emergency/sos', payload);
    }
    analyzeEmergency(query) {
        return this.api.post('/emergency/analyze', { query });
    }
    getSmartLockOverview() {
        return this.api.get('/smart-lock/overview');
    }
    updateSmartLock(payload) {
        return this.api.post('/smart-lock/action', payload);
    }
    static { this.ɵfac = function LocalServicesService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LocalServicesService)(i0.ɵɵinject(i1.ApiService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalServicesService, factory: LocalServicesService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalServicesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.ApiService }], null); })();
//# sourceMappingURL=local-services.service.js.map