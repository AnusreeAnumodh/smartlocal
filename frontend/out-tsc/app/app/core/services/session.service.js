import { Injectable } from '@angular/core';
import { storage } from '../../utilities/storage.util';
import * as i0 from "@angular/core";
const TOKEN_KEY = 'smartlocal_auth_token';
const SESSION_KEY = 'smartlocal_user_session';
export class SessionService {
    get token() {
        return storage.getItem(TOKEN_KEY);
    }
    get session() {
        const raw = storage.getItem(SESSION_KEY);
        if (!raw) {
            return null;
        }
        try {
            return JSON.parse(raw);
        }
        catch {
            return null;
        }
    }
    get isAuthenticated() {
        return Boolean(this.token);
    }
    setSession(session) {
        storage.setItem(SESSION_KEY, JSON.stringify(session));
        storage.setItem(TOKEN_KEY, session.token);
    }
    setToken(token) {
        storage.setItem(TOKEN_KEY, token);
    }
    clearToken() {
        storage.removeItem(TOKEN_KEY);
        storage.removeItem(SESSION_KEY);
    }
    static { this.ɵfac = function SessionService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SessionService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SessionService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=session.service.js.map