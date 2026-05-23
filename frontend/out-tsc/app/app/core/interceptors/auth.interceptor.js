import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/session.service";
export class AuthInterceptor {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    intercept(req, next) {
        const token = this.sessionService.token;
        if (!token) {
            return next.handle(req);
        }
        return next.handle(req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        }));
    }
    static { this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthInterceptor)(i0.ɵɵinject(i1.SessionService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthInterceptor, [{
        type: Injectable
    }], () => [{ type: i1.SessionService }], null); })();
//# sourceMappingURL=auth.interceptor.js.map