import { Component } from '@angular/core';
import { APP_META } from './shared/config/app-config';
import * as i0 from "@angular/core";
import * as i1 from "./core/services/session.service";
import * as i2 from "./features/auth/services/auth.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
function AppComponent_header_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "span", 12);
    i0.ɵɵtext(2, "Signed in as");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.currentUserName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.currentUserRole);
} }
function AppComponent_header_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function AppComponent_header_1_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.logout()); });
    i0.ɵɵtext(1, "Logout");
    i0.ɵɵelementEnd();
} }
function AppComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header", 3)(1, "div", 4);
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementStart(3, "div")(4, "p", 6);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h1");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 7);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 8);
    i0.ɵɵtemplate(11, AppComponent_header_1_div_11_Template, 7, 2, "div", 9)(12, AppComponent_header_1_button_12_Template, 2, 0, "button", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.appMeta.eyebrow);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.appMeta.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.appMeta.tagline);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showSessionCopy);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isAuthenticated);
} }
export class AppComponent {
    constructor(sessionService, authService) {
        this.sessionService = sessionService;
        this.authService = authService;
        this.appMeta = APP_META;
    }
    get isAuthenticated() {
        return this.sessionService.isAuthenticated;
    }
    get currentUserName() {
        return this.sessionService.session?.user.fullName ?? 'Guest';
    }
    get currentUserRole() {
        return this.sessionService.session?.user.role ?? 'visitor';
    }
    get showSessionCopy() {
        return this.isAuthenticated && this.currentUserRole !== 'guest';
    }
    get showHeader() {
        return this.isAuthenticated;
    }
    logout() {
        this.authService.logout();
    }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(i0.ɵɵdirectiveInject(i1.SessionService), i0.ɵɵdirectiveInject(i2.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "layout"], ["class", "topbar", 4, "ngIf"], [1, "content"], [1, "topbar"], [1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "eyebrow"], [1, "brand-copy"], [1, "header-actions"], ["class", "session-copy", 4, "ngIf"], ["class", "secondary-button", 3, "click", 4, "ngIf"], [1, "session-copy"], [1, "session-label"], [1, "session-role"], [1, "secondary-button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, AppComponent_header_1_Template, 13, 5, "header", 1);
            i0.ɵɵelementStart(2, "section", 2);
            i0.ɵɵelement(3, "router-outlet");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showHeader);
        } }, dependencies: [i3.NgIf, i4.RouterOutlet], styles: [".layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 1.5rem 1rem 2rem;\n  position: relative;\n  overflow-x: clip;\n  animation: fade-up 260ms ease both;\n}\n\n.layout[_ngcontent-%COMP%]::before, \n.layout[_ngcontent-%COMP%]::after {\n  content: '';\n  position: fixed;\n  border-radius: 999px;\n  filter: blur(10px);\n  pointer-events: none;\n  z-index: 0;\n}\n\n.layout[_ngcontent-%COMP%]::before {\n  top: 72px;\n  left: -80px;\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(14, 165, 233, 0.18), transparent 68%);\n}\n\n.layout[_ngcontent-%COMP%]::after {\n  right: -60px;\n  bottom: 120px;\n  width: 220px;\n  height: 220px;\n  background: radial-gradient(circle, rgba(255, 138, 61, 0.16), transparent 70%);\n}\n\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0.75rem;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.35rem;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1280px;\n  background:\n    linear-gradient(135deg, rgba(15, 24, 45, 0.94), rgba(20, 34, 62, 0.92)),\n    linear-gradient(120deg, rgba(31, 182, 255, 0.12), rgba(255, 95, 143, 0.1));\n  border: 1px solid rgba(154, 177, 214, 0.18);\n  border-radius: 24px;\n  box-shadow: var(--shadow-soft);\n  backdrop-filter: blur(20px);\n  color: var(--ink-strong);\n  overflow: hidden;\n  animation: fade-up 300ms ease both;\n\n  .eyebrow {\n    margin: 0;\n    font-size: 0.75rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: var(--brand-rose);\n    font-weight: 700;\n  }\n\n  h1 {\n    margin: 0.2rem 0 0;\n    font-size: clamp(1.1rem, 2vw, 1.35rem);\n    font-weight: 800;\n    color: var(--ink-strong);\n  }\n}\n\n.topbar[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: auto auto -50px -30px;\n  width: 180px;\n  height: 180px;\n  border-radius: 999px;\n  background: radial-gradient(circle, rgba(31, 182, 255, 0.18), transparent 70%);\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.9rem;\n}\n\n.brand-mark[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex: 0 0 auto;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--brand-warm), var(--brand-rose));\n  box-shadow: 0 0 0 8px rgba(255, 138, 61, 0.12);\n}\n\n.brand-copy[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  max-width: 640px;\n  color: var(--ink-soft);\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.session-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.1rem;\n  padding: 0.7rem 0.95rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(154, 177, 214, 0.18);\n  text-align: right;\n}\n\n.session-label[_ngcontent-%COMP%], \n.session-role[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 0.8rem;\n  line-height: 1.3;\n}\n\n.session-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.secondary-button[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: linear-gradient(135deg, var(--brand-warm), var(--brand-rose));\n  border: 0;\n  border-radius: 12px;\n  cursor: pointer;\n  font-weight: 700;\n  box-shadow: var(--shadow-card);\n  min-width: 108px;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 1.15rem 0 0;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n@media (max-width: 720px) {\n  .layout[_ngcontent-%COMP%] {\n    padding: 0.85rem 0.75rem 1.5rem;\n  }\n\n  .topbar[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .brand[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .topbar[_ngcontent-%COMP%] {\n    top: 0;\n    border-radius: 20px;\n  }\n\n  .session-copy[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    text-align: left;\n    width: 100%;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding-top: 0.85rem;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<div class=\"layout\">\n  <header class=\"topbar\" *ngIf=\"showHeader\">\n    <div class=\"brand\">\n      <div class=\"brand-mark\" aria-hidden=\"true\"></div>\n      <div>\n        <p class=\"eyebrow\">{{ appMeta.eyebrow }}</p>\n        <h1>{{ appMeta.title }}</h1>\n        <p class=\"brand-copy\">{{ appMeta.tagline }}</p>\n      </div>\n    </div>\n    <div class=\"header-actions\">\n      <div class=\"session-copy\" *ngIf=\"showSessionCopy\">\n        <span class=\"session-label\">Signed in as</span>\n        <strong>{{ currentUserName }}</strong>\n        <span class=\"session-role\">{{ currentUserRole }}</span>\n      </div>\n      <button class=\"secondary-button\" *ngIf=\"isAuthenticated\" (click)=\"logout()\">Logout</button>\n    </div>\n  </header>\n\n  <section class=\"content\">\n    <router-outlet></router-outlet>\n  </section>\n</div>\n", styles: [".layout {\n  min-height: 100vh;\n  padding: 1.5rem 1rem 2rem;\n  position: relative;\n  overflow-x: clip;\n  animation: fade-up 260ms ease both;\n}\n\n.layout::before,\n.layout::after {\n  content: '';\n  position: fixed;\n  border-radius: 999px;\n  filter: blur(10px);\n  pointer-events: none;\n  z-index: 0;\n}\n\n.layout::before {\n  top: 72px;\n  left: -80px;\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(14, 165, 233, 0.18), transparent 68%);\n}\n\n.layout::after {\n  right: -60px;\n  bottom: 120px;\n  width: 220px;\n  height: 220px;\n  background: radial-gradient(circle, rgba(255, 138, 61, 0.16), transparent 70%);\n}\n\n.topbar {\n  position: sticky;\n  top: 0.75rem;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.35rem;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1280px;\n  background:\n    linear-gradient(135deg, rgba(15, 24, 45, 0.94), rgba(20, 34, 62, 0.92)),\n    linear-gradient(120deg, rgba(31, 182, 255, 0.12), rgba(255, 95, 143, 0.1));\n  border: 1px solid rgba(154, 177, 214, 0.18);\n  border-radius: 24px;\n  box-shadow: var(--shadow-soft);\n  backdrop-filter: blur(20px);\n  color: var(--ink-strong);\n  overflow: hidden;\n  animation: fade-up 300ms ease both;\n\n  .eyebrow {\n    margin: 0;\n    font-size: 0.75rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: var(--brand-rose);\n    font-weight: 700;\n  }\n\n  h1 {\n    margin: 0.2rem 0 0;\n    font-size: clamp(1.1rem, 2vw, 1.35rem);\n    font-weight: 800;\n    color: var(--ink-strong);\n  }\n}\n\n.topbar::before {\n  content: '';\n  position: absolute;\n  inset: auto auto -50px -30px;\n  width: 180px;\n  height: 180px;\n  border-radius: 999px;\n  background: radial-gradient(circle, rgba(31, 182, 255, 0.18), transparent 70%);\n}\n\n.brand {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.9rem;\n}\n\n.brand-mark {\n  width: 18px;\n  height: 18px;\n  flex: 0 0 auto;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--brand-warm), var(--brand-rose));\n  box-shadow: 0 0 0 8px rgba(255, 138, 61, 0.12);\n}\n\n.brand-copy {\n  margin: 0.3rem 0 0;\n  max-width: 640px;\n  color: var(--ink-soft);\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.session-copy {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.1rem;\n  padding: 0.7rem 0.95rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(154, 177, 214, 0.18);\n  text-align: right;\n}\n\n.session-label,\n.session-role {\n  color: var(--ink-soft);\n  font-size: 0.8rem;\n  line-height: 1.3;\n}\n\n.session-copy strong {\n  font-size: 0.95rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.secondary-button {\n  color: #ffffff;\n  background: linear-gradient(135deg, var(--brand-warm), var(--brand-rose));\n  border: 0;\n  border-radius: 12px;\n  cursor: pointer;\n  font-weight: 700;\n  box-shadow: var(--shadow-card);\n  min-width: 108px;\n}\n\n.content {\n  position: relative;\n  z-index: 1;\n  padding: 1.15rem 0 0;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n@media (max-width: 720px) {\n  .layout {\n    padding: 0.85rem 0.75rem 1.5rem;\n  }\n\n  .topbar,\n  .header-actions,\n  .brand {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .topbar {\n    top: 0;\n    border-radius: 20px;\n  }\n\n  .session-copy {\n    align-items: flex-start;\n    text-align: left;\n    width: 100%;\n  }\n\n  .content {\n    padding-top: 0.85rem;\n  }\n}\n"] }]
    }], () => [{ type: i1.SessionService }, { type: i2.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent" }); })();
//# sourceMappingURL=app.component.js.map