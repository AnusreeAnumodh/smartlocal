import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/local-services.service";
import * as i2 from "../../../../core/services/session.service";
import * as i3 from "../../../auth/services/auth.service";
import * as i4 from "@angular/common";
import * as i5 from "../../../../shared/components/page-shell/page-shell.component";
import * as i6 from "@angular/forms";
import * as i7 from "../../../../shared/pipes/capitalize.pipe";
function DashboardHomeComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Showing fallback data while the backend is unavailable.");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_section_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14)(1, "article", 15)(2, "span", 16);
    i0.ɵɵtext(3, "Providers in view");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "article", 17)(10, "span", 16);
    i0.ɵɵtext(11, "AI recommendation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "article", 18)(17, "span", 16);
    i0.ɵɵtext(18, "Live mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.providers.length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.city, " ", i0.ɵɵpipeBind1(8, 7, ctx_r0.category), " options loaded for comparison.");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.recommendation ? ctx_r0.recommendation.provider.name : "Updating...");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.recommendation ? ctx_r0.recommendation.reason : "Best-fit provider is being recalculated.");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.isUsingDemoData ? "Demo fallback" : "Backend connected");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.providersSource || "Provider source will appear after search.");
} }
function DashboardHomeComponent_ng_container_18_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 20)(1, "article", 15)(2, "span", 16);
    i0.ɵɵtext(3, "Business name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Your storefront appears in local discovery for verified users.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "article", 17)(9, "span", 16);
    i0.ɵɵtext(10, "Rating");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14, "Visible trust score shown to local users browsing your category.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "article", 18)(16, "span", 16);
    i0.ɵɵtext(17, "Response time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21, "Fast response positioning helps you surface higher in intent-heavy searches.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const provider_r2 = ctx.ngIf;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(provider_r2.businessName);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", provider_r2.rating, " \u2605");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", provider_r2.responseTimeMinutes, " mins");
} }
function DashboardHomeComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DashboardHomeComponent_ng_container_18_section_1_Template, 22, 3, "section", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.providerProfile);
} }
function DashboardHomeComponent_ng_container_19_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Source: ", ctx_r0.providersSource, "");
} }
function DashboardHomeComponent_ng_container_19_option_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cityOption_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", cityOption_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cityOption_r4);
} }
function DashboardHomeComponent_ng_container_19_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_19_section_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 42)(1, "div", 22)(2, "div")(3, "p", 5);
    i0.ɵɵtext(4, "Recommended");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 43);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 6);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 44)(12, "p")(13, "strong");
    i0.ɵɵtext(14, "City:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p")(17, "strong");
    i0.ɵɵtext(18, "Response time:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p")(21, "strong");
    i0.ɵɵtext(22, "Status:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "capitalize");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "p")(26, "strong");
    i0.ɵɵtext(27, "Contact:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r5 = ctx.ngIf;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r5.provider.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r5.scoreBreakdown.rating, " \u2605");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.reason);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r5.provider.city, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", item_r5.scoreBreakdown.responseTimeMinutes, " mins");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(24, 7, item_r5.scoreBreakdown.availability), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r5.provider.phone, "");
} }
function DashboardHomeComponent_ng_container_19_p_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1, "Updating recommendation...");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_19_div_43_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_19_div_43_button_1_Template_button_click_0_listener() { const provider_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectProvider(provider_r7.id)); });
    i0.ɵɵelementStart(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 49)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const provider_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", provider_r7.id === ctx_r0.selectedProviderId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(provider_r7.businessName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(provider_r7.ownerName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(provider_r7.city);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", provider_r7.rating, " \u2605");
} }
function DashboardHomeComponent_ng_container_19_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵtemplate(1, DashboardHomeComponent_ng_container_19_div_43_button_1_Template, 11, 6, "button", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.providers);
} }
function DashboardHomeComponent_ng_container_19_p_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Loading providers...");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_19_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "No providers are available for this filter.");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_19_article_47_span_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offering_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(offering_r8);
} }
function DashboardHomeComponent_ng_container_19_article_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 50)(1, "div", 22)(2, "div")(3, "p", 5);
    i0.ɵɵtext(4, "Provider details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 9);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 51)(10, "p")(11, "strong");
    i0.ɵɵtext(12, "Owner:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p")(15, "strong");
    i0.ɵɵtext(16, "Phone:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p")(19, "strong");
    i0.ɵɵtext(20, "Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p")(23, "strong");
    i0.ɵɵtext(24, "Location:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "p")(27, "strong");
    i0.ɵɵtext(28, "Response time:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "p")(31, "strong");
    i0.ɵɵtext(32, "Availability:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(33);
    i0.ɵɵpipe(34, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 52)(36, "p", 5);
    i0.ɵɵtext(37, "What they provide");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 53);
    i0.ɵɵtemplate(39, DashboardHomeComponent_ng_container_19_article_47_span_39_Template, 2, 1, "span", 54);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const provider_r9 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(provider_r9.businessName);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("unverified", !provider_r9.verified);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(provider_r9.verified ? "Verified" : "Pending");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", provider_r9.ownerName, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r9.mobile, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r9.email || "Not shared", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r9.address || provider_r9.city, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r9.responseTimeMinutes, " mins");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(34, 11, provider_r9.availability), "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r0.providerOfferings);
} }
function DashboardHomeComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 21)(2, "div", 22)(3, "div")(4, "p", 5);
    i0.ɵɵtext(5, "Find providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7, "Search by service and city");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, DashboardHomeComponent_ng_container_19_p_8_Template, 2, 1, "p", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 23)(10, "label", 24)(11, "span");
    i0.ɵɵtext(12, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 25);
    i0.ɵɵtwoWayListener("ngModelChange", function DashboardHomeComponent_ng_container_19_Template_select_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.category, $event) || (ctx_r0.category = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(14, "option", 26);
    i0.ɵɵtext(15, "Plumber");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 27);
    i0.ɵɵtext(17, "Electrician");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 28);
    i0.ɵɵtext(19, "Medical Store");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 29);
    i0.ɵɵtext(21, "Ambulance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "label", 24)(23, "span");
    i0.ɵɵtext(24, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 25);
    i0.ɵɵtwoWayListener("ngModelChange", function DashboardHomeComponent_ng_container_19_Template_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.city, $event) || (ctx_r0.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(26, DashboardHomeComponent_ng_container_19_option_26_Template, 2, 2, "option", 30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "button", 31);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_19_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.searchServices()); });
    i0.ɵɵtext(28, "Update results");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(29, DashboardHomeComponent_ng_container_19_div_29_Template, 2, 0, "div", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(30, DashboardHomeComponent_ng_container_19_section_30_Template, 29, 9, "section", 33)(31, DashboardHomeComponent_ng_container_19_p_31_Template, 2, 0, "p", 34);
    i0.ɵɵelementStart(32, "section", 35)(33, "article", 36)(34, "div", 22)(35, "div")(36, "p", 5);
    i0.ɵɵtext(37, "Providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "h3");
    i0.ɵɵtext(39);
    i0.ɵɵpipe(40, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "span", 37);
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(43, DashboardHomeComponent_ng_container_19_div_43_Template, 2, 1, "div", 38)(44, DashboardHomeComponent_ng_container_19_p_44_Template, 2, 0, "p", 7)(45, DashboardHomeComponent_ng_container_19_ng_template_45_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(47, DashboardHomeComponent_ng_container_19_article_47_Template, 40, 13, "article", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const noProviders_r10 = i0.ɵɵreference(46);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r0.providersSource);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.category);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.city);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.cities);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.providersLoading || ctx_r0.servicesLoading || ctx_r0.recommendationLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.recommendation);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.recommendationLoading);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r0.city, " ", i0.ɵɵpipeBind1(40, 14, ctx_r0.category), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.providers.length, " results");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.providers.length)("ngIfElse", noProviders_r10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.providersLoading);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.selectedProvider);
} }
function DashboardHomeComponent_ng_template_20_section_0_span_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offering_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(offering_r11);
} }
function DashboardHomeComponent_ng_template_20_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 35)(1, "article", 50)(2, "div", 22)(3, "div")(4, "p", 5);
    i0.ɵɵtext(5, "Your business");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 9);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 51)(11, "p")(12, "strong");
    i0.ɵɵtext(13, "Category:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "capitalize");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p")(17, "strong");
    i0.ɵɵtext(18, "City:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p")(21, "strong");
    i0.ɵɵtext(22, "Phone:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p")(25, "strong");
    i0.ɵɵtext(26, "Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "p")(29, "strong");
    i0.ɵɵtext(30, "Availability:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31);
    i0.ɵɵpipe(32, "capitalize");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "p")(34, "strong");
    i0.ɵɵtext(35, "Experience:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 52)(38, "p", 5);
    i0.ɵɵtext(39, "Visible services");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 53);
    i0.ɵɵtemplate(41, DashboardHomeComponent_ng_template_20_section_0_span_41_Template, 2, 1, "span", 54);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "article", 57)(43, "div", 22)(44, "div")(45, "p", 5);
    i0.ɵɵtext(46, "How users see you");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "h3");
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(49, "div", 58)(50, "article", 59)(51, "span");
    i0.ɵɵtext(52, "Response time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "strong");
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "article", 59)(56, "span");
    i0.ɵɵtext(57, "City reach");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "strong");
    i0.ɵɵtext(59);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(60, "article", 59)(61, "span");
    i0.ɵɵtext(62, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "strong");
    i0.ɵɵtext(64);
    i0.ɵɵpipe(65, "capitalize");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(66, "p", 60);
    i0.ɵɵtext(67);
    i0.ɵɵpipe(68, "capitalize");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const provider_r12 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(provider_r12.businessName);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("unverified", !provider_r12.verified);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(provider_r12.verified ? "Verified" : "Pending");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 17, provider_r12.category), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", provider_r12.city, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r12.mobile, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r12.email || "Not shared", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(32, 19, provider_r12.availability), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", provider_r12.experienceYears, " years");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.providerAudienceOfferings);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", provider_r12.rating, " \u2605 rated provider");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", provider_r12.responseTimeMinutes, " mins");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(provider_r12.city);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(65, 21, provider_r12.availability));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" Users filtering for ", i0.ɵɵpipeBind1(68, 23, provider_r12.category), " in ", provider_r12.city, " will see your contact details and offerings here. ");
} }
function DashboardHomeComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DashboardHomeComponent_ng_template_20_section_0_Template, 69, 25, "section", 56);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.providerProfile);
} }
const KERALA_CITIES = [
    'Kochi',
    'Thiruvananthapuram',
    'Kozhikode',
    'Thrissur',
    'Kollam',
    'Alappuzha',
    'Kottayam',
    'Kannur',
    'Palakkad',
    'Malappuram'
];
const DEMO_SERVICES = [
    {
        _id: 'demo-1',
        category: 'plumber',
        name: 'Ravi Plumbing Services',
        phone: '+91-9000000001',
        city: 'Kochi',
        verified: true,
        rating: 4.8,
        responseTimeMinutes: 5,
        availability: 'available',
        highResponseRate: true
    },
    {
        _id: 'demo-2',
        category: 'plumber',
        name: 'Alappuzha Pipe Rescue',
        phone: '+91-9000000005',
        city: 'Alappuzha',
        verified: true,
        rating: 4.5,
        responseTimeMinutes: 11,
        availability: 'available',
        highResponseRate: false
    },
    {
        _id: 'demo-3',
        category: 'electrician',
        name: 'Trivandrum Power Care',
        phone: '+91-9000000002',
        city: 'Thiruvananthapuram',
        verified: true,
        rating: 4.7,
        responseTimeMinutes: 9,
        availability: 'busy',
        highResponseRate: true
    },
    {
        _id: 'demo-4',
        category: 'medical_store',
        name: 'Calicut LifeCare Pharmacy',
        phone: '+91-9000000003',
        city: 'Kozhikode',
        verified: true,
        rating: 4.6,
        responseTimeMinutes: 6,
        availability: 'available',
        highResponseRate: true
    },
    {
        _id: 'demo-5',
        category: 'ambulance',
        name: 'Thrissur Rapid Ambulance 24x7',
        phone: '+91-9000000004',
        city: 'Thrissur',
        verified: true,
        rating: 4.9,
        responseTimeMinutes: 4,
        availability: 'available',
        highResponseRate: true
    },
    {
        _id: 'demo-6',
        category: 'medical_store',
        name: 'Kottayam Health Hub',
        phone: '+91-9000000007',
        city: 'Kottayam',
        verified: true,
        rating: 4.4,
        responseTimeMinutes: 8,
        availability: 'available',
        highResponseRate: true
    },
    {
        _id: 'demo-7',
        category: 'ambulance',
        name: 'Kollam Emergency Link',
        phone: '+91-9000000008',
        city: 'Kollam',
        verified: true,
        rating: 4.7,
        responseTimeMinutes: 7,
        availability: 'available',
        highResponseRate: true
    }
];
const DEMO_PROVIDERS = [
    {
        id: 'provider-demo-1',
        userId: 'user-demo-provider',
        businessName: 'Ravi Plumbing Services',
        ownerName: 'Ravi Kumar',
        mobile: '+91-9000000001',
        email: 'ravi@smartlocal.app',
        category: 'plumber',
        city: 'Kochi',
        address: 'Marine Drive, Kochi',
        availability: 'available',
        experienceYears: 7,
        verified: true,
        rating: 4.8,
        responseTimeMinutes: 5,
        highResponseRate: true,
        createdAt: new Date().toISOString()
    }
];
export class DashboardHomeComponent {
    constructor(localServices, sessionService, authService) {
        this.localServices = localServices;
        this.sessionService = sessionService;
        this.authService = authService;
        this.cities = KERALA_CITIES;
        this.backendStatus = 'Checking...';
        this.backendMode = '';
        this.isUsingDemoData = false;
        this.category = 'plumber';
        this.city = 'Kochi';
        this.providersLoading = false;
        this.servicesLoading = false;
        this.recommendationLoading = false;
        this.services = [];
        this.servicesSource = '';
        this.servicesLoaded = false;
        this.recommendation = null;
        this.recommendationSource = '';
        this.recommendationMessage = '';
        this.currentUserName = '';
        this.currentUserRole = '';
        this.currentProviderBusiness = '';
        this.selectedProviderId = '';
        this.providers = [];
        this.providersSource = '';
        this.providerProfile = null;
    }
    ngOnInit() {
        const session = this.sessionService.session;
        this.currentUserName = session?.user.fullName ?? 'Guest User';
        this.currentUserRole = session?.user.role ?? 'visitor';
        this.currentProviderBusiness = session?.providerProfile?.businessName ?? '';
        this.providerProfile = session?.providerProfile ?? null;
        this.localServices.getHealth().subscribe({
            next: (health) => {
                this.backendStatus = `${health.status} (${new Date(health.timestamp).toLocaleString()})`;
                this.backendMode = `${health.mode} mode`;
                this.isUsingDemoData = false;
            },
            error: () => {
                this.backendStatus = 'Backend not reachable, showing demo data';
                this.backendMode = 'demo mode';
                this.isUsingDemoData = true;
            }
        });
        this.searchServices();
        this.loadProviders();
    }
    searchServices() {
        this.loadRecommendation();
        this.loadProviders();
        this.servicesLoading = true;
        this.localServices.getServices(this.category, this.city).subscribe({
            next: (res) => {
                this.services = res.data;
                this.servicesSource = res.source;
                this.servicesLoaded = true;
                this.servicesLoading = false;
            },
            error: () => {
                this.services = this.getDemoServices();
                this.servicesSource = 'frontend demo data';
                this.servicesLoaded = true;
                this.isUsingDemoData = true;
                this.servicesLoading = false;
            }
        });
    }
    loadProviders() {
        this.providersLoading = true;
        this.localServices.getProviders(this.category, this.city).subscribe({
            next: (res) => {
                this.providers = res.data;
                this.providersSource = res.source;
                this.ensureSelectedProvider();
                this.providersLoading = false;
            },
            error: () => {
                const localProviders = this.authService.getLocalProviders();
                const mergedProviders = [...DEMO_PROVIDERS, ...localProviders].filter((provider, index, list) => {
                    return list.findIndex((entry) => entry.mobile === provider.mobile && entry.businessName === provider.businessName) === index;
                });
                this.providers = mergedProviders.filter((provider) => {
                    const categoryMatch = this.category ? provider.category === this.category : true;
                    const cityMatch = this.city ? provider.city.toLowerCase() === this.city.toLowerCase() : true;
                    return categoryMatch && cityMatch;
                });
                this.providersSource = 'frontend local directory';
                this.isUsingDemoData = true;
                this.ensureSelectedProvider();
                this.providersLoading = false;
            }
        });
    }
    loadRecommendation() {
        this.recommendationMessage = '';
        this.recommendationLoading = true;
        this.localServices.getRecommendation(this.category, this.city).subscribe({
            next: (res) => {
                this.recommendation = res.data;
                this.recommendationSource = res.source;
                this.recommendationLoading = false;
            },
            error: () => {
                this.recommendation = this.buildDemoRecommendation();
                this.recommendationSource = 'frontend demo AI';
                this.recommendationMessage = 'Showing demo AI recommendation because backend is offline.';
                this.isUsingDemoData = true;
                this.recommendationLoading = false;
            }
        });
    }
    selectProvider(providerId) {
        this.selectedProviderId = providerId;
    }
    get isProviderView() {
        return this.currentUserRole === 'provider';
    }
    get isUserView() {
        return this.currentUserRole === 'user' || this.currentUserRole === 'guest' || this.currentUserRole === 'visitor' || this.currentUserRole === 'admin';
    }
    get selectedProvider() {
        return this.providers.find((provider) => provider.id === this.selectedProviderId) ?? this.providers[0] ?? null;
    }
    get providerOfferings() {
        const provider = this.selectedProvider;
        return provider ? this.getOfferingsForCategory(provider.category) : [];
    }
    get providerAudienceOfferings() {
        return this.providerProfile ? this.getOfferingsForCategory(this.providerProfile.category) : [];
    }
    getDemoServices() {
        const category = this.category.toLowerCase();
        const city = this.city.trim().toLowerCase();
        const localProvidersAsServices = this.authService.getLocalProviders().map((provider) => ({
            _id: provider.id,
            category: provider.category,
            name: provider.businessName,
            phone: provider.mobile,
            city: provider.city,
            verified: provider.verified,
            rating: provider.rating,
            responseTimeMinutes: provider.responseTimeMinutes,
            availability: provider.availability,
            highResponseRate: provider.highResponseRate
        }));
        return [...DEMO_SERVICES, ...localProvidersAsServices].filter((service, index, list) => {
            const duplicateIndex = list.findIndex((entry) => entry.phone === service.phone && entry.name === service.name);
            if (duplicateIndex !== index) {
                return false;
            }
            const categoryMatch = category ? service.category === category : true;
            const cityMatch = city ? service.city.toLowerCase() === city : true;
            return categoryMatch && cityMatch;
        });
    }
    buildDemoRecommendation() {
        const ranked = [...this.getDemoServices()].sort((left, right) => this.scoreService(right) - this.scoreService(left));
        const provider = ranked[0];
        if (!provider || provider.rating == null || provider.responseTimeMinutes == null || provider.availability == null) {
            return null;
        }
        return {
            provider: {
                ...provider,
                rating: provider.rating,
                responseTimeMinutes: provider.responseTimeMinutes,
                availability: provider.availability,
                highResponseRate: Boolean(provider.highResponseRate),
                recommendationScore: this.scoreService(provider)
            },
            reason: `Recommended: ${provider.name} - ${provider.rating} star - ${provider.responseTimeMinutes} mins away - ${provider.highResponseRate ? 'High response rate' : 'Reliable availability'}`,
            scoreBreakdown: {
                rating: provider.rating,
                responseTimeMinutes: provider.responseTimeMinutes,
                availability: provider.availability,
                verified: provider.verified,
                highResponseRate: Boolean(provider.highResponseRate)
            }
        };
    }
    scoreService(service) {
        const ratingScore = (service.rating || 0) * 20;
        const responseScore = Math.max(0, 30 - (service.responseTimeMinutes || 30));
        const verifiedScore = service.verified ? 14 : 4;
        const availabilityScore = service.availability === 'available' ? 12 : 3;
        const responseRateScore = service.highResponseRate ? 8 : 0;
        return ratingScore + responseScore + verifiedScore + availabilityScore + responseRateScore;
    }
    ensureSelectedProvider() {
        if (!this.providers.length) {
            this.selectedProviderId = '';
            return;
        }
        const stillExists = this.providers.some((provider) => provider.id === this.selectedProviderId);
        if (!stillExists) {
            this.selectedProviderId = this.providers[0].id;
        }
    }
    getOfferingsForCategory(category) {
        switch (category) {
            case 'plumber':
                return ['Leak repair', 'Motor setup', 'Water tank maintenance'];
            case 'electrician':
                return ['Wiring check', 'Inverter support', 'Appliance installation'];
            case 'medical_store':
                return ['24x7 medicine support', 'Prescription pickup', 'Home delivery'];
            case 'ambulance':
                return ['Emergency pickup', 'Hospital transfer', 'Oxygen support'];
            default:
                return ['General local support'];
        }
    }
    static { this.ɵfac = function DashboardHomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardHomeComponent)(i0.ɵɵdirectiveInject(i1.LocalServicesService), i0.ɵɵdirectiveInject(i2.SessionService), i0.ɵɵdirectiveInject(i3.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardHomeComponent, selectors: [["app-dashboard-home"]], decls: 22, vars: 14, consts: [["providerDashboard", ""], ["noProviders", ""], ["title", "Dashboard", "subtitle", "Role-based view for provider discovery and business visibility."], [1, "dashboard-hero"], [1, "hero-copy"], [1, "eyebrow"], [1, "muted"], ["class", "muted", 4, "ngIf"], [1, "hero-badges"], [1, "verify-pill"], [1, "status-note"], ["class", "spotlight-grid", 4, "ngIf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "spotlight-grid"], [1, "spotlight-card", "warm-card"], [1, "spotlight-label"], [1, "spotlight-card", "cool-card"], [1, "spotlight-card", "mint-card"], ["class", "spotlight-grid provider-spotlight", 4, "ngIf"], [1, "spotlight-grid", "provider-spotlight"], [1, "panel", "search-panel"], [1, "panel-header"], [1, "row", "compact-row", "filter-row"], [1, "inline-field"], [3, "ngModelChange", "ngModel"], ["value", "plumber"], ["value", "electrician"], ["value", "medical_store"], ["value", "ambulance"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], ["class", "loader-line", 4, "ngIf"], ["class", "panel recommendation-panel", 4, "ngIf"], ["class", "muted recommendation-copy", 4, "ngIf"], [1, "provider-layout"], [1, "panel", "provider-list-panel"], [1, "count-pill"], ["class", "provider-stack", 4, "ngIf", "ngIfElse"], ["class", "panel provider-detail-panel focus-panel", 4, "ngIf"], [3, "value"], [1, "loader-line"], [1, "panel", "recommendation-panel"], [1, "status-pill"], [1, "meta-grid"], [1, "muted", "recommendation-copy"], [1, "provider-stack"], ["type", "button", "class", "provider-card", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "provider-card", 3, "click"], [1, "provider-card-meta"], [1, "panel", "provider-detail-panel", "focus-panel"], [1, "detail-grid"], [1, "offerings"], [1, "chip-row"], ["class", "chip", 4, "ngFor", "ngForOf"], [1, "chip"], ["class", "provider-layout", 4, "ngIf"], [1, "panel", "provider-summary-panel"], [1, "summary-grid"], [1, "summary-card"], [1, "muted", "provider-note"]], template: function DashboardHomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-page-shell", 2)(1, "section", 3)(2, "div", 4)(3, "p", 5);
            i0.ɵɵtext(4, "Session overview");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h3");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 6);
            i0.ɵɵtext(8);
            i0.ɵɵpipe(9, "uppercase");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, DashboardHomeComponent_p_10_Template, 2, 0, "p", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 8)(12, "span", 9);
            i0.ɵɵtext(13);
            i0.ɵɵpipe(14, "uppercase");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "span", 10);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(17, DashboardHomeComponent_section_17_Template, 23, 9, "section", 11)(18, DashboardHomeComponent_ng_container_18_Template, 2, 1, "ng-container", 12)(19, DashboardHomeComponent_ng_container_19_Template, 48, 16, "ng-container", 13)(20, DashboardHomeComponent_ng_template_20_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const providerDashboard_r13 = i0.ɵɵreference(21);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.currentUserName);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(9, 10, ctx.currentUserRole), " \u00B7 ", ctx.backendMode, "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isUsingDemoData);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 12, ctx.currentUserRole));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.backendStatus);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isUserView);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isProviderView);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isUserView)("ngIfElse", providerDashboard_r13);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i5.PageShellComponent, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.SelectControlValueAccessor, i6.NgControlStatus, i6.NgModel, i4.UpperCasePipe, i7.CapitalizePipe], styles: [".dashboard-hero[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%], \n.row[_ngcontent-%COMP%], \n.detail-grid[_ngcontent-%COMP%], \n.provider-card[_ngcontent-%COMP%], \n.provider-card-meta[_ngcontent-%COMP%], \n.hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.dashboard-hero[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.dashboard-hero[_ngcontent-%COMP%] {\n  padding: 1.4rem;\n  margin-bottom: 1.25rem;\n  border-radius: 24px;\n  border: 1px solid rgba(120, 142, 171, 0.14);\n  background:\n    linear-gradient(135deg, rgba(15, 76, 129, 0.94), rgba(14, 165, 233, 0.74)),\n    radial-gradient(circle at top right, rgba(255, 255, 255, 0.22), transparent 26%);\n  color: #ffffff;\n  box-shadow: var(--shadow-card);\n  animation: _ngcontent-%COMP%_panel-rise 700ms ease both;\n}\n\n.hero-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.hero-copy[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%], \n.dashboard-hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.hero-badges[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.7rem;\n}\n\n.status-note[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.55rem 0.9rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.spotlight-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.4rem;\n}\n\n.spotlight-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 1.15rem;\n  border-radius: 22px;\n  border: 1px solid rgba(120, 142, 171, 0.14);\n  box-shadow: 0 16px 28px rgba(20, 33, 61, 0.08);\n  animation: _ngcontent-%COMP%_panel-rise 760ms ease both;\n}\n\n.spotlight-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.55rem;\n  font-size: clamp(1.2rem, 2.4vw, 1.75rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n\n.spotlight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  color: rgba(20, 33, 61, 0.72);\n  line-height: 1.5;\n}\n\n.spotlight-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  background: rgba(255, 255, 255, 0.56);\n}\n\n.warm-card[_ngcontent-%COMP%] {\n  background: linear-gradient(145deg, rgba(255, 138, 61, 0.18), rgba(255, 255, 255, 0.92));\n}\n\n.cool-card[_ngcontent-%COMP%] {\n  background: linear-gradient(145deg, rgba(14, 165, 233, 0.16), rgba(255, 255, 255, 0.92));\n}\n\n.mint-card[_ngcontent-%COMP%] {\n  background: linear-gradient(145deg, rgba(100, 216, 195, 0.18), rgba(255, 255, 255, 0.92));\n}\n\n.loader-line[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(15, 76, 129, 0.08);\n  border-radius: 999px;\n  overflow: hidden;\n  margin-top: 1rem;\n}\n\n.loader-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 34%;\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--brand-warm), var(--brand-vivid), var(--brand-mint));\n  animation: _ngcontent-%COMP%_dashboard-loader 1s linear infinite;\n}\n\n.panel[_ngcontent-%COMP%] {\n  padding: 1.2rem;\n  border-radius: 22px;\n  border: 1px solid rgba(120, 142, 171, 0.14);\n  background: rgba(255, 255, 255, 0.66);\n  box-shadow: 0 14px 32px rgba(20, 33, 61, 0.06);\n  animation: _ngcontent-%COMP%_panel-rise 820ms ease both;\n}\n\n.search-panel[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.provider-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(260px, 0.95fr) minmax(0, 1.35fr);\n  gap: 1.5rem;\n}\n\n.provider-list-panel[_ngcontent-%COMP%], \n.provider-detail-panel[_ngcontent-%COMP%], \n.provider-summary-panel[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n\n.recommendation-panel[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  background: linear-gradient(135deg, rgba(255, 138, 61, 0.12), rgba(100, 216, 195, 0.1));\n}\n\n.focus-panel[_ngcontent-%COMP%] {\n  border-color: rgba(15, 76, 129, 0.18);\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(238, 251, 255, 0.92));\n  box-shadow: 0 20px 36px rgba(15, 76, 129, 0.12);\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  color: var(--ink-soft);\n  font-size: 0.76rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.35rem, 2.2vw, 1.8rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0b1730;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 0.98rem;\n}\n\n.row[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n\n.compact-row[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n}\n\n.filter-row[_ngcontent-%COMP%] {\n  align-items: end;\n}\n\n.inline-field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  min-width: 180px;\n  flex: 1 1 220px;\n}\n\n.inline-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--ink-soft);\n}\n\nselect[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  border: 1px solid rgba(120, 142, 171, 0.2);\n  border-radius: var(--radius-md);\n  padding: 0.9rem 1rem;\n  font: inherit;\n}\n\nselect[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.84);\n  color: var(--ink-strong);\n  font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  cursor: pointer;\n  border-color: transparent;\n  font-weight: 800;\n  box-shadow: 0 14px 26px rgba(15, 76, 129, 0.18);\n}\n\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: saturate(1.08);\n}\n\n.status-pill[_ngcontent-%COMP%], \n.verify-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem 0.8rem;\n  border-radius: 999px;\n  background: linear-gradient(135deg, #0f766e, #3ea37b);\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n\n.verify-pill.unverified[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n\n.count-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.4rem 0.75rem;\n  border-radius: 999px;\n  background: rgba(15, 76, 129, 0.08);\n  color: var(--brand-deep);\n  font-size: 0.8rem;\n  font-weight: 800;\n}\n\n.provider-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n\n.provider-card[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.88);\n  color: #0f172a;\n  border: 1px solid rgba(120, 142, 171, 0.16);\n  padding: 0.95rem 1rem;\n  border-radius: 18px;\n  transition:\n    transform 180ms ease,\n    box-shadow 220ms ease,\n    border-color 180ms ease,\n    background-color 180ms ease;\n}\n\n.provider-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.01);\n  border-color: rgba(15, 76, 129, 0.28);\n  box-shadow: 0 18px 28px rgba(15, 76, 129, 0.12);\n  background: #fcfdff;\n}\n\n.provider-card.active[_ngcontent-%COMP%] {\n  border-color: #0f172a;\n  background: linear-gradient(135deg, rgba(14, 165, 233, 0.12), rgba(255, 255, 255, 0.96));\n  box-shadow: 0 18px 30px rgba(15, 76, 129, 0.14);\n}\n\n.provider-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.02rem;\n  font-weight: 800;\n}\n\n.provider-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9rem;\n}\n\n.provider-card-meta[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.2rem;\n  font-size: 0.9rem;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  flex-wrap: wrap;\n  gap: 0.9rem 1.5rem;\n}\n\n.detail-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.meta-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  min-width: 180px;\n  margin: 0;\n  font-size: 0.98rem;\n}\n\n.meta-grid[_ngcontent-%COMP%], \n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n  margin-top: 1rem;\n}\n\n.meta-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 16px;\n  border: 1px solid rgba(120, 142, 171, 0.15);\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.82));\n  transition:\n    transform 160ms ease,\n    box-shadow 180ms ease;\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 22px rgba(21, 76, 121, 0.08);\n}\n\n.offerings[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n\n.chip-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: linear-gradient(135deg, rgba(255, 138, 61, 0.14), rgba(100, 216, 195, 0.16));\n  color: var(--brand-deep);\n  font-weight: 700;\n  font-size: 0.92rem;\n}\n\n.provider-note[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.recommendation-copy[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 1.25rem;\n}\n\n@media (max-width: 900px) {\n  .spotlight-grid[_ngcontent-%COMP%], \n   .provider-layout[_ngcontent-%COMP%], \n   .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_dashboard-loader {\n  from {\n    transform: translateX(-120%);\n  }\n\n  to {\n    transform: translateX(320%);\n  }\n}\n\n@media (max-width: 640px) {\n  .dashboard-hero[_ngcontent-%COMP%], \n   .panel-header[_ngcontent-%COMP%], \n   .provider-card[_ngcontent-%COMP%], \n   .hero-badges[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n    align-items: flex-start;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .provider-card-meta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_panel-rise {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardHomeComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-home', template: "<app-page-shell title=\"Dashboard\" subtitle=\"Role-based view for provider discovery and business visibility.\">\n  <section class=\"dashboard-hero\">\n    <div class=\"hero-copy\">\n      <p class=\"eyebrow\">Session overview</p>\n      <h3>{{ currentUserName }}</h3>\n      <p class=\"muted\">{{ currentUserRole | uppercase }} \u00B7 {{ backendMode }}</p>\n      <p class=\"muted\" *ngIf=\"isUsingDemoData\">Showing fallback data while the backend is unavailable.</p>\n    </div>\n    <div class=\"hero-badges\">\n      <span class=\"verify-pill\">{{ currentUserRole | uppercase }}</span>\n      <span class=\"status-note\">{{ backendStatus }}</span>\n    </div>\n  </section>\n\n  <section class=\"spotlight-grid\" *ngIf=\"isUserView\">\n    <article class=\"spotlight-card warm-card\">\n      <span class=\"spotlight-label\">Providers in view</span>\n      <strong>{{ providers.length }}</strong>\n      <p>{{ city }} {{ category | capitalize }} options loaded for comparison.</p>\n    </article>\n    <article class=\"spotlight-card cool-card\">\n      <span class=\"spotlight-label\">AI recommendation</span>\n      <strong>{{ recommendation ? recommendation.provider.name : 'Updating...' }}</strong>\n      <p>{{ recommendation ? recommendation.reason : 'Best-fit provider is being recalculated.' }}</p>\n    </article>\n    <article class=\"spotlight-card mint-card\">\n      <span class=\"spotlight-label\">Live mode</span>\n      <strong>{{ isUsingDemoData ? 'Demo fallback' : 'Backend connected' }}</strong>\n      <p>{{ providersSource || 'Provider source will appear after search.' }}</p>\n    </article>\n  </section>\n\n  <ng-container *ngIf=\"isProviderView\">\n    <section class=\"spotlight-grid provider-spotlight\" *ngIf=\"providerProfile as provider\">\n      <article class=\"spotlight-card warm-card\">\n        <span class=\"spotlight-label\">Business name</span>\n        <strong>{{ provider.businessName }}</strong>\n        <p>Your storefront appears in local discovery for verified users.</p>\n      </article>\n      <article class=\"spotlight-card cool-card\">\n        <span class=\"spotlight-label\">Rating</span>\n        <strong>{{ provider.rating }} \u2605</strong>\n        <p>Visible trust score shown to local users browsing your category.</p>\n      </article>\n      <article class=\"spotlight-card mint-card\">\n        <span class=\"spotlight-label\">Response time</span>\n        <strong>{{ provider.responseTimeMinutes }} mins</strong>\n        <p>Fast response positioning helps you surface higher in intent-heavy searches.</p>\n      </article>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"isUserView; else providerDashboard\">\n    <section class=\"panel search-panel\">\n      <div class=\"panel-header\">\n        <div>\n          <p class=\"eyebrow\">Find providers</p>\n          <h3>Search by service and city</h3>\n        </div>\n        <p class=\"muted\" *ngIf=\"providersSource\">Source: {{ providersSource }}</p>\n      </div>\n\n      <div class=\"row compact-row filter-row\">\n        <label class=\"inline-field\">\n          <span>Category</span>\n          <select [(ngModel)]=\"category\">\n            <option value=\"plumber\">Plumber</option>\n            <option value=\"electrician\">Electrician</option>\n            <option value=\"medical_store\">Medical Store</option>\n            <option value=\"ambulance\">Ambulance</option>\n          </select>\n        </label>\n        <label class=\"inline-field\">\n          <span>City</span>\n          <select [(ngModel)]=\"city\">\n            <option *ngFor=\"let cityOption of cities\" [value]=\"cityOption\">{{ cityOption }}</option>\n          </select>\n        </label>\n        <button type=\"button\" (click)=\"searchServices()\">Update results</button>\n      </div>\n      <div class=\"loader-line\" *ngIf=\"providersLoading || servicesLoading || recommendationLoading\">\n        <span></span>\n      </div>\n    </section>\n\n    <section class=\"panel recommendation-panel\" *ngIf=\"recommendation as item\">\n      <div class=\"panel-header\">\n        <div>\n          <p class=\"eyebrow\">Recommended</p>\n          <h3>{{ item.provider.name }}</h3>\n        </div>\n        <span class=\"status-pill\">{{ item.scoreBreakdown.rating }} \u2605</span>\n      </div>\n      <p class=\"muted\">{{ item.reason }}</p>\n      <div class=\"meta-grid\">\n        <p><strong>City:</strong> {{ item.provider.city }}</p>\n        <p><strong>Response time:</strong> {{ item.scoreBreakdown.responseTimeMinutes }} mins</p>\n        <p><strong>Status:</strong> {{ item.scoreBreakdown.availability | capitalize }}</p>\n        <p><strong>Contact:</strong> {{ item.provider.phone }}</p>\n      </div>\n    </section>\n    <p class=\"muted recommendation-copy\" *ngIf=\"recommendationLoading\">Updating recommendation...</p>\n\n    <section class=\"provider-layout\">\n      <article class=\"panel provider-list-panel\">\n        <div class=\"panel-header\">\n          <div>\n            <p class=\"eyebrow\">Providers</p>\n            <h3>{{ city }} {{ category | capitalize }}</h3>\n          </div>\n          <span class=\"count-pill\">{{ providers.length }} results</span>\n        </div>\n\n        <div class=\"provider-stack\" *ngIf=\"providers.length; else noProviders\">\n          <button\n            type=\"button\"\n            class=\"provider-card\"\n            *ngFor=\"let provider of providers\"\n            [class.active]=\"provider.id === selectedProviderId\"\n            (click)=\"selectProvider(provider.id)\"\n          >\n            <div>\n              <strong>{{ provider.businessName }}</strong>\n              <span>{{ provider.ownerName }}</span>\n            </div>\n            <div class=\"provider-card-meta\">\n              <span>{{ provider.city }}</span>\n              <span>{{ provider.rating }} \u2605</span>\n            </div>\n          </button>\n        </div>\n        <p class=\"muted\" *ngIf=\"providersLoading\">Loading providers...</p>\n\n        <ng-template #noProviders>\n          <p class=\"muted\">No providers are available for this filter.</p>\n        </ng-template>\n      </article>\n\n      <article class=\"panel provider-detail-panel focus-panel\" *ngIf=\"selectedProvider as provider\">\n        <div class=\"panel-header\">\n          <div>\n            <p class=\"eyebrow\">Provider details</p>\n            <h3>{{ provider.businessName }}</h3>\n          </div>\n          <span class=\"verify-pill\" [class.unverified]=\"!provider.verified\">{{ provider.verified ? 'Verified' : 'Pending' }}</span>\n        </div>\n\n        <div class=\"detail-grid\">\n          <p><strong>Owner:</strong> {{ provider.ownerName }}</p>\n          <p><strong>Phone:</strong> {{ provider.mobile }}</p>\n          <p><strong>Email:</strong> {{ provider.email || 'Not shared' }}</p>\n          <p><strong>Location:</strong> {{ provider.address || provider.city }}</p>\n          <p><strong>Response time:</strong> {{ provider.responseTimeMinutes }} mins</p>\n          <p><strong>Availability:</strong> {{ provider.availability | capitalize }}</p>\n        </div>\n\n        <div class=\"offerings\">\n          <p class=\"eyebrow\">What they provide</p>\n          <div class=\"chip-row\">\n            <span class=\"chip\" *ngFor=\"let offering of providerOfferings\">{{ offering }}</span>\n          </div>\n        </div>\n      </article>\n    </section>\n  </ng-container>\n\n  <ng-template #providerDashboard>\n    <section class=\"provider-layout\" *ngIf=\"providerProfile as provider\">\n      <article class=\"panel provider-detail-panel focus-panel\">\n        <div class=\"panel-header\">\n          <div>\n            <p class=\"eyebrow\">Your business</p>\n            <h3>{{ provider.businessName }}</h3>\n          </div>\n          <span class=\"verify-pill\" [class.unverified]=\"!provider.verified\">{{ provider.verified ? 'Verified' : 'Pending' }}</span>\n        </div>\n\n        <div class=\"detail-grid\">\n          <p><strong>Category:</strong> {{ provider.category | capitalize }}</p>\n          <p><strong>City:</strong> {{ provider.city }}</p>\n          <p><strong>Phone:</strong> {{ provider.mobile }}</p>\n          <p><strong>Email:</strong> {{ provider.email || 'Not shared' }}</p>\n          <p><strong>Availability:</strong> {{ provider.availability | capitalize }}</p>\n          <p><strong>Experience:</strong> {{ provider.experienceYears }} years</p>\n        </div>\n\n        <div class=\"offerings\">\n          <p class=\"eyebrow\">Visible services</p>\n          <div class=\"chip-row\">\n            <span class=\"chip\" *ngFor=\"let offering of providerAudienceOfferings\">{{ offering }}</span>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"panel provider-summary-panel\">\n        <div class=\"panel-header\">\n          <div>\n            <p class=\"eyebrow\">How users see you</p>\n            <h3>{{ provider.rating }} \u2605 rated provider</h3>\n          </div>\n        </div>\n\n        <div class=\"summary-grid\">\n          <article class=\"summary-card\">\n            <span>Response time</span>\n            <strong>{{ provider.responseTimeMinutes }} mins</strong>\n          </article>\n          <article class=\"summary-card\">\n            <span>City reach</span>\n            <strong>{{ provider.city }}</strong>\n          </article>\n          <article class=\"summary-card\">\n            <span>Status</span>\n            <strong>{{ provider.availability | capitalize }}</strong>\n          </article>\n        </div>\n\n        <p class=\"muted provider-note\">\n          Users filtering for {{ provider.category | capitalize }} in {{ provider.city }} will see your contact details and offerings here.\n        </p>\n      </article>\n    </section>\n  </ng-template>\n</app-page-shell>\n", styles: [".dashboard-hero,\n.panel-header,\n.row,\n.detail-grid,\n.provider-card,\n.provider-card-meta,\n.hero-badges {\n  display: flex;\n}\n\n.dashboard-hero,\n.panel-header {\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.dashboard-hero {\n  padding: 1.4rem;\n  margin-bottom: 1.25rem;\n  border-radius: 24px;\n  border: 1px solid rgba(120, 142, 171, 0.14);\n  background:\n    linear-gradient(135deg, rgba(15, 76, 129, 0.94), rgba(14, 165, 233, 0.74)),\n    radial-gradient(circle at top right, rgba(255, 255, 255, 0.22), transparent 26%);\n  color: #ffffff;\n  box-shadow: var(--shadow-card);\n  animation: panel-rise 700ms ease both;\n}\n\n.hero-copy h3,\n.hero-copy .muted,\n.dashboard-hero .eyebrow {\n  color: #ffffff;\n}\n\n.hero-badges {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.7rem;\n}\n\n.status-note {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.55rem 0.9rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.spotlight-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.4rem;\n}\n\n.spotlight-card {\n  position: relative;\n  overflow: hidden;\n  padding: 1.15rem;\n  border-radius: 22px;\n  border: 1px solid rgba(120, 142, 171, 0.14);\n  box-shadow: 0 16px 28px rgba(20, 33, 61, 0.08);\n  animation: panel-rise 760ms ease both;\n}\n\n.spotlight-card strong {\n  display: block;\n  margin-top: 0.55rem;\n  font-size: clamp(1.2rem, 2.4vw, 1.75rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n\n.spotlight-card p {\n  margin: 0.5rem 0 0;\n  color: rgba(20, 33, 61, 0.72);\n  line-height: 1.5;\n}\n\n.spotlight-label {\n  display: inline-flex;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  background: rgba(255, 255, 255, 0.56);\n}\n\n.warm-card {\n  background: linear-gradient(145deg, rgba(255, 138, 61, 0.18), rgba(255, 255, 255, 0.92));\n}\n\n.cool-card {\n  background: linear-gradient(145deg, rgba(14, 165, 233, 0.16), rgba(255, 255, 255, 0.92));\n}\n\n.mint-card {\n  background: linear-gradient(145deg, rgba(100, 216, 195, 0.18), rgba(255, 255, 255, 0.92));\n}\n\n.loader-line {\n  height: 4px;\n  background: rgba(15, 76, 129, 0.08);\n  border-radius: 999px;\n  overflow: hidden;\n  margin-top: 1rem;\n}\n\n.loader-line span {\n  display: block;\n  width: 34%;\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--brand-warm), var(--brand-vivid), var(--brand-mint));\n  animation: dashboard-loader 1s linear infinite;\n}\n\n.panel {\n  padding: 1.2rem;\n  border-radius: 22px;\n  border: 1px solid rgba(120, 142, 171, 0.14);\n  background: rgba(255, 255, 255, 0.66);\n  box-shadow: 0 14px 32px rgba(20, 33, 61, 0.06);\n  animation: panel-rise 820ms ease both;\n}\n\n.search-panel {\n  margin-bottom: 1.25rem;\n}\n\n.provider-layout {\n  display: grid;\n  grid-template-columns: minmax(260px, 0.95fr) minmax(0, 1.35fr);\n  gap: 1.5rem;\n}\n\n.provider-list-panel,\n.provider-detail-panel,\n.provider-summary-panel {\n  padding: 1.25rem;\n}\n\n.recommendation-panel {\n  margin-bottom: 1.25rem;\n  background: linear-gradient(135deg, rgba(255, 138, 61, 0.12), rgba(100, 216, 195, 0.1));\n}\n\n.focus-panel {\n  border-color: rgba(15, 76, 129, 0.18);\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(238, 251, 255, 0.92));\n  box-shadow: 0 20px 36px rgba(15, 76, 129, 0.12);\n}\n\n.eyebrow {\n  margin: 0 0 0.35rem;\n  color: var(--ink-soft);\n  font-size: 0.76rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\nh3 {\n  margin: 0;\n  font-size: clamp(1.35rem, 2.2vw, 1.8rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0b1730;\n}\n\n.muted {\n  color: var(--ink-soft);\n  font-size: 0.98rem;\n}\n\n.row {\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n\n.compact-row {\n  margin-top: 0.8rem;\n}\n\n.filter-row {\n  align-items: end;\n}\n\n.inline-field {\n  display: grid;\n  gap: 0.4rem;\n  min-width: 180px;\n  flex: 1 1 220px;\n}\n\n.inline-field span {\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--ink-soft);\n}\n\nselect,\nbutton,\ninput {\n  border: 1px solid rgba(120, 142, 171, 0.2);\n  border-radius: var(--radius-md);\n  padding: 0.9rem 1rem;\n  font: inherit;\n}\n\nselect,\ninput {\n  background: rgba(255, 255, 255, 0.84);\n  color: var(--ink-strong);\n  font-weight: 700;\n}\n\nbutton {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  cursor: pointer;\n  border-color: transparent;\n  font-weight: 800;\n  box-shadow: 0 14px 26px rgba(15, 76, 129, 0.18);\n}\n\nbutton:hover:not(:disabled) {\n  filter: saturate(1.08);\n}\n\n.status-pill,\n.verify-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.35rem 0.8rem;\n  border-radius: 999px;\n  background: linear-gradient(135deg, #0f766e, #3ea37b);\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n\n.verify-pill.unverified {\n  background: #d97706;\n}\n\n.count-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.4rem 0.75rem;\n  border-radius: 999px;\n  background: rgba(15, 76, 129, 0.08);\n  color: var(--brand-deep);\n  font-size: 0.8rem;\n  font-weight: 800;\n}\n\n.provider-stack {\n  display: grid;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n\n.provider-card {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.88);\n  color: #0f172a;\n  border: 1px solid rgba(120, 142, 171, 0.16);\n  padding: 0.95rem 1rem;\n  border-radius: 18px;\n  transition:\n    transform 180ms ease,\n    box-shadow 220ms ease,\n    border-color 180ms ease,\n    background-color 180ms ease;\n}\n\n.provider-card:hover {\n  transform: translateY(-3px) scale(1.01);\n  border-color: rgba(15, 76, 129, 0.28);\n  box-shadow: 0 18px 28px rgba(15, 76, 129, 0.12);\n  background: #fcfdff;\n}\n\n.provider-card.active {\n  border-color: #0f172a;\n  background: linear-gradient(135deg, rgba(14, 165, 233, 0.12), rgba(255, 255, 255, 0.96));\n  box-shadow: 0 18px 30px rgba(15, 76, 129, 0.14);\n}\n\n.provider-card strong,\n.summary-card strong {\n  display: block;\n  font-size: 1.02rem;\n  font-weight: 800;\n}\n\n.provider-card span,\n.summary-card span {\n  color: #64748b;\n  font-size: 0.9rem;\n}\n\n.provider-card-meta {\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.2rem;\n  font-size: 0.9rem;\n}\n\n.detail-grid {\n  margin-top: 1rem;\n  flex-wrap: wrap;\n  gap: 0.9rem 1.5rem;\n}\n\n.detail-grid p,\n.meta-grid p {\n  min-width: 180px;\n  margin: 0;\n  font-size: 0.98rem;\n}\n\n.meta-grid,\n.summary-grid {\n  display: grid;\n  gap: 0.85rem;\n  margin-top: 1rem;\n}\n\n.meta-grid {\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n\n.summary-grid {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.summary-card {\n  padding: 1rem;\n  border-radius: 16px;\n  border: 1px solid rgba(120, 142, 171, 0.15);\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.82));\n  transition:\n    transform 160ms ease,\n    box-shadow 180ms ease;\n}\n\n.summary-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 22px rgba(21, 76, 121, 0.08);\n}\n\n.offerings {\n  margin-top: 1.25rem;\n}\n\n.chip-row {\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n\n.chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: linear-gradient(135deg, rgba(255, 138, 61, 0.14), rgba(100, 216, 195, 0.16));\n  color: var(--brand-deep);\n  font-weight: 700;\n  font-size: 0.92rem;\n}\n\n.provider-note {\n  margin-top: 1rem;\n}\n\n.recommendation-copy {\n  margin: 0.75rem 0 1.25rem;\n}\n\n@media (max-width: 900px) {\n  .spotlight-grid,\n  .provider-layout,\n  .summary-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@keyframes dashboard-loader {\n  from {\n    transform: translateX(-120%);\n  }\n\n  to {\n    transform: translateX(320%);\n  }\n}\n\n@media (max-width: 640px) {\n  .dashboard-hero,\n  .panel-header,\n  .provider-card,\n  .hero-badges {\n    flex-direction: column;\n    gap: 0.75rem;\n    align-items: flex-start;\n  }\n\n  .panel {\n    padding: 1rem;\n  }\n\n  .provider-card-meta {\n    align-items: flex-start;\n  }\n}\n\n@keyframes panel-rise {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n"] }]
    }], () => [{ type: i1.LocalServicesService }, { type: i2.SessionService }, { type: i3.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardHomeComponent, { className: "DashboardHomeComponent" }); })();
//# sourceMappingURL=dashboard-home.component.js.map