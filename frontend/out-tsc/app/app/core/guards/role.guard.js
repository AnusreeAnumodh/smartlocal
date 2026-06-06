import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/session.service";
import * as i2 from "@angular/router";
export class RoleGuard {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    canActivate(route) {
        const expectedRoles = route.data['roles'] ?? [];
        const currentRole = this.sessionService.currentRole;
        if (expectedRoles.includes(currentRole)) {
            return true;
        }
        return this.router.parseUrl('/dashboard');
    }
    static { this.ɵfac = function RoleGuard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RoleGuard)(i0.ɵɵinject(i1.SessionService), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RoleGuard, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.SessionService }, { type: i2.Router }], null); })();
//# sourceMappingURL=role.guard.js.map