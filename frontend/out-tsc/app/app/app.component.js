import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./core/services/session.service";
import * as i2 from "./features/auth/services/auth.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
function AppComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "span", 16);
    i0.ɵɵtext(2, "Signed in as");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.currentUserName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.currentUserRole);
} }
function AppComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function AppComponent_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.logout()); });
    i0.ɵɵtext(1, "Logout");
    i0.ɵɵelementEnd();
} }
export class AppComponent {
    constructor(sessionService, authService) {
        this.sessionService = sessionService;
        this.authService = authService;
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
    logout() {
        this.authService.logout();
    }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(i0.ɵɵdirectiveInject(i1.SessionService), i0.ɵɵdirectiveInject(i2.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 2, consts: [[1, "layout"], ["aria-hidden", "true", 1, "layout-orb", "orb-a"], ["aria-hidden", "true", 1, "layout-orb", "orb-b"], ["aria-hidden", "true", 1, "layout-grid"], [1, "topbar"], [1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "brand-ring"], [1, "brand-core"], [1, "eyebrow"], [1, "brand-copy"], [1, "header-actions"], ["class", "session-copy", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "content"], [1, "session-copy"], [1, "session-label"], [1, "session-role"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelementStart(4, "header", 4)(5, "div", 5)(6, "div", 6);
            i0.ɵɵelement(7, "span", 7)(8, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div")(10, "p", 9);
            i0.ɵɵtext(11, "SmartLocal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "h1");
            i0.ɵɵtext(13, "Service and Emergency Console");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p", 10);
            i0.ɵɵtext(15, "Fast local discovery, verified providers, and emergency-ready access.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "div", 11);
            i0.ɵɵtemplate(17, AppComponent_div_17_Template, 7, 2, "div", 12)(18, AppComponent_button_18_Template, 2, 0, "button", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "section", 14);
            i0.ɵɵelement(20, "router-outlet");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("ngIf", ctx.showSessionCopy);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isAuthenticated);
        } }, dependencies: [i3.NgIf, i4.RouterOutlet], styles: [".layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n  padding: 1.2rem 1rem 2rem;\n}\n\n.layout-orb[_ngcontent-%COMP%], \n.layout-grid[_ngcontent-%COMP%] {\n  position: fixed;\n  pointer-events: none;\n}\n\n.layout-orb[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  filter: blur(18px);\n  opacity: 0.75;\n  animation: _ngcontent-%COMP%_drift 14s ease-in-out infinite;\n}\n\n.orb-a[_ngcontent-%COMP%] {\n  top: 92px;\n  left: -48px;\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(14, 165, 233, 0.26), rgba(14, 165, 233, 0));\n}\n\n.orb-b[_ngcontent-%COMP%] {\n  right: -62px;\n  bottom: 120px;\n  width: 300px;\n  height: 300px;\n  background: radial-gradient(circle, rgba(255, 93, 143, 0.18), rgba(255, 93, 143, 0));\n  animation-delay: -6s;\n}\n\n.layout-grid[_ngcontent-%COMP%] {\n  inset: 0;\n  opacity: 0.28;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),\n    linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px);\n  background-size: 42px 42px;\n}\n\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.35rem;\n  margin: 0 auto;\n  max-width: 1280px;\n  position: relative;\n  z-index: 1;\n  background: rgba(255, 255, 255, 0.56);\n  border: 1px solid rgba(255, 255, 255, 0.72);\n  border-radius: 24px;\n  backdrop-filter: blur(18px);\n  box-shadow: var(--shadow-soft);\n  color: var(--ink-strong);\n  animation: _ngcontent-%COMP%_rise-in 700ms ease both;\n\n  .eyebrow {\n    margin: 0;\n    font-size: 0.72rem;\n    letter-spacing: 0.14em;\n    text-transform: uppercase;\n    color: var(--brand-rose);\n    font-weight: 700;\n  }\n\n  h1 {\n    margin: 0.2rem 0 0;\n    font-size: clamp(1.12rem, 2vw, 1.4rem);\n    font-weight: 800;\n    color: var(--ink-strong);\n  }\n\n  button {\n    color: #ffffff;\n    background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n    border: 1px solid transparent;\n    border-radius: 999px;\n    padding: 0.6rem 1rem;\n    cursor: pointer;\n    font-weight: 700;\n    box-shadow: 0 14px 28px rgba(15, 76, 129, 0.2);\n  }\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n\n.brand-mark[_ngcontent-%COMP%] {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  flex: 0 0 auto;\n  border-radius: 18px;\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  box-shadow: 0 18px 32px rgba(15, 76, 129, 0.26);\n}\n\n.brand-ring[_ngcontent-%COMP%], \n.brand-core[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n  border-radius: 999px;\n}\n\n.brand-ring[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 22px;\n  border: 3px solid rgba(255, 255, 255, 0.95);\n  top: 7px;\n}\n\n.brand-core[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 18px;\n  background: var(--brand-warm);\n  bottom: 11px;\n  border-radius: 6px;\n}\n\n.brand-copy[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  max-width: 540px;\n  color: var(--ink-soft);\n  font-size: 0.94rem;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n}\n\n.session-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.1rem;\n  padding: 0.7rem 0.95rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n}\n\n.session-label[_ngcontent-%COMP%], \n.session-role[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 0.8rem;\n}\n\n.session-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 800;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 1.2rem 0 0;\n  max-width: 1280px;\n  margin: 0 auto;\n  animation: _ngcontent-%COMP%_rise-in 820ms ease both;\n  animation-delay: 80ms;\n}\n\n@media (max-width: 720px) {\n  .layout[_ngcontent-%COMP%] {\n    padding-inline: 0.75rem;\n  }\n\n  .topbar[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .brand[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .topbar[_ngcontent-%COMP%] {\n    border-radius: 20px;\n  }\n\n  .session-copy[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    width: 100%;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding-top: 0.25rem;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_drift {\n  0%,\n  100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n\n  50% {\n    transform: translate3d(24px, -20px, 0) scale(1.06);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_rise-in {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<div class=\"layout\">\n  <div class=\"layout-orb orb-a\" aria-hidden=\"true\"></div>\n  <div class=\"layout-orb orb-b\" aria-hidden=\"true\"></div>\n  <div class=\"layout-grid\" aria-hidden=\"true\"></div>\n\n  <header class=\"topbar\">\n    <div class=\"brand\">\n      <div class=\"brand-mark\" aria-hidden=\"true\">\n        <span class=\"brand-ring\"></span>\n        <span class=\"brand-core\"></span>\n      </div>\n      <div>\n        <p class=\"eyebrow\">SmartLocal</p>\n        <h1>Service and Emergency Console</h1>\n        <p class=\"brand-copy\">Fast local discovery, verified providers, and emergency-ready access.</p>\n      </div>\n    </div>\n    <div class=\"header-actions\">\n      <div class=\"session-copy\" *ngIf=\"showSessionCopy\">\n        <span class=\"session-label\">Signed in as</span>\n        <strong>{{ currentUserName }}</strong>\n        <span class=\"session-role\">{{ currentUserRole }}</span>\n      </div>\n      <button *ngIf=\"isAuthenticated\" (click)=\"logout()\">Logout</button>\n    </div>\n  </header>\n\n  <section class=\"content\">\n    <router-outlet></router-outlet>\n  </section>\n</div>\n", styles: [".layout {\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n  padding: 1.2rem 1rem 2rem;\n}\n\n.layout-orb,\n.layout-grid {\n  position: fixed;\n  pointer-events: none;\n}\n\n.layout-orb {\n  border-radius: 999px;\n  filter: blur(18px);\n  opacity: 0.75;\n  animation: drift 14s ease-in-out infinite;\n}\n\n.orb-a {\n  top: 92px;\n  left: -48px;\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(14, 165, 233, 0.26), rgba(14, 165, 233, 0));\n}\n\n.orb-b {\n  right: -62px;\n  bottom: 120px;\n  width: 300px;\n  height: 300px;\n  background: radial-gradient(circle, rgba(255, 93, 143, 0.18), rgba(255, 93, 143, 0));\n  animation-delay: -6s;\n}\n\n.layout-grid {\n  inset: 0;\n  opacity: 0.28;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),\n    linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px);\n  background-size: 42px 42px;\n}\n\n.topbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.35rem;\n  margin: 0 auto;\n  max-width: 1280px;\n  position: relative;\n  z-index: 1;\n  background: rgba(255, 255, 255, 0.56);\n  border: 1px solid rgba(255, 255, 255, 0.72);\n  border-radius: 24px;\n  backdrop-filter: blur(18px);\n  box-shadow: var(--shadow-soft);\n  color: var(--ink-strong);\n  animation: rise-in 700ms ease both;\n\n  .eyebrow {\n    margin: 0;\n    font-size: 0.72rem;\n    letter-spacing: 0.14em;\n    text-transform: uppercase;\n    color: var(--brand-rose);\n    font-weight: 700;\n  }\n\n  h1 {\n    margin: 0.2rem 0 0;\n    font-size: clamp(1.12rem, 2vw, 1.4rem);\n    font-weight: 800;\n    color: var(--ink-strong);\n  }\n\n  button {\n    color: #ffffff;\n    background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n    border: 1px solid transparent;\n    border-radius: 999px;\n    padding: 0.6rem 1rem;\n    cursor: pointer;\n    font-weight: 700;\n    box-shadow: 0 14px 28px rgba(15, 76, 129, 0.2);\n  }\n}\n\n.brand {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n\n.brand-mark {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  flex: 0 0 auto;\n  border-radius: 18px;\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  box-shadow: 0 18px 32px rgba(15, 76, 129, 0.26);\n}\n\n.brand-ring,\n.brand-core {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n  border-radius: 999px;\n}\n\n.brand-ring {\n  width: 28px;\n  height: 22px;\n  border: 3px solid rgba(255, 255, 255, 0.95);\n  top: 7px;\n}\n\n.brand-core {\n  width: 16px;\n  height: 18px;\n  background: var(--brand-warm);\n  bottom: 11px;\n  border-radius: 6px;\n}\n\n.brand-copy {\n  margin: 0.3rem 0 0;\n  max-width: 540px;\n  color: var(--ink-soft);\n  font-size: 0.94rem;\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n}\n\n.session-copy {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.1rem;\n  padding: 0.7rem 0.95rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n}\n\n.session-label,\n.session-role {\n  color: var(--ink-soft);\n  font-size: 0.8rem;\n}\n\n.session-copy strong {\n  font-size: 0.98rem;\n  font-weight: 800;\n}\n\n.content {\n  position: relative;\n  z-index: 1;\n  padding: 1.2rem 0 0;\n  max-width: 1280px;\n  margin: 0 auto;\n  animation: rise-in 820ms ease both;\n  animation-delay: 80ms;\n}\n\n@media (max-width: 720px) {\n  .layout {\n    padding-inline: 0.75rem;\n  }\n\n  .topbar,\n  .header-actions,\n  .brand {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .topbar {\n    border-radius: 20px;\n  }\n\n  .session-copy {\n    align-items: flex-start;\n    width: 100%;\n  }\n\n  .content {\n    padding-top: 0.25rem;\n  }\n}\n\n@keyframes drift {\n  0%,\n  100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n\n  50% {\n    transform: translate3d(24px, -20px, 0) scale(1.06);\n  }\n}\n\n@keyframes rise-in {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n"] }]
    }], () => [{ type: i1.SessionService }, { type: i2.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent" }); })();
//# sourceMappingURL=app.component.js.map