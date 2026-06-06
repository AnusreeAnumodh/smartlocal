import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../dashboard/services/local-services.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../../shared/components/page-shell/page-shell.component";
import * as i4 from "../../../../shared/components/star-rating/star-rating.component";
import * as i5 from "../../../../shared/pipes/capitalize.pipe";
function AdminHomeComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Source: ", ctx_r0.source, "");
} }
function AdminHomeComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.statusMessage);
} }
function AdminHomeComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage);
} }
function AdminHomeComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1, "Loading admin overview...");
    i0.ɵɵelementEnd();
} }
function AdminHomeComponent_ng_container_16_article_31_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 24)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "capitalize");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "app-star-rating", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 26)(9, "span", 27);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 6);
    i0.ɵɵlistener("click", function AdminHomeComponent_ng_container_16_article_31_Template_button_click_11_listener() { const provider_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setProviderVerification(provider_r3, !provider_r3.verified)); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const provider_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(provider_r3.businessName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(6, 10, provider_r3.category), " \u00B7 ", provider_r3.city, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("rating", provider_r3.rating)("showValue", true)("reviewCount", provider_r3.reviewCount);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("unverified", !provider_r3.verified);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(provider_r3.verified ? "Verified" : "Pending");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", provider_r3.verified ? "Mark pending" : "Verify", " ");
} }
function AdminHomeComponent_ng_container_16_article_40_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 28)(1, "div", 29)(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 30);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "uppercase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p", 3);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p", 3);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "capitalize");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 31)(17, "button", 6);
    i0.ɵɵlistener("click", function AdminHomeComponent_ng_container_16_article_40_Template_button_click_17_listener() { const alert_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setAlertStatus(alert_r5, "dispatching")); });
    i0.ɵɵtext(18, "Dispatching");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 6);
    i0.ɵɵlistener("click", function AdminHomeComponent_ng_container_16_article_40_Template_button_click_19_listener() { const alert_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setAlertStatus(alert_r5, "resolved")); });
    i0.ɵɵtext(20, "Resolve");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const alert_r5 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(alert_r5.userName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", alert_r5.city || "Location pending", " \u00B7 ", i0.ɵɵpipeBind1(7, 10, alert_r5.emergencyType), "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("high", alert_r5.priority === "high")("medium", alert_r5.priority === "medium");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 12, alert_r5.priority), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(alert_r5.description || "No extra incident description shared.");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Dispatch to: ", i0.ɵɵpipeBind1(15, 14, alert_r5.assignedProviderCategory), "");
} }
function AdminHomeComponent_ng_container_16_article_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 32)(1, "div", 33)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "app-star-rating", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const review_r6 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(review_r6.userName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("rating", review_r6.rating)("showValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(review_r6.comment || "No written review added.");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 5, review_r6.createdAt, "medium"));
} }
function AdminHomeComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 12)(2, "article", 13)(3, "span");
    i0.ɵɵtext(4, "Total providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "article", 13)(8, "span");
    i0.ɵɵtext(9, "Verified providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "article", 13)(13, "span");
    i0.ɵɵtext(14, "Pending providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "article", 13)(18, "span");
    i0.ɵɵtext(19, "Open SOS alerts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "section", 14)(23, "article", 15)(24, "div", 16)(25, "div")(26, "p", 2);
    i0.ɵɵtext(27, "Provider verification");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "h3");
    i0.ɵɵtext(29, "Approve or hold listings");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 17);
    i0.ɵɵtemplate(31, AdminHomeComponent_ng_container_16_article_31_Template, 13, 12, "article", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "article", 15)(33, "div", 16)(34, "div")(35, "p", 2);
    i0.ɵɵtext(36, "Emergency queue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "h3");
    i0.ɵɵtext(38, "Live SOS alerts");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div", 19);
    i0.ɵɵtemplate(40, AdminHomeComponent_ng_container_16_article_40_Template, 21, 16, "article", 20);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(41, "section", 21)(42, "div", 16)(43, "div")(44, "p", 2);
    i0.ɵɵtext(45, "Recent reviews");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "h3");
    i0.ɵɵtext(47, "Latest user feedback");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(48, "div", 22);
    i0.ɵɵtemplate(49, AdminHomeComponent_ng_container_16_article_49_Template, 10, 8, "article", 23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r7 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(data_r7.metrics.providerCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r7.metrics.verifiedProviderCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r7.metrics.pendingProviderCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r7.metrics.openSosCount);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", data_r7.providers)("ngForTrackBy", ctx_r0.trackProvider);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", data_r7.alerts)("ngForTrackBy", ctx_r0.trackAlert);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", data_r7.reviews)("ngForTrackBy", ctx_r0.trackReview);
} }
export class AdminHomeComponent {
    constructor(localServices) {
        this.localServices = localServices;
        this.overview = null;
        this.source = '';
        this.loading = false;
        this.statusMessage = '';
        this.errorMessage = '';
    }
    ngOnInit() {
        this.loadOverview();
    }
    loadOverview() {
        this.loading = true;
        this.errorMessage = '';
        this.localServices.getAdminOverview().subscribe({
            next: (response) => {
                this.overview = response.data;
                this.source = response.source;
                this.loading = false;
            },
            error: (error) => {
                this.errorMessage = error.message || 'Unable to load admin data';
                this.loading = false;
            }
        });
    }
    setProviderVerification(provider, verified) {
        this.statusMessage = '';
        this.localServices.updateProviderVerification(provider.id, verified).subscribe({
            next: (response) => {
                if (this.overview) {
                    this.overview.providers = this.overview.providers.map((entry) => entry.id === provider.id ? response.data : entry);
                }
                this.statusMessage = response.message;
                this.loadOverview();
            },
            error: (error) => {
                this.errorMessage = error.message || 'Unable to update provider status';
            }
        });
    }
    setAlertStatus(alert, status) {
        this.statusMessage = '';
        this.localServices.updateSosStatus(alert.id, status).subscribe({
            next: (response) => {
                if (this.overview) {
                    this.overview.alerts = this.overview.alerts.map((entry) => entry.id === alert.id ? response.data : entry);
                }
                this.statusMessage = response.message;
                this.loadOverview();
            },
            error: (error) => {
                this.errorMessage = error.message || 'Unable to update SOS status';
            }
        });
    }
    trackProvider(_, provider) {
        return provider.id;
    }
    trackAlert(_, alert) {
        return alert.id;
    }
    trackReview(_, review) {
        return review.id;
    }
    static { this.ɵfac = function AdminHomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminHomeComponent)(i0.ɵɵdirectiveInject(i1.LocalServicesService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminHomeComponent, selectors: [["app-admin-home"]], decls: 17, vars: 5, consts: [["title", "Admin Console", "subtitle", "Provider trust, review monitoring, and emergency dispatch visibility in one place."], [1, "admin-hero"], [1, "eyebrow"], [1, "muted"], [1, "hero-note"], [4, "ngIf"], ["type", "button", 3, "click"], ["class", "status-copy", 4, "ngIf"], ["class", "error-copy", 4, "ngIf"], ["class", "muted", 4, "ngIf"], [1, "status-copy"], [1, "error-copy"], [1, "metrics-grid"], [1, "metric-card"], [1, "admin-grid"], [1, "panel"], [1, "panel-header"], [1, "provider-table"], ["class", "provider-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "alert-stack"], ["class", "alert-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "panel", "reviews-panel"], [1, "review-list"], ["class", "review-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "provider-row"], [3, "rating", "showValue", "reviewCount"], [1, "row-actions"], [1, "verify-pill"], [1, "alert-card"], [1, "alert-head"], [1, "priority-pill"], [1, "action-row"], [1, "review-card"], [1, "review-head"], [3, "rating", "showValue"]], template: function AdminHomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-page-shell", 0)(1, "section", 1)(2, "div")(3, "p", 2);
            i0.ɵɵtext(4, "Operations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h3");
            i0.ɵɵtext(6, "Moderate provider quality and emergency flow");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 3);
            i0.ɵɵtext(8, "Use this console to verify providers, monitor new reviews, and move SOS alerts through dispatch.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 4);
            i0.ɵɵtemplate(10, AdminHomeComponent_span_10_Template, 2, 1, "span", 5);
            i0.ɵɵelementStart(11, "button", 6);
            i0.ɵɵlistener("click", function AdminHomeComponent_Template_button_click_11_listener() { return ctx.loadOverview(); });
            i0.ɵɵtext(12, "Refresh");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(13, AdminHomeComponent_p_13_Template, 2, 1, "p", 7)(14, AdminHomeComponent_p_14_Template, 2, 1, "p", 8)(15, AdminHomeComponent_p_15_Template, 2, 0, "p", 9)(16, AdminHomeComponent_ng_container_16_Template, 50, 10, "ng-container", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngIf", ctx.source);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.statusMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.errorMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.overview);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PageShellComponent, i4.StarRatingComponent, i2.UpperCasePipe, i2.DatePipe, i5.CapitalizePipe], styles: [".admin-hero[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%], \n.hero-note[_ngcontent-%COMP%], \n.row-actions[_ngcontent-%COMP%], \n.alert-head[_ngcontent-%COMP%], \n.action-row[_ngcontent-%COMP%], \n.review-head[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.admin-hero[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%], \n.alert-head[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.admin-hero[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  border: 1px solid rgba(154, 177, 214, 0.14);\n  background: rgba(15, 24, 45, 0.92);\n  box-shadow: 0 16px 30px rgba(8, 16, 34, 0.28);\n  animation: fade-up 420ms ease both;\n}\n\n.admin-hero[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.metric-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n\n.hero-note[_ngcontent-%COMP%], \n.row-actions[_ngcontent-%COMP%], \n.action-row[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.hero-note[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 999px;\n  font: inherit;\n  font-weight: 700;\n  cursor: pointer;\n  color: #ffffff;\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  color: var(--brand-rose);\n  font-size: 0.76rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.muted[_ngcontent-%COMP%], \n.provider-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.alert-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.review-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nsmall[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n}\n\nh3[_ngcontent-%COMP%], \nstrong[_ngcontent-%COMP%], \n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink-strong);\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.25rem, 2vw, 1.55rem);\n}\n\n.status-copy[_ngcontent-%COMP%], \n.error-copy[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n  font-weight: 700;\n}\n\n.status-copy[_ngcontent-%COMP%] {\n  color: #8ef0bd;\n}\n\n.error-copy[_ngcontent-%COMP%] {\n  color: #ffb4b4;\n}\n\n.metrics-grid[_ngcontent-%COMP%], \n.admin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.metrics-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  margin: 1.25rem 0;\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background: linear-gradient(160deg, rgba(15, 52, 82, 0.92), rgba(18, 24, 47, 0.96));\n  animation: fade-up 420ms ease both;\n}\n\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(230, 239, 255, 0.72);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.45rem;\n  font-size: 1.75rem;\n}\n\n.admin-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin-bottom: 1rem;\n}\n\n.provider-table[_ngcontent-%COMP%], \n.alert-stack[_ngcontent-%COMP%], \n.review-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n}\n\n.provider-row[_ngcontent-%COMP%], \n.alert-card[_ngcontent-%COMP%], \n.review-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.05rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(154, 177, 214, 0.12);\n  animation: fade-up 420ms ease both;\n}\n\n.provider-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.provider-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.alert-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.review-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n}\n\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.provider-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.alert-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.review-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nsmall[_ngcontent-%COMP%] {\n  line-height: 1.45;\n}\n\n.verify-pill[_ngcontent-%COMP%], \n.priority-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem 0.8rem;\n  border-radius: 999px;\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.verify-pill[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #15803d, #22c55e);\n}\n\n.verify-pill.unverified[_ngcontent-%COMP%], \n.priority-pill.medium[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d97706, #f59e0b);\n}\n\n.priority-pill.high[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #b91c1c, #ef4444);\n}\n\n.reviews-panel[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n@media (max-width: 960px) {\n  .metrics-grid[_ngcontent-%COMP%], \n   .admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminHomeComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-home', template: "<app-page-shell title=\"Admin Console\" subtitle=\"Provider trust, review monitoring, and emergency dispatch visibility in one place.\">\n  <section class=\"admin-hero\">\n    <div>\n      <p class=\"eyebrow\">Operations</p>\n      <h3>Moderate provider quality and emergency flow</h3>\n      <p class=\"muted\">Use this console to verify providers, monitor new reviews, and move SOS alerts through dispatch.</p>\n    </div>\n    <div class=\"hero-note\">\n      <span *ngIf=\"source\">Source: {{ source }}</span>\n      <button type=\"button\" (click)=\"loadOverview()\">Refresh</button>\n    </div>\n  </section>\n\n  <p class=\"status-copy\" *ngIf=\"statusMessage\">{{ statusMessage }}</p>\n  <p class=\"error-copy\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n  <p class=\"muted\" *ngIf=\"loading\">Loading admin overview...</p>\n\n  <ng-container *ngIf=\"overview as data\">\n    <section class=\"metrics-grid\">\n      <article class=\"metric-card\">\n        <span>Total providers</span>\n        <strong>{{ data.metrics.providerCount }}</strong>\n      </article>\n      <article class=\"metric-card\">\n        <span>Verified providers</span>\n        <strong>{{ data.metrics.verifiedProviderCount }}</strong>\n      </article>\n      <article class=\"metric-card\">\n        <span>Pending providers</span>\n        <strong>{{ data.metrics.pendingProviderCount }}</strong>\n      </article>\n      <article class=\"metric-card\">\n        <span>Open SOS alerts</span>\n        <strong>{{ data.metrics.openSosCount }}</strong>\n      </article>\n    </section>\n\n    <section class=\"admin-grid\">\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <div>\n            <p class=\"eyebrow\">Provider verification</p>\n            <h3>Approve or hold listings</h3>\n          </div>\n        </div>\n\n        <div class=\"provider-table\">\n          <article class=\"provider-row\" *ngFor=\"let provider of data.providers; trackBy: trackProvider\">\n            <div>\n              <strong>{{ provider.businessName }}</strong>\n              <p>{{ provider.category | capitalize }} \u00B7 {{ provider.city }}</p>\n              <app-star-rating [rating]=\"provider.rating\" [showValue]=\"true\" [reviewCount]=\"provider.reviewCount\"></app-star-rating>\n            </div>\n            <div class=\"row-actions\">\n              <span class=\"verify-pill\" [class.unverified]=\"!provider.verified\">{{ provider.verified ? 'Verified' : 'Pending' }}</span>\n              <button type=\"button\" (click)=\"setProviderVerification(provider, !provider.verified)\">\n                {{ provider.verified ? 'Mark pending' : 'Verify' }}\n              </button>\n            </div>\n          </article>\n        </div>\n      </article>\n\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <div>\n            <p class=\"eyebrow\">Emergency queue</p>\n            <h3>Live SOS alerts</h3>\n          </div>\n        </div>\n\n        <div class=\"alert-stack\">\n          <article class=\"alert-card\" *ngFor=\"let alert of data.alerts; trackBy: trackAlert\">\n            <div class=\"alert-head\">\n              <div>\n                <strong>{{ alert.userName }}</strong>\n                <p>{{ alert.city || 'Location pending' }} \u00B7 {{ alert.emergencyType | capitalize }}</p>\n              </div>\n              <span class=\"priority-pill\" [class.high]=\"alert.priority === 'high'\" [class.medium]=\"alert.priority === 'medium'\">\n                {{ alert.priority | uppercase }}\n              </span>\n            </div>\n            <p class=\"muted\">{{ alert.description || 'No extra incident description shared.' }}</p>\n            <p class=\"muted\">Dispatch to: {{ alert.assignedProviderCategory | capitalize }}</p>\n            <div class=\"action-row\">\n              <button type=\"button\" (click)=\"setAlertStatus(alert, 'dispatching')\">Dispatching</button>\n              <button type=\"button\" (click)=\"setAlertStatus(alert, 'resolved')\">Resolve</button>\n            </div>\n          </article>\n        </div>\n      </article>\n    </section>\n\n    <section class=\"panel reviews-panel\">\n      <div class=\"panel-header\">\n        <div>\n          <p class=\"eyebrow\">Recent reviews</p>\n          <h3>Latest user feedback</h3>\n        </div>\n      </div>\n\n      <div class=\"review-list\">\n        <article class=\"review-card\" *ngFor=\"let review of data.reviews; trackBy: trackReview\">\n          <div class=\"review-head\">\n            <strong>{{ review.userName }}</strong>\n            <app-star-rating [rating]=\"review.rating\" [showValue]=\"true\"></app-star-rating>\n          </div>\n          <p>{{ review.comment || 'No written review added.' }}</p>\n          <small>{{ review.createdAt | date: 'medium' }}</small>\n        </article>\n      </div>\n    </section>\n  </ng-container>\n</app-page-shell>\n", styles: [".admin-hero,\n.panel-header,\n.hero-note,\n.row-actions,\n.alert-head,\n.action-row,\n.review-head {\n  display: flex;\n}\n\n.admin-hero,\n.panel-header,\n.alert-head {\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.admin-hero,\n.panel {\n  border-radius: 24px;\n  border: 1px solid rgba(154, 177, 214, 0.14);\n  background: rgba(15, 24, 45, 0.92);\n  box-shadow: 0 16px 30px rgba(8, 16, 34, 0.28);\n  animation: fade-up 420ms ease both;\n}\n\n.admin-hero,\n.panel,\n.metric-card {\n  padding: 1.25rem;\n}\n\n.hero-note,\n.row-actions,\n.action-row {\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.hero-note button,\n.row-actions button,\n.action-row button {\n  border: 0;\n  border-radius: 999px;\n  font: inherit;\n  font-weight: 700;\n  cursor: pointer;\n  color: #ffffff;\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n}\n\n.eyebrow {\n  margin: 0 0 0.35rem;\n  color: var(--brand-rose);\n  font-size: 0.76rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.muted,\n.provider-row p,\n.alert-card p,\n.review-card p,\nsmall {\n  color: var(--ink-soft);\n}\n\nh3,\nstrong,\n.metric-card strong {\n  color: var(--ink-strong);\n}\n\nh3 {\n  margin: 0;\n  font-size: clamp(1.25rem, 2vw, 1.55rem);\n}\n\n.status-copy,\n.error-copy {\n  margin: 0.75rem 0;\n  font-weight: 700;\n}\n\n.status-copy {\n  color: #8ef0bd;\n}\n\n.error-copy {\n  color: #ffb4b4;\n}\n\n.metrics-grid,\n.admin-grid {\n  display: grid;\n  gap: 1rem;\n}\n\n.metrics-grid {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  margin: 1.25rem 0;\n}\n\n.metric-card {\n  border-radius: 20px;\n  background: linear-gradient(160deg, rgba(15, 52, 82, 0.92), rgba(18, 24, 47, 0.96));\n  animation: fade-up 420ms ease both;\n}\n\n.metric-card span {\n  color: rgba(230, 239, 255, 0.72);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.metric-card strong {\n  display: block;\n  margin-top: 0.45rem;\n  font-size: 1.75rem;\n}\n\n.admin-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin-bottom: 1rem;\n}\n\n.provider-table,\n.alert-stack,\n.review-list {\n  display: grid;\n  gap: 0.85rem;\n}\n\n.provider-row,\n.alert-card,\n.review-card {\n  padding: 1rem 1.05rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(154, 177, 214, 0.12);\n  animation: fade-up 420ms ease both;\n}\n\n.provider-row {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.provider-row p,\n.alert-card p,\n.review-card p {\n  margin: 0.25rem 0 0;\n}\n\n.metric-card span,\n.provider-row p,\n.alert-card p,\n.review-card p,\nsmall {\n  line-height: 1.45;\n}\n\n.verify-pill,\n.priority-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem 0.8rem;\n  border-radius: 999px;\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.verify-pill {\n  background: linear-gradient(135deg, #15803d, #22c55e);\n}\n\n.verify-pill.unverified,\n.priority-pill.medium {\n  background: linear-gradient(135deg, #d97706, #f59e0b);\n}\n\n.priority-pill.high {\n  background: linear-gradient(135deg, #b91c1c, #ef4444);\n}\n\n.reviews-panel {\n  margin-top: 1rem;\n}\n\n@media (max-width: 960px) {\n  .metrics-grid,\n  .admin-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [{ type: i1.LocalServicesService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminHomeComponent, { className: "AdminHomeComponent" }); })();
//# sourceMappingURL=admin-home.component.js.map