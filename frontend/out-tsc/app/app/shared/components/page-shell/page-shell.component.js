import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/session.service";
import * as i2 from "../../../features/auth/services/auth.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
const _c0 = ["*"];
function PageShellComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.subtitle);
} }
export class PageShellComponent {
    constructor(sessionService, authService) {
        this.sessionService = sessionService;
        this.authService = authService;
        this.title = '';
        this.subtitle = '';
    }
    get currentRole() {
        return this.sessionService.session?.user.role ?? 'guest';
    }
    logout() {
        this.authService.logout();
    }
    static { this.ɵfac = function PageShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PageShellComponent)(i0.ɵɵdirectiveInject(i1.SessionService), i0.ɵɵdirectiveInject(i2.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PageShellComponent, selectors: [["app-page-shell"]], inputs: { title: "title", subtitle: "subtitle" }, ngContentSelectors: _c0, decls: 13, vars: 2, consts: [[1, "page-shell"], [1, "page-shell-header"], [1, "page-shell-copy"], [1, "shell-kicker"], [4, "ngIf"], [1, "page-shell-actions"], [1, "page-shell-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active"]], template: function PageShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "p", 3);
            i0.ɵɵtext(4, "Workspace");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h2");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, PageShellComponent_p_7_Template, 2, 1, "p", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5)(9, "nav", 6)(10, "a", 7);
            i0.ɵɵtext(11, "Dashboard");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵprojection(12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subtitle);
        } }, dependencies: [i3.NgIf, i4.RouterLink, i4.RouterLinkActive], styles: [".page-shell[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(180deg, rgba(15, 24, 45, 0.9), rgba(14, 22, 40, 0.92));\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  border-radius: 30px;\n  width: 100%;\n  overflow: hidden;\n  padding: 1.6rem;\n  box-shadow: var(--shadow-soft);\n  backdrop-filter: blur(20px);\n  animation: fade-up 320ms ease both;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.5rem, 3vw, 2rem);\n  letter-spacing: -0.02em;\n  font-weight: 800;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ink-soft);\n}\n\n.page-shell-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid rgba(154, 177, 214, 0.12);\n}\n\n.page-shell-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n  max-width: 720px;\n}\n\n.page-shell-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\n.page-shell-actions[_ngcontent-%COMP%], \n.page-shell-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.page-shell-actions[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.page-shell-nav[_ngcontent-%COMP%] {\n  gap: 0.55rem;\n  flex-wrap: wrap;\n}\n\n.page-shell-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--ink-strong);\n  text-decoration: none;\n  font: inherit;\n  font-weight: 700;\n  line-height: 1.1;\n  min-height: 44px;\n  padding: 0.75rem 1rem;\n}\n\n.page-shell-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  border-color: transparent;\n  color: #ffffff;\n}\n\n.shell-kicker[_ngcontent-%COMP%] {\n  margin-bottom: 0.35rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--brand-rose);\n  line-height: 1.2;\n}\n\n@media (max-width: 720px) {\n  .page-shell[_ngcontent-%COMP%] {\n    padding: 1.1rem;\n    border-radius: 24px;\n  }\n\n  .page-shell-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding-bottom: 0.85rem;\n  }\n\n  .page-shell-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageShellComponent, [{
        type: Component,
        args: [{ selector: 'app-page-shell', template: "<section class=\"page-shell\">\n  <header class=\"page-shell-header\">\n    <div class=\"page-shell-copy\">\n      <p class=\"shell-kicker\">Workspace</p>\n      <h2>{{ title }}</h2>\n      <p *ngIf=\"subtitle\">{{ subtitle }}</p>\n    </div>\n    <div class=\"page-shell-actions\">\n      <nav class=\"page-shell-nav\">\n        <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      </nav>\n    </div>\n  </header>\n  <ng-content></ng-content>\n</section>\n", styles: [".page-shell {\n  background:\n    linear-gradient(180deg, rgba(15, 24, 45, 0.9), rgba(14, 22, 40, 0.92));\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  border-radius: 30px;\n  width: 100%;\n  overflow: hidden;\n  padding: 1.6rem;\n  box-shadow: var(--shadow-soft);\n  backdrop-filter: blur(20px);\n  animation: fade-up 320ms ease both;\n}\n\nh2 {\n  margin: 0;\n  font-size: clamp(1.5rem, 3vw, 2rem);\n  letter-spacing: -0.02em;\n  font-weight: 800;\n}\n\np {\n  margin: 0;\n  color: var(--ink-soft);\n}\n\n.page-shell-header {\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid rgba(154, 177, 214, 0.12);\n}\n\n.page-shell-copy {\n  display: grid;\n  gap: 0.35rem;\n  max-width: 720px;\n}\n\n.page-shell-copy p {\n  line-height: 1.5;\n}\n\n.page-shell-actions,\n.page-shell-nav {\n  display: flex;\n  align-items: center;\n}\n\n.page-shell-actions {\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.page-shell-nav {\n  gap: 0.55rem;\n  flex-wrap: wrap;\n}\n\n.page-shell-nav a {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--ink-strong);\n  text-decoration: none;\n  font: inherit;\n  font-weight: 700;\n  line-height: 1.1;\n  min-height: 44px;\n  padding: 0.75rem 1rem;\n}\n\n.page-shell-nav a.active {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  border-color: transparent;\n  color: #ffffff;\n}\n\n.shell-kicker {\n  margin-bottom: 0.35rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--brand-rose);\n  line-height: 1.2;\n}\n\n@media (max-width: 720px) {\n  .page-shell {\n    padding: 1.1rem;\n    border-radius: 24px;\n  }\n\n  .page-shell-header {\n    flex-direction: column;\n    align-items: flex-start;\n    padding-bottom: 0.85rem;\n  }\n\n  .page-shell-actions {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n"] }]
    }], () => [{ type: i1.SessionService }, { type: i2.AuthService }], { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PageShellComponent, { className: "PageShellComponent" }); })();
//# sourceMappingURL=page-shell.component.js.map