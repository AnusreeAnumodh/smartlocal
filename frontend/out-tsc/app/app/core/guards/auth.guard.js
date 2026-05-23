import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/session.service";
import * as i2 from "@angular/router";
export class AuthGuard {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    canActivate() {
        return this.sessionService.isAuthenticated ? true : this.router.parseUrl('/auth/login');
    }
    static { this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthGuard)(i0.ɵɵinject(i1.SessionService), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.SessionService }, { type: i2.Router }], null); })();
//# sourceMappingURL=auth.guard.js.map