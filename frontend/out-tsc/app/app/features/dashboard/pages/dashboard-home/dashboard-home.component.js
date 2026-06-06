import { Component } from '@angular/core';
import { DEMO_PROVIDERS, DEMO_SERVICES, KERALA_CITIES } from '../../../../shared/data/kerala-directory.data';
import { CATEGORY_OFFERINGS, FRONTEND_DEFAULTS, SERVICE_CATEGORIES } from '../../../../shared/config/app-config';
import * as i0 from "@angular/core";
import * as i1 from "../../services/local-services.service";
import * as i2 from "../../../../core/services/session.service";
import * as i3 from "@angular/common";
import * as i4 from "../../../../shared/components/page-shell/page-shell.component";
import * as i5 from "../../../../shared/components/star-rating/star-rating.component";
import * as i6 from "@angular/forms";
import * as i7 from "../../../../shared/pipes/capitalize.pipe";
function DashboardHomeComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Demo fallback active");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_div_21_article_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 20)(1, "span");
    i0.ɵɵtext(2, "Open SOS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.openSosCount);
} }
function DashboardHomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "article", 20)(2, "span");
    i0.ɵɵtext(3, "Providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "article", 20)(7, "span");
    i0.ɵɵtext(8, "Average rating");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "article", 20)(12, "span");
    i0.ɵɵtext(13, "Fastest response");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(16, DashboardHomeComponent_div_21_article_16_Template, 5, 1, "article", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.providers.length);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.averageProviderRating);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", (tmp_4_0 = ctx_r1.fastestResponseMinutes) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0, " mins");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isSuperAdminView);
} }
function DashboardHomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "article", 20)(2, "span");
    i0.ɵɵtext(3, "Rating");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "article", 20)(7, "span");
    i0.ɵɵtext(8, "Reviews");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "article", 20)(12, "span");
    i0.ɵɵtext(13, "Response time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const provider_r3 = ctx.ngIf;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(provider_r3.rating);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(provider_r3.reviewCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", provider_r3.responseTimeMinutes, " mins");
} }
function DashboardHomeComponent_ng_container_23_button_10_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.pendingUsersCount + ctx_r1.pendingProvidersCount);
} }
function DashboardHomeComponent_ng_container_23_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setUserTab("admin")); });
    i0.ɵɵtext(1, " Super Admin ");
    i0.ɵɵtemplate(2, DashboardHomeComponent_ng_container_23_button_10_span_2_Template, 2, 1, "span", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r1.activeUserTab === "admin");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.pendingUsersCount || ctx_r1.pendingProvidersCount);
} }
function DashboardHomeComponent_ng_container_23_section_11_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Source: ", ctx_r1.providersSource, "");
} }
function DashboardHomeComponent_ng_container_23_section_11_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const categoryOption_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", categoryOption_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(categoryOption_r7.label);
} }
function DashboardHomeComponent_ng_container_23_section_11_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cityOption_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", cityOption_r8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cityOption_r8);
} }
function DashboardHomeComponent_ng_container_23_section_11_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_23_section_11_article_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 45)(1, "p", 9);
    i0.ɵɵtext(2, "Recommended match");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "app-star-rating", 46);
    i0.ɵɵelementStart(6, "p", 13);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 47)(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "capitalize");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r9 = ctx.ngIf;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r9.provider.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("rating", item_r9.scoreBreakdown.rating)("showValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.reason);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r9.provider.city);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r9.scoreBreakdown.responseTimeMinutes, " mins");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(15, 8, item_r9.scoreBreakdown.availability));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r9.provider.phone);
} }
function DashboardHomeComponent_ng_container_23_section_11_div_33_article_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 50)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 51);
    i0.ɵɵelement(8, "app-star-rating", 46);
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const service_r10 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(service_r10.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(6, 6, service_r10.category), " \u00B7 ", service_r10.city, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("rating", service_r10.rating || 0)("showValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", service_r10.responseTimeMinutes || 0, " mins");
} }
function DashboardHomeComponent_ng_container_23_section_11_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtemplate(1, DashboardHomeComponent_ng_container_23_section_11_div_33_article_1_Template, 11, 8, "article", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.topServices);
} }
function DashboardHomeComponent_ng_container_23_section_11_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1, "No live provider cards are available for this filter yet.");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_23_section_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 29)(2, "div")(3, "p", 9);
    i0.ɵɵtext(4, "Discovery");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6, "Find the fastest local help");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, DashboardHomeComponent_ng_container_23_section_11_p_7_Template, 2, 1, "p", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 31)(9, "label", 32)(10, "span");
    i0.ɵɵtext(11, "Service");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function DashboardHomeComponent_ng_container_23_section_11_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.category, $event) || (ctx_r1.category = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(13, DashboardHomeComponent_ng_container_23_section_11_option_13_Template, 2, 2, "option", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "label", 32)(15, "span");
    i0.ɵɵtext(16, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function DashboardHomeComponent_ng_container_23_section_11_Template_select_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.city, $event) || (ctx_r1.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(18, DashboardHomeComponent_ng_container_23_section_11_option_18_Template, 2, 2, "option", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "button", 35);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_11_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.searchServices()); });
    i0.ɵɵtext(20, "Update results");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(21, DashboardHomeComponent_ng_container_23_section_11_div_21_Template, 2, 0, "div", 36);
    i0.ɵɵelementStart(22, "div", 37);
    i0.ɵɵtemplate(23, DashboardHomeComponent_ng_container_23_section_11_article_23_Template, 18, 10, "article", 38);
    i0.ɵɵelementStart(24, "article", 39)(25, "div", 40)(26, "div")(27, "p", 9);
    i0.ɵɵtext(28, "Top options");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "h4");
    i0.ɵɵtext(30, "High-confidence providers");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "span", 41);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(33, DashboardHomeComponent_ng_container_23_section_11_div_33_Template, 2, 1, "div", 42)(34, DashboardHomeComponent_ng_container_23_section_11_ng_template_34_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const noServices_r11 = i0.ɵɵreference(35);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.providersSource);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.category);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.serviceCategories);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.city);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.cities);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.providersLoading || ctx_r1.servicesLoading || ctx_r1.recommendationLoading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.recommendation);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.topServices.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.topServices.length)("ngIfElse", noServices_r11);
} }
function DashboardHomeComponent_ng_container_23_section_12_div_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_12_div_11_button_1_Template_button_click_0_listener() { const provider_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.selectProvider(provider_r13.id)); });
    i0.ɵɵelementStart(1, "div", 58)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 59)(7, "span", 11);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "app-star-rating", 60);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const provider_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("active", provider_r13.id === ctx_r1.selectedProviderId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(provider_r13.businessName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", provider_r13.ownerName, " \u00B7 ", provider_r13.city, "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("pending", !provider_r13.verified);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(provider_r13.verified ? "Verified" : "Pending");
    i0.ɵɵadvance();
    i0.ɵɵproperty("rating", provider_r13.rating)("showValue", true)("reviewCount", provider_r13.reviewCount);
} }
function DashboardHomeComponent_ng_container_23_section_12_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵtemplate(1, DashboardHomeComponent_ng_container_23_section_12_div_11_button_1_Template, 10, 11, "button", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.providers);
} }
function DashboardHomeComponent_ng_container_23_section_12_article_12_span_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offering_r14 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(offering_r14);
} }
function DashboardHomeComponent_ng_container_23_section_12_article_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 61)(1, "div", 40)(2, "div")(3, "p", 9);
    i0.ɵɵtext(4, "Selected provider");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h4");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 11);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 62)(10, "article", 20)(11, "span");
    i0.ɵɵtext(12, "Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "article", 20)(16, "span");
    i0.ɵɵtext(17, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "article", 20)(22, "span");
    i0.ɵɵtext(23, "Response");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 63)(27, "p")(28, "strong");
    i0.ɵɵtext(29, "Owner:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p")(32, "strong");
    i0.ɵɵtext(33, "Phone:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "p")(36, "strong");
    i0.ɵɵtext(37, "Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "p")(40, "strong");
    i0.ɵɵtext(41, "Address:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 64);
    i0.ɵɵtemplate(44, DashboardHomeComponent_ng_container_23_section_12_article_12_span_44_Template, 2, 1, "span", 65);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const provider_r15 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(provider_r15.businessName);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("pending", !provider_r15.verified);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(provider_r15.verified ? "Verified" : "Pending");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.selectedProviderScore);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 12, provider_r15.availability));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", provider_r15.responseTimeMinutes, " mins");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", provider_r15.ownerName, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r15.mobile, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r15.email || "Not shared", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r15.address || provider_r15.city, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.providerOfferings);
} }
function DashboardHomeComponent_ng_container_23_section_12_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1, "No providers are available for the selected service and city.");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_23_section_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 29)(2, "div")(3, "p", 9);
    i0.ɵɵtext(4, "Provider compare");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6, "Inspect details before you call");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 41);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 52)(10, "article", 39);
    i0.ɵɵtemplate(11, DashboardHomeComponent_ng_container_23_section_12_div_11_Template, 2, 1, "div", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, DashboardHomeComponent_ng_container_23_section_12_article_12_Template, 45, 14, "article", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, DashboardHomeComponent_ng_container_23_section_12_ng_template_13_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noProviders_r16 = i0.ɵɵreference(14);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r1.providers.length, " results");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.providers.length)("ngIfElse", noProviders_r16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedProvider);
} }
function DashboardHomeComponent_ng_container_23_section_13_app_star_rating_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-star-rating", 46);
} if (rf & 2) {
    const provider_r17 = ctx.ngIf;
    i0.ɵɵproperty("rating", provider_r17.rating)("showValue", true);
} }
function DashboardHomeComponent_ng_container_23_section_13_article_8_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 74);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.reviewStatusMessage);
} }
function DashboardHomeComponent_ng_container_23_section_13_article_8_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.reviewErrorMessage);
} }
function DashboardHomeComponent_ng_container_23_section_13_article_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 69)(1, "div", 40)(2, "div")(3, "p", 9);
    i0.ɵɵtext(4, "Selected provider");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h4");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 11);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 13);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, DashboardHomeComponent_ng_container_23_section_13_article_8_p_11_Template, 2, 1, "p", 70)(12, DashboardHomeComponent_ng_container_23_section_13_article_8_p_12_Template, 2, 1, "p", 71);
    i0.ɵɵelementStart(13, "label", 32)(14, "span");
    i0.ɵɵtext(15, "Your rating");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "app-star-rating", 72);
    i0.ɵɵtwoWayListener("ratingChange", function DashboardHomeComponent_ng_container_23_section_13_article_8_Template_app_star_rating_ratingChange_16_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.reviewForm.rating, $event) || (ctx_r1.reviewForm.rating = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "label", 32)(18, "span");
    i0.ɵɵtext(19, "Review");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "textarea", 73);
    i0.ɵɵtwoWayListener("ngModelChange", function DashboardHomeComponent_ng_container_23_section_13_article_8_Template_textarea_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.reviewForm.comment, $event) || (ctx_r1.reviewForm.comment = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "button", 35);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_13_article_8_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.submitReview()); });
    i0.ɵɵtext(22, "Submit rating");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const provider_r19 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(provider_r19.businessName);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("pending", !provider_r19.verified);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(provider_r19.verified ? "Verified" : "Pending");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Share a quick rating for ", provider_r19.businessName, " without leaving the dashboard.");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.reviewStatusMessage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.reviewErrorMessage);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("rating", ctx_r1.reviewForm.rating);
    i0.ɵɵproperty("interactive", true)("showValue", true);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.reviewForm.comment);
} }
function DashboardHomeComponent_ng_container_23_section_13_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 76)(1, "p", 9);
    i0.ɵɵtext(2, "No provider selected");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4, "Pick a provider in the Providers tab first");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 13);
    i0.ɵɵtext(6, "Once you select a provider, you can leave feedback here in a simpler focused form.");
    i0.ɵɵelementEnd()();
} }
function DashboardHomeComponent_ng_container_23_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 29)(2, "div")(3, "p", 9);
    i0.ɵɵtext(4, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6, "Rate the selected provider");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, DashboardHomeComponent_ng_container_23_section_13_app_star_rating_7_Template, 1, 2, "app-star-rating", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, DashboardHomeComponent_ng_container_23_section_13_article_8_Template, 23, 11, "article", 68)(9, DashboardHomeComponent_ng_container_23_section_13_ng_template_9_Template, 7, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feedbackEmpty_r20 = i0.ɵɵreference(10);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedProvider);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedProvider)("ngIfElse", feedbackEmpty_r20);
} }
function DashboardHomeComponent_ng_container_23_section_14_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 88);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_14_button_12_Template_button_click_0_listener() { const preset_r23 = i0.ɵɵrestoreView(_r22).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.applySosPreset(preset_r23)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const preset_r23 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(preset_r23);
} }
function DashboardHomeComponent_ng_container_23_section_14_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 74);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.emergencyStatusMessage);
} }
function DashboardHomeComponent_ng_container_23_section_14_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.emergencyErrorMessage);
} }
function DashboardHomeComponent_ng_container_23_section_14_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 74);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.sosStatusMessage);
} }
function DashboardHomeComponent_ng_container_23_section_14_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.sosErrorMessage);
} }
function DashboardHomeComponent_ng_container_23_section_14_article_38_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r24 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(action_r24);
} }
function DashboardHomeComponent_ng_container_23_section_14_article_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 39)(1, "div", 40)(2, "div")(3, "p", 9);
    i0.ɵɵtext(4, "AI triage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h4");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "uppercase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 41);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "ul", 89);
    i0.ɵɵtemplate(14, DashboardHomeComponent_ng_container_23_section_14_article_38_li_14_Template, 2, 1, "li", 90);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const analysis_r25 = ctx.ngIf;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(7, 4, analysis_r25.priority), " priority");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 6, analysis_r25.suggestedCategory));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(analysis_r25.assistantMessage);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", analysis_r25.recommendedActions);
} }
function DashboardHomeComponent_ng_container_23_section_14_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 76)(1, "p", 9);
    i0.ɵɵtext(2, "Before sending SOS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4, "Share just enough detail to dispatch help fast");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul", 89)(6, "li");
    i0.ɵɵtext(7, "State who needs help and the exact risk.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "li");
    i0.ɵɵtext(9, "Include building, area, or landmark information.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "li");
    i0.ɵɵtext(11, "Mention electricity, water, fire, or medical urgency clearly.");
    i0.ɵɵelementEnd()()();
} }
function DashboardHomeComponent_ng_container_23_section_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 29)(2, "div")(3, "p", 9);
    i0.ɵɵtext(4, "Emergency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6, "SOS response console");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 41);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 77)(10, "article", 39)(11, "div", 78);
    i0.ɵɵtemplate(12, DashboardHomeComponent_ng_container_23_section_14_button_12_Template, 2, 1, "button", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, DashboardHomeComponent_ng_container_23_section_14_p_13_Template, 2, 1, "p", 70)(14, DashboardHomeComponent_ng_container_23_section_14_p_14_Template, 2, 1, "p", 71)(15, DashboardHomeComponent_ng_container_23_section_14_p_15_Template, 2, 1, "p", 70)(16, DashboardHomeComponent_ng_container_23_section_14_p_16_Template, 2, 1, "p", 71);
    i0.ɵɵelementStart(17, "label", 32)(18, "span");
    i0.ɵɵtext(19, "Emergency type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function DashboardHomeComponent_ng_container_23_section_14_Template_select_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.emergencyType, $event) || (ctx_r1.emergencyType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(21, "option", 80);
    i0.ɵɵtext(22, "Ambulance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 81);
    i0.ɵɵtext(24, "Medical support");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 82);
    i0.ɵɵtext(26, "Electrical hazard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 83);
    i0.ɵɵtext(28, "Water or gas issue");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "label", 32)(30, "span");
    i0.ɵɵtext(31, "Situation details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "textarea", 84);
    i0.ɵɵtwoWayListener("ngModelChange", function DashboardHomeComponent_ng_container_23_section_14_Template_textarea_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.emergencyQuery, $event) || (ctx_r1.emergencyQuery = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 85)(34, "button", 35);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_14_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.analyzeEmergency()); });
    i0.ɵɵtext(35, "Analyze now");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 86);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_14_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.sendSosAlert()); });
    i0.ɵɵtext(37, "Send SOS alert");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(38, DashboardHomeComponent_ng_container_23_section_14_article_38_Template, 15, 8, "article", 87)(39, DashboardHomeComponent_ng_container_23_section_14_ng_template_39_Template, 12, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const sosGuidance_r26 = i0.ɵɵreference(40);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.city);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.sosPresets);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.emergencyStatusMessage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.emergencyErrorMessage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sosStatusMessage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sosErrorMessage);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.emergencyType);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.emergencyQuery);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.emergencyAnalysis)("ngIfElse", sosGuidance_r26);
} }
function DashboardHomeComponent_ng_container_23_section_15_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 74);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.adminStatusMessage);
} }
function DashboardHomeComponent_ng_container_23_section_15_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.adminErrorMessage);
} }
function DashboardHomeComponent_ng_container_23_section_15_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1, "Loading super admin workspace...");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_31_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const role_r30 = ctx.$implicit;
    i0.ɵɵproperty("value", role_r30.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(role_r30.label);
} }
function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_31_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 95)(1, "div", 96)(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 11);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "uppercase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 97)(11, "label", 98)(12, "span");
    i0.ɵɵtext(13, "Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "select", 33);
    i0.ɵɵlistener("ngModelChange", function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_31_Template_select_ngModelChange_14_listener($event) { const user_r29 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.updateUserRole(user_r29, $event)); });
    i0.ɵɵtemplate(15, DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_31_option_15_Template, 2, 2, "option", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 85)(17, "button", 16);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_31_Template_button_click_17_listener() { const user_r29 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.updateUserApprovalStatus(user_r29, "approved")); });
    i0.ɵɵtext(18, "Approve");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 16);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_31_Template_button_click_19_listener() { const user_r29 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.updateUserApprovalStatus(user_r29, "pending")); });
    i0.ɵɵtext(20, "Set pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 86);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_31_Template_button_click_21_listener() { const user_r29 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.updateUserApprovalStatus(user_r29, "suspended")); });
    i0.ɵɵtext(22, "Suspend");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const user_r29 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(user_r29.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", user_r29.mobile, " \u00B7 ", user_r29.email || "No email", "");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("pending", user_r29.approvalStatus !== "approved");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 8, user_r29.approvalStatus));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", user_r29.role);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.manageableRoles);
} }
function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_40_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_40_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const provider_r32 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setProviderVerification(provider_r32, true)); });
    i0.ɵɵtext(1, "Approve provider");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_40_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 86);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_40_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33); const provider_r32 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setProviderVerification(provider_r32, false)); });
    i0.ɵɵtext(1, "Move to pending");
    i0.ɵɵelementEnd();
} }
function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 95)(1, "div", 96)(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "app-star-rating", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 85);
    i0.ɵɵtemplate(10, DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_40_button_10_Template, 2, 0, "button", 99)(11, DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_40_button_11_Template, 2, 0, "button", 100);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const provider_r32 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(provider_r32.businessName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(7, 8, provider_r32.category), " \u00B7 ", provider_r32.city, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("rating", provider_r32.rating)("showValue", true)("reviewCount", provider_r32.reviewCount);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !provider_r32.verified);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", provider_r32.verified);
} }
function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_49_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 95)(1, "div", 96)(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 11);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "uppercase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p", 13);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 85)(14, "button", 16);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_49_Template_button_click_14_listener() { const alert_r35 = i0.ɵɵrestoreView(_r34).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setAlertStatus(alert_r35, "dispatching")); });
    i0.ɵɵtext(15, "Dispatching");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 35);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_49_Template_button_click_16_listener() { const alert_r35 = i0.ɵɵrestoreView(_r34).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setAlertStatus(alert_r35, "resolved")); });
    i0.ɵɵtext(17, "Resolve");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const alert_r35 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(alert_r35.userName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", alert_r35.city || "Location pending", " \u00B7 ", i0.ɵɵpipeBind1(7, 7, alert_r35.emergencyType), "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("pending", alert_r35.status !== "resolved");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 9, alert_r35.status));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(alert_r35.description || "No incident note provided.");
} }
function DashboardHomeComponent_ng_container_23_section_15_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 91)(2, "article", 20)(3, "span");
    i0.ɵɵtext(4, "Users");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "article", 20)(8, "span");
    i0.ɵɵtext(9, "Pending users");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "article", 20)(13, "span");
    i0.ɵɵtext(14, "Pending providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "article", 20)(18, "span");
    i0.ɵɵtext(19, "Open SOS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 92)(23, "article", 39)(24, "div", 40)(25, "div")(26, "p", 9);
    i0.ɵɵtext(27, "Users");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "h4");
    i0.ɵɵtext(29, "Access control");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 93);
    i0.ɵɵtemplate(31, DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_31_Template, 23, 10, "article", 94);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "article", 39)(33, "div", 40)(34, "div")(35, "p", 9);
    i0.ɵɵtext(36, "Providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "h4");
    i0.ɵɵtext(38, "Approval queue");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div", 93);
    i0.ɵɵtemplate(40, DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_40_Template, 12, 10, "article", 94);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "article", 39)(42, "div", 40)(43, "div")(44, "p", 9);
    i0.ɵɵtext(45, "SOS queue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "h4");
    i0.ɵɵtext(47, "Dispatch status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(48, "div", 93);
    i0.ɵɵtemplate(49, DashboardHomeComponent_ng_container_23_section_15_ng_container_12_article_49_Template, 18, 11, "article", 94);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r36 = ctx.ngIf;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(data_r36.metrics.userCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r36.metrics.pendingUserCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r36.metrics.pendingProviderCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r36.metrics.openSosCount);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", data_r36.users);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", data_r36.providers);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", data_r36.alerts);
} }
function DashboardHomeComponent_ng_container_23_section_15_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 29)(2, "div")(3, "p", 9);
    i0.ɵɵtext(4, "Super Admin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6, "Approve and manage people, providers, and alerts");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 16);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_section_15_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.loadAdminOverview()); });
    i0.ɵɵtext(8, "Refresh admin data");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, DashboardHomeComponent_ng_container_23_section_15_p_9_Template, 2, 1, "p", 70)(10, DashboardHomeComponent_ng_container_23_section_15_p_10_Template, 2, 1, "p", 71)(11, DashboardHomeComponent_ng_container_23_section_15_p_11_Template, 2, 0, "p", 30)(12, DashboardHomeComponent_ng_container_23_section_15_ng_container_12_Template, 50, 7, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.adminStatusMessage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminErrorMessage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminOverview);
} }
function DashboardHomeComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 22)(2, "button", 23);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setUserTab("discover")); });
    i0.ɵɵtext(3, "Search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 23);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setUserTab("providers")); });
    i0.ɵɵtext(5, "Providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 23);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setUserTab("feedback")); });
    i0.ɵɵtext(7, "Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 23);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_container_23_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setUserTab("sos")); });
    i0.ɵɵtext(9, "SOS");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, DashboardHomeComponent_ng_container_23_button_10_Template, 3, 3, "button", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, DashboardHomeComponent_ng_container_23_section_11_Template, 36, 10, "section", 25)(12, DashboardHomeComponent_ng_container_23_section_12_Template, 15, 4, "section", 25)(13, DashboardHomeComponent_ng_container_23_section_13_Template, 11, 3, "section", 25)(14, DashboardHomeComponent_ng_container_23_section_14_Template, 41, 10, "section", 25)(15, DashboardHomeComponent_ng_container_23_section_15_Template, 13, 4, "section", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.activeUserTab === "discover");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.activeUserTab === "providers");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.activeUserTab === "feedback");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.activeUserTab === "sos");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isSuperAdminView);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.activeUserTab === "discover");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.activeUserTab === "providers");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.activeUserTab === "feedback");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.activeUserTab === "sos");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.activeUserTab === "admin" && ctx_r1.isSuperAdminView);
} }
function DashboardHomeComponent_ng_template_24_section_5_div_1_span_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offering_r38 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(offering_r38);
} }
function DashboardHomeComponent_ng_template_24_section_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "article", 61)(2, "div", 40)(3, "div")(4, "p", 9);
    i0.ɵɵtext(5, "Business profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h4");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 11);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 62)(11, "article", 20)(12, "span");
    i0.ɵɵtext(13, "Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "article", 20)(17, "span");
    i0.ɵɵtext(18, "Rating");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "article", 20)(22, "span");
    i0.ɵɵtext(23, "Reviews");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 63)(27, "p")(28, "strong");
    i0.ɵɵtext(29, "Category:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30);
    i0.ɵɵpipe(31, "capitalize");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "p")(33, "strong");
    i0.ɵɵtext(34, "City:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p")(37, "strong");
    i0.ɵɵtext(38, "Phone:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "p")(41, "strong");
    i0.ɵɵtext(42, "Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "p")(45, "strong");
    i0.ɵɵtext(46, "Address:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "p")(49, "strong");
    i0.ɵɵtext(50, "Availability:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(51);
    i0.ɵɵpipe(52, "capitalize");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "div", 64);
    i0.ɵɵtemplate(54, DashboardHomeComponent_ng_template_24_section_5_div_1_span_54_Template, 2, 1, "span", 65);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const provider_r39 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(provider_r39.businessName);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("pending", !provider_r39.verified);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(provider_r39.verified ? "Verified" : "Pending approval");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.providerCompletionScore, "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(provider_r39.rating);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(provider_r39.reviewCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(31, 14, provider_r39.category), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", provider_r39.city, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r39.mobile, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r39.email || "Not shared", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", provider_r39.address || "Not added", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(52, 16, provider_r39.availability), "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.providerAudienceOfferings);
} }
function DashboardHomeComponent_ng_template_24_section_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 61)(1, "div", 40)(2, "div")(3, "p", 9);
    i0.ɵɵtext(4, "Customer-facing view");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h4");
    i0.ɵɵtext(6, "How local users will see your listing");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(7, "app-star-rating", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 62)(9, "article", 20)(10, "span");
    i0.ɵɵtext(11, "Response time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "article", 20)(15, "span");
    i0.ɵɵtext(16, "Service city");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "article", 20)(20, "span");
    i0.ɵɵtext(21, "Verification");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "p", 13);
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "capitalize");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const provider_r39 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("rating", provider_r39.rating)("showValue", true)("reviewCount", provider_r39.reviewCount);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", provider_r39.responseTimeMinutes, " mins");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(provider_r39.city);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(provider_r39.verified ? "Approved" : "Pending");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Users filtering for ", i0.ɵɵpipeBind1(26, 8, provider_r39.category), " in ", provider_r39.city, " will see your business summary, response time, and reviews in this format.");
} }
function DashboardHomeComponent_ng_template_24_section_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 28);
    i0.ɵɵtemplate(1, DashboardHomeComponent_ng_template_24_section_5_div_1_Template, 55, 18, "div", 102)(2, DashboardHomeComponent_ng_template_24_section_5_ng_template_2_Template, 27, 10, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const visibilityTab_r40 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.activeProviderTab === "overview")("ngIfElse", visibilityTab_r40);
} }
function DashboardHomeComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 101)(1, "button", 23);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_template_24_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r37); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setProviderTab("overview")); });
    i0.ɵɵtext(2, "Overview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 23);
    i0.ɵɵlistener("click", function DashboardHomeComponent_ng_template_24_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r37); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setProviderTab("visibility")); });
    i0.ɵɵtext(4, "Visibility");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, DashboardHomeComponent_ng_template_24_section_5_Template, 4, 2, "section", 25);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", ctx_r1.activeProviderTab === "overview");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.activeProviderTab === "visibility");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.providerProfile);
} }
const CITY_COORDINATES = {
    Ernakulam: { latitude: 9.9816, longitude: 76.2999 },
    Kochi: { latitude: 9.9312, longitude: 76.2673 },
    Thrissur: { latitude: 10.5276, longitude: 76.2144 },
    Kozhikode: { latitude: 11.2588, longitude: 75.7804 }
};
export class DashboardHomeComponent {
    constructor(localServices, sessionService) {
        this.localServices = localServices;
        this.sessionService = sessionService;
        this.cities = KERALA_CITIES;
        this.serviceCategories = SERVICE_CATEGORIES;
        this.manageableRoles = [
            { value: 'user', label: 'User' },
            { value: 'provider', label: 'Provider' },
            { value: 'admin', label: 'Admin' },
            { value: 'super_admin', label: 'Super Admin' }
        ];
        this.sosPresets = [
            'Severe chest pain and trouble breathing',
            'Water leak near electrical panel',
            'Need urgent medicine delivery for senior citizen',
            'Vehicle accident with possible injury'
        ];
        this.activeUserTab = 'discover';
        this.activeProviderTab = 'overview';
        this.backendStatus = 'Checking...';
        this.backendMode = '';
        this.isUsingDemoData = false;
        this.category = FRONTEND_DEFAULTS.category;
        this.city = FRONTEND_DEFAULTS.city;
        this.providersLoading = false;
        this.servicesLoading = false;
        this.recommendationLoading = false;
        this.emergencyLoading = false;
        this.sosLoading = false;
        this.services = [];
        this.servicesSource = '';
        this.servicesLoaded = false;
        this.recommendation = null;
        this.recommendationSource = '';
        this.recommendationMessage = '';
        this.currentUserName = '';
        this.currentUserRole = '';
        this.currentUserId = '';
        this.currentUserPhone = '';
        this.currentProviderBusiness = '';
        this.selectedProviderId = '';
        this.providers = [];
        this.providersSource = '';
        this.providerProfile = null;
        this.reviewStatusMessage = '';
        this.reviewErrorMessage = '';
        this.reviewForm = {
            rating: 5,
            comment: ''
        };
        this.emergencyQuery = '';
        this.emergencyType = 'ambulance';
        this.emergencyAnalysis = null;
        this.emergencyStatusMessage = '';
        this.emergencyErrorMessage = '';
        this.sosStatusMessage = '';
        this.sosErrorMessage = '';
        this.adminOverview = null;
        this.adminLoading = false;
        this.adminStatusMessage = '';
        this.adminErrorMessage = '';
    }
    ngOnInit() {
        const session = this.sessionService.session;
        this.currentUserId = session?.user.id ?? `guest-${Date.now()}`;
        this.currentUserName = session?.user.fullName ?? 'Guest User';
        this.currentUserPhone = session?.user.mobile ?? '';
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
        if (this.isSuperAdminView) {
            this.loadAdminOverview();
        }
    }
    searchServices() {
        this.recommendationMessage = '';
        this.providersLoading = true;
        this.servicesLoading = true;
        this.recommendationLoading = true;
        this.localServices.searchMarketplace(this.category, this.city).subscribe({
            next: (res) => {
                const liveProviders = res.data.map((provider) => this.mapMarketplaceProviderToProviderProfile(provider));
                const liveServices = res.data.map((provider) => this.mapMarketplaceProviderToServiceItem(provider));
                this.providers = liveProviders;
                this.providersSource = res.source;
                this.services = liveServices;
                this.servicesSource = res.source;
                this.servicesLoaded = true;
                this.recommendation = this.buildRecommendationFromServices(liveServices);
                this.recommendationSource = res.source;
                this.recommendationMessage = liveServices.length ? 'Showing live marketplace results from Google Places.' : 'No live marketplace providers found for this filter.';
                this.isUsingDemoData = false;
                this.ensureSelectedProvider();
                this.providersLoading = false;
                this.servicesLoading = false;
                this.recommendationLoading = false;
            },
            error: () => {
                this.loadRecommendation();
                this.loadProviders();
                this.localServices.getServices(this.category, this.city).subscribe({
                    next: (fallbackRes) => {
                        this.services = fallbackRes.data;
                        this.servicesSource = fallbackRes.source;
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
                this.providers = DEMO_PROVIDERS.filter((provider) => {
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
    submitReview() {
        const provider = this.selectedProvider;
        this.reviewStatusMessage = '';
        this.reviewErrorMessage = '';
        if (!provider) {
            this.reviewErrorMessage = 'Select a provider before submitting a review.';
            return;
        }
        this.localServices
            .createProviderReview(provider.id, {
            userId: this.currentUserId,
            userName: this.currentUserName,
            rating: this.reviewForm.rating,
            comment: this.reviewForm.comment.trim()
        })
            .subscribe({
            next: (response) => {
                this.reviewStatusMessage = response.message;
                this.providers = this.providers.map((entry) => (entry.id === provider.id ? response.data.provider : entry));
                this.reviewForm = { rating: 5, comment: '' };
            },
            error: (error) => {
                this.reviewErrorMessage = error.message || 'Unable to submit review';
            }
        });
    }
    analyzeEmergency() {
        this.emergencyStatusMessage = '';
        this.emergencyErrorMessage = '';
        this.sosStatusMessage = '';
        this.sosErrorMessage = '';
        if (!this.emergencyQuery.trim()) {
            this.emergencyErrorMessage = 'Describe the emergency first.';
            return;
        }
        this.emergencyLoading = true;
        this.localServices.analyzeEmergency(this.emergencyQuery.trim(), this.emergencyType).subscribe({
            next: (response) => {
                this.emergencyAnalysis = response.data;
                this.emergencyStatusMessage = response.data.assistantMessage;
                this.emergencyLoading = false;
            },
            error: (error) => {
                this.emergencyErrorMessage = error.message || 'Unable to analyze this emergency';
                this.emergencyLoading = false;
            }
        });
    }
    sendSosAlert() {
        this.sosStatusMessage = '';
        this.sosErrorMessage = '';
        if (!this.emergencyQuery.trim()) {
            this.sosErrorMessage = 'Describe the emergency before sending SOS.';
            return;
        }
        const coords = CITY_COORDINATES[this.city] ?? CITY_COORDINATES['Ernakulam'];
        const payload = {
            userId: this.currentUserId,
            userName: this.currentUserName,
            phone: this.currentUserPhone || 'N/A',
            city: this.city,
            emergencyType: this.emergencyType,
            description: this.emergencyQuery.trim(),
            latitude: coords.latitude,
            longitude: coords.longitude
        };
        this.sosLoading = true;
        this.localServices.triggerSos(payload).subscribe({
            next: (response) => {
                this.sosStatusMessage = response.message;
                this.sosLoading = false;
            },
            error: (error) => {
                this.sosErrorMessage = error.message || 'Unable to trigger SOS';
                this.sosLoading = false;
            }
        });
    }
    loadAdminOverview() {
        if (!this.isSuperAdminView) {
            return;
        }
        this.adminLoading = true;
        this.adminErrorMessage = '';
        this.localServices.getAdminOverview().subscribe({
            next: (response) => {
                this.adminOverview = response.data;
                this.adminLoading = false;
            },
            error: (error) => {
                this.adminErrorMessage = error.message || 'Unable to load super admin data';
                this.adminLoading = false;
            }
        });
    }
    updateUserApprovalStatus(user, approvalStatus) {
        this.adminStatusMessage = '';
        this.adminErrorMessage = '';
        this.localServices.updateUserApprovalStatus(user.id, approvalStatus).subscribe({
            next: (response) => {
                this.adminStatusMessage = response.message;
                this.syncAdminUser(response.data);
            },
            error: (error) => {
                this.adminErrorMessage = error.message || 'Unable to update user status';
            }
        });
    }
    updateUserRole(user, role) {
        if (!['user', 'provider', 'admin', 'super_admin'].includes(role)) {
            return;
        }
        this.adminStatusMessage = '';
        this.adminErrorMessage = '';
        this.localServices.updateUserRole(user.id, role).subscribe({
            next: (response) => {
                this.adminStatusMessage = response.message;
                this.syncAdminUser(response.data);
            },
            error: (error) => {
                this.adminErrorMessage = error.message || 'Unable to update user role';
            }
        });
    }
    setProviderVerification(provider, verified) {
        this.adminStatusMessage = '';
        this.adminErrorMessage = '';
        this.localServices.updateProviderVerification(provider.id, verified).subscribe({
            next: (response) => {
                this.adminStatusMessage = response.message;
                if (this.adminOverview) {
                    this.adminOverview.providers = this.adminOverview.providers.map((entry) => (entry.id === provider.id ? response.data : entry));
                    this.refreshAdminMetrics();
                }
            },
            error: (error) => {
                this.adminErrorMessage = error.message || 'Unable to update provider status';
            }
        });
    }
    setAlertStatus(alert, status) {
        this.adminStatusMessage = '';
        this.adminErrorMessage = '';
        this.localServices.updateSosStatus(alert.id, status).subscribe({
            next: (response) => {
                this.adminStatusMessage = response.message;
                if (this.adminOverview) {
                    this.adminOverview.alerts = this.adminOverview.alerts.map((entry) => (entry.id === alert.id ? response.data : entry));
                    this.refreshAdminMetrics();
                }
            },
            error: (error) => {
                this.adminErrorMessage = error.message || 'Unable to update SOS status';
            }
        });
    }
    applySosPreset(preset) {
        this.emergencyQuery = preset;
    }
    refreshDashboard() {
        this.searchServices();
        if (this.isSuperAdminView) {
            this.loadAdminOverview();
        }
    }
    get isProviderView() {
        return this.sessionService.isProvider;
    }
    get isSuperAdminView() {
        return this.sessionService.isSuperAdmin;
    }
    get isAdminView() {
        return this.sessionService.isAdmin;
    }
    get isUserView() {
        return !this.isProviderView;
    }
    get topServices() {
        return [...this.services].sort((left, right) => this.scoreService(right) - this.scoreService(left)).slice(0, 4);
    }
    get pendingProvidersCount() {
        return this.adminOverview?.metrics.pendingProviderCount ?? 0;
    }
    get pendingUsersCount() {
        return this.adminOverview?.metrics.pendingUserCount ?? 0;
    }
    get openSosCount() {
        return this.adminOverview?.metrics.openSosCount ?? 0;
    }
    get selectedProvider() {
        return this.providers.find((provider) => provider.id === this.selectedProviderId) ?? this.providers[0] ?? null;
    }
    get verifiedProvidersCount() {
        return this.providers.filter((provider) => provider.verified).length;
    }
    get availableProvidersCount() {
        return this.providers.filter((provider) => provider.availability === 'available').length;
    }
    get averageProviderRating() {
        if (!this.providers.length) {
            return '0.0';
        }
        const total = this.providers.reduce((sum, provider) => sum + (provider.rating || 0), 0);
        return (total / this.providers.length).toFixed(1);
    }
    get fastestResponseMinutes() {
        if (!this.providers.length) {
            return null;
        }
        return this.providers.reduce((fastest, provider) => Math.min(fastest, provider.responseTimeMinutes || fastest), this.providers[0].responseTimeMinutes || 0);
    }
    get selectedProviderScore() {
        const provider = this.selectedProvider;
        if (!provider) {
            return 0;
        }
        return Math.round(provider.rating * 20 + (provider.verified ? 8 : 0) + (provider.availability === 'available' ? 4 : 0));
    }
    get providerCompletionScore() {
        if (!this.providerProfile) {
            return 0;
        }
        const fields = [
            this.providerProfile.businessName,
            this.providerProfile.mobile,
            this.providerProfile.city,
            this.providerProfile.address,
            this.providerProfile.email
        ];
        const completed = fields.filter((field) => Boolean(field && field.trim())).length;
        return Math.round((completed / fields.length) * 100);
    }
    get providerOfferings() {
        const provider = this.selectedProvider;
        return provider ? this.getOfferingsForCategory(provider.category) : [];
    }
    get providerAudienceOfferings() {
        return this.providerProfile ? this.getOfferingsForCategory(this.providerProfile.category) : [];
    }
    get availabilityAccent() {
        const availability = this.selectedProvider?.availability ?? this.providerProfile?.availability;
        switch (availability) {
            case 'available':
                return 'available';
            case 'busy':
                return 'busy';
            default:
                return 'pending';
        }
    }
    setUserTab(tab) {
        this.activeUserTab = tab;
        if (tab === 'admin' && this.isSuperAdminView && !this.adminOverview && !this.adminLoading) {
            this.loadAdminOverview();
        }
    }
    setProviderTab(tab) {
        this.activeProviderTab = tab;
    }
    getDemoServices() {
        const category = this.category.toLowerCase();
        const city = this.city.trim().toLowerCase();
        return [...DEMO_SERVICES].filter((service, index, list) => {
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
        return this.buildRecommendationFromServices(this.getDemoServices());
    }
    buildRecommendationFromServices(services) {
        const ranked = [...services].sort((left, right) => this.scoreService(right) - this.scoreService(left));
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
    mapMarketplaceProviderToProviderProfile(provider) {
        const createdAt = new Date().toISOString();
        return {
            id: provider.id,
            userId: provider.id,
            businessName: provider.name,
            ownerName: provider.name,
            mobile: provider.phone || 'Not shared',
            email: '',
            category: provider.category,
            city: provider.city || this.city,
            address: provider.address || provider.city || this.city,
            availability: provider.openNow === false ? 'busy' : 'available',
            experienceYears: 1,
            verified: provider.verified,
            rating: provider.rating ?? 4.2,
            reviewCount: provider.userRatingCount ?? 0,
            responseTimeMinutes: provider.openNow === false ? 18 : 10,
            highResponseRate: (provider.rating ?? 0) >= 4.4,
            createdAt
        };
    }
    mapMarketplaceProviderToServiceItem(provider) {
        return {
            _id: provider.id,
            category: provider.category,
            name: provider.name,
            phone: provider.phone || 'Not shared',
            city: provider.city || this.city,
            verified: provider.verified,
            rating: provider.rating ?? 4.2,
            reviewCount: provider.userRatingCount ?? 0,
            responseTimeMinutes: provider.openNow === false ? 18 : 10,
            availability: provider.openNow === false ? 'busy' : 'available',
            highResponseRate: (provider.rating ?? 0) >= 4.4
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
        return CATEGORY_OFFERINGS[category] ?? ['General local support'];
    }
    syncAdminUser(user) {
        if (!this.adminOverview) {
            return;
        }
        this.adminOverview.users = this.adminOverview.users.map((entry) => (entry.id === user.id ? user : entry));
        this.refreshAdminMetrics();
    }
    refreshAdminMetrics() {
        if (!this.adminOverview) {
            return;
        }
        const users = this.adminOverview.users;
        const providers = this.adminOverview.providers;
        const alerts = this.adminOverview.alerts;
        const reviews = this.adminOverview.reviews;
        this.adminOverview.metrics = {
            userCount: users.length,
            activeUserCount: users.filter((user) => user.isActive && user.approvalStatus !== 'suspended').length,
            pendingUserCount: users.filter((user) => user.approvalStatus === 'pending').length,
            providerCount: providers.length,
            verifiedProviderCount: providers.filter((provider) => provider.verified).length,
            pendingProviderCount: providers.filter((provider) => !provider.verified).length,
            reviewCount: reviews.length,
            openSosCount: alerts.filter((alert) => ['queued', 'dispatching'].includes(alert.status)).length
        };
    }
    static { this.ɵfac = function DashboardHomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardHomeComponent)(i0.ɵɵdirectiveInject(i1.LocalServicesService), i0.ɵɵdirectiveInject(i2.SessionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardHomeComponent, selectors: [["app-dashboard-home"]], decls: 26, vars: 12, consts: [["providerDashboard", ""], ["noServices", ""], ["noProviders", ""], ["feedbackEmpty", ""], ["sosGuidance", ""], ["visibilityTab", ""], ["title", "Dashboard", "subtitle", "Local discovery, SOS response, and role-aware operations in a simpler workspace."], [1, "hero-card"], [1, "hero-copy"], [1, "eyebrow"], [1, "hero-meta"], [1, "status-badge"], [4, "ngIf"], [1, "muted"], [1, "hero-actions"], [1, "status-note"], ["type", "button", 1, "secondary-action", 3, "click"], ["class", "hero-stats", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "hero-stats"], [1, "metric-card"], ["class", "metric-card", 4, "ngIf"], ["role", "tablist", "aria-label", "Dashboard sections", 1, "tab-strip"], ["type", "button", 1, "tab-button", 3, "click"], ["type", "button", "class", "tab-button", 3, "active", "click", 4, "ngIf"], ["class", "panel section-panel", 4, "ngIf"], ["class", "tab-count", 4, "ngIf"], [1, "tab-count"], [1, "panel", "section-panel"], [1, "section-head"], ["class", "muted", 4, "ngIf"], [1, "filter-grid"], [1, "field"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], ["class", "loader-line", 4, "ngIf"], [1, "discover-layout"], ["class", "panel inset-panel recommendation-card", 4, "ngIf"], [1, "panel", "inset-panel"], [1, "section-head", "compact-head"], [1, "count-pill"], ["class", "service-stack", 4, "ngIf", "ngIfElse"], [3, "value"], [1, "loader-line"], [1, "panel", "inset-panel", "recommendation-card"], [3, "rating", "showValue"], [1, "pill-row"], [1, "service-stack"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "service-card"], [1, "service-meta"], [1, "providers-layout"], ["class", "provider-stack", 4, "ngIf", "ngIfElse"], ["class", "panel inset-panel detail-panel", 4, "ngIf"], [1, "provider-stack"], ["type", "button", "class", "provider-card", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "provider-card", 3, "click"], [1, "provider-copy"], [1, "provider-meta"], [3, "rating", "showValue", "reviewCount"], [1, "panel", "inset-panel", "detail-panel"], [1, "detail-stats"], [1, "detail-list"], [1, "chip-grid"], ["class", "chip", 4, "ngFor", "ngForOf"], [1, "chip"], [3, "rating", "showValue", 4, "ngIf"], ["class", "panel inset-panel feedback-panel", 4, "ngIf", "ngIfElse"], [1, "panel", "inset-panel", "feedback-panel"], ["class", "status-copy", 4, "ngIf"], ["class", "error-copy", 4, "ngIf"], [3, "ratingChange", "rating", "interactive", "showValue"], ["rows", "4", "placeholder", "Share punctuality, quality, and communication details.", 3, "ngModelChange", "ngModel"], [1, "status-copy"], [1, "error-copy"], [1, "panel", "inset-panel", "guidance-card"], [1, "sos-layout"], [1, "preset-list"], ["type", "button", "class", "preset-chip", 3, "click", 4, "ngFor", "ngForOf"], ["value", "ambulance"], ["value", "medical_store"], ["value", "electrician"], ["value", "plumber"], ["rows", "5", "placeholder", "Describe the location, symptoms, risk, and who needs help.", 3, "ngModelChange", "ngModel"], [1, "action-row"], ["type", "button", 1, "danger-button", 3, "click"], ["class", "panel inset-panel", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "preset-chip", 3, "click"], [1, "analysis-list"], [4, "ngFor", "ngForOf"], [1, "admin-metrics"], [1, "admin-layout"], [1, "admin-stack"], ["class", "admin-card", 4, "ngFor", "ngForOf"], [1, "admin-card"], [1, "admin-card-head"], [1, "admin-controls"], [1, "field", "compact-field"], ["type", "button", "class", "secondary-action", 3, "click", 4, "ngIf"], ["type", "button", "class", "danger-button", 3, "click", 4, "ngIf"], ["role", "tablist", "aria-label", "Provider sections", 1, "tab-strip"], ["class", "providers-layout", 4, "ngIf", "ngIfElse"]], template: function DashboardHomeComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "app-page-shell", 6)(1, "section", 7)(2, "div", 8)(3, "p", 9);
            i0.ɵɵtext(4, "Workspace overview");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h3");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 10)(8, "span", 11);
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "uppercase");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, DashboardHomeComponent_span_13_Template, 2, 0, "span", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p", 13);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 14)(17, "p", 15);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 16);
            i0.ɵɵlistener("click", function DashboardHomeComponent_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.refreshDashboard()); });
            i0.ɵɵtext(20, "Refresh workspace");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(21, DashboardHomeComponent_div_21_Template, 17, 4, "div", 17)(22, DashboardHomeComponent_div_22_Template, 16, 3, "div", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, DashboardHomeComponent_ng_container_23_Template, 16, 14, "ng-container", 18)(24, DashboardHomeComponent_ng_template_24_Template, 6, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const providerDashboard_r41 = i0.ɵɵreference(25);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.currentUserName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 10, ctx.currentUserRole));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.backendMode);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isUsingDemoData);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.isProviderView ? "Manage your business profile and visibility." : "Search providers quickly, compare options, and trigger emergency help without leaving the dashboard.", " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.backendStatus);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.isUserView);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isProviderView && ctx.providerProfile);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isUserView)("ngIfElse", providerDashboard_r41);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.PageShellComponent, i5.StarRatingComponent, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.DefaultValueAccessor, i6.SelectControlValueAccessor, i6.NgControlStatus, i6.NgModel, i3.UpperCasePipe, i7.CapitalizePipe], styles: [".hero-card[_ngcontent-%COMP%], \n.hero-meta[_ngcontent-%COMP%], \n.hero-actions[_ngcontent-%COMP%], \n.hero-stats[_ngcontent-%COMP%], \n.tab-strip[_ngcontent-%COMP%], \n.filter-grid[_ngcontent-%COMP%], \n.pill-row[_ngcontent-%COMP%], \n.service-card[_ngcontent-%COMP%], \n.provider-card[_ngcontent-%COMP%], \n.provider-meta[_ngcontent-%COMP%], \n.section-head[_ngcontent-%COMP%], \n.action-row[_ngcontent-%COMP%], \n.admin-card-head[_ngcontent-%COMP%], \n.admin-controls[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.discover-layout[_ngcontent-%COMP%], \n.providers-layout[_ngcontent-%COMP%], \n.sos-layout[_ngcontent-%COMP%], \n.admin-layout[_ngcontent-%COMP%], \n.hero-stats[_ngcontent-%COMP%], \n.detail-stats[_ngcontent-%COMP%], \n.admin-metrics[_ngcontent-%COMP%], \n.chip-grid[_ngcontent-%COMP%], \n.provider-stack[_ngcontent-%COMP%], \n.service-stack[_ngcontent-%COMP%], \n.admin-stack[_ngcontent-%COMP%], \n.preset-list[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.section-panel[_ngcontent-%COMP%], \n.inset-panel[_ngcontent-%COMP%] {\n  border: 1px solid rgba(154, 177, 214, 0.14);\n  background: rgba(10, 17, 31, 0.78);\n}\n\n.hero-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) auto;\n  gap: 1.25rem 1.5rem;\n  margin-bottom: 1.25rem;\n  padding: 1.5rem;\n  border-radius: 28px;\n  box-shadow: var(--shadow-card);\n}\n\n.hero-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.section-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.section-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ink-strong);\n  letter-spacing: -0.03em;\n}\n\n.hero-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: clamp(1.45rem, 3vw, 2rem);\n}\n\n.hero-meta[_ngcontent-%COMP%] {\n  gap: 0.65rem;\n  flex-wrap: wrap;\n  margin: 0.85rem 0 0.65rem;\n  color: var(--ink-soft);\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.85rem;\n}\n\n.status-note[_ngcontent-%COMP%], \n.muted[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ink-soft);\n}\n\n.hero-stats[_ngcontent-%COMP%], \n.detail-stats[_ngcontent-%COMP%], \n.admin-metrics[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.8rem;\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  padding: 0.95rem 1rem;\n  border-radius: 18px;\n  border: 1px solid rgba(154, 177, 214, 0.14);\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.35rem;\n  color: var(--ink-soft);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink-strong);\n  font-size: 1.15rem;\n}\n\n.tab-strip[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n\n.tab-button[_ngcontent-%COMP%], \n.secondary-action[_ngcontent-%COMP%], \n.preset-chip[_ngcontent-%COMP%] {\n  min-height: 44px;\n  border-radius: 999px;\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--ink-strong);\n  box-shadow: none;\n}\n\n.tab-button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.75rem 1rem;\n}\n\n.tab-button.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  border-color: transparent;\n}\n\n.tab-count[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  display: inline-flex;\n  min-width: 1.45rem;\n  min-height: 1.45rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.16);\n  font-size: 0.72rem;\n}\n\n.section-panel[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 24px;\n  margin-bottom: 1rem;\n}\n\n.panel[_ngcontent-%COMP%] {\n  border-radius: 22px;\n}\n\n.inset-panel[_ngcontent-%COMP%] {\n  padding: 1.15rem;\n  border-radius: 20px;\n}\n\n.section-head[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n\n.compact-head[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  color: var(--brand-warm);\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.filter-grid[_ngcontent-%COMP%] {\n  gap: 0.85rem;\n  flex-wrap: wrap;\n  align-items: end;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  min-width: 190px;\n  flex: 1 1 220px;\n}\n\n.compact-field[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\nselect[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%] {\n  border: 1px solid rgba(106, 130, 160, 0.22);\n  border-radius: 14px;\n}\n\nselect[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--ink-strong);\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  border-color: transparent;\n  cursor: pointer;\n  font-weight: 700;\n}\n\n.secondary-action[_ngcontent-%COMP%], \n.preset-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--ink-strong);\n  border-color: rgba(154, 177, 214, 0.18);\n}\n\n.danger-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #b91c1c, #ef4444);\n}\n\n.discover-layout[_ngcontent-%COMP%], \n.providers-layout[_ngcontent-%COMP%], \n.sos-layout[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.recommendation-card[_ngcontent-%COMP%] {\n  align-content: start;\n}\n\n.pill-row[_ngcontent-%COMP%] {\n  gap: 0.55rem;\n  flex-wrap: wrap;\n  margin-top: 0.85rem;\n}\n\n.pill-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.count-pill[_ngcontent-%COMP%], \n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.4rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.pill-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.count-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--ink-soft);\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #99f6ba;\n}\n\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.16);\n  color: #ffd27a;\n}\n\n.service-stack[_ngcontent-%COMP%], \n.provider-stack[_ngcontent-%COMP%], \n.admin-stack[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n}\n\n.service-card[_ngcontent-%COMP%], \n.provider-card[_ngcontent-%COMP%], \n.admin-card[_ngcontent-%COMP%] {\n  padding: 0.95rem 1rem;\n  border-radius: 16px;\n  border: 1px solid rgba(154, 177, 214, 0.14);\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.service-card[_ngcontent-%COMP%], \n.provider-card[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.provider-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.admin-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.detail-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  color: var(--ink-soft);\n}\n\n.service-meta[_ngcontent-%COMP%], \n.provider-meta[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n  justify-items: end;\n}\n\n.provider-card[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  box-shadow: none;\n}\n\n.provider-card.active[_ngcontent-%COMP%] {\n  border-color: rgba(14, 165, 233, 0.3);\n  background: rgba(14, 165, 233, 0.1);\n}\n\n.detail-panel[_ngcontent-%COMP%] {\n  align-content: start;\n}\n\n.detail-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.7rem 1rem;\n  margin: 1rem 0;\n}\n\n.chip-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.65rem;\n}\n\n.chip[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.8rem;\n  text-align: center;\n  border-radius: 999px;\n  background: rgba(31, 182, 255, 0.12);\n  color: var(--ink-strong);\n  font-weight: 600;\n}\n\n.feedback-block[_ngcontent-%COMP%] {\n  margin-top: 1.1rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(154, 177, 214, 0.12);\n}\n\n.preset-list[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n}\n\n.preset-chip[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  text-align: left;\n  padding-inline: 0.95rem;\n}\n\n.analysis-list[_ngcontent-%COMP%] {\n  margin: 0.8rem 0 0;\n  padding-left: 1.15rem;\n  color: var(--ink-soft);\n}\n\n.action-row[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n\n.admin-layout[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.admin-card-head[_ngcontent-%COMP%], \n.admin-controls[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n\n.admin-controls[_ngcontent-%COMP%] {\n  margin-top: 0.9rem;\n  flex-wrap: wrap;\n}\n\n.status-copy[_ngcontent-%COMP%], \n.error-copy[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  font-weight: 700;\n}\n\n.status-copy[_ngcontent-%COMP%] {\n  color: #8ef0bd;\n}\n\n.error-copy[_ngcontent-%COMP%] {\n  color: #ffb4b4;\n}\n\n.loader-line[_ngcontent-%COMP%] {\n  height: 4px;\n  margin: 1rem 0;\n  border-radius: 999px;\n  overflow: hidden;\n  background: rgba(14, 165, 233, 0.08);\n}\n\n.loader-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 34%;\n  height: 100%;\n  background: linear-gradient(90deg, var(--brand-warm), #fafafa, var(--brand-mint));\n  animation: _ngcontent-%COMP%_dashboard-loader 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_dashboard-loader {\n  from {\n    transform: translateX(-120%);\n  }\n\n  to {\n    transform: translateX(360%);\n  }\n}\n\n@media (max-width: 1024px) {\n  .hero-card[_ngcontent-%COMP%], \n   .discover-layout[_ngcontent-%COMP%], \n   .providers-layout[_ngcontent-%COMP%], \n   .sos-layout[_ngcontent-%COMP%], \n   .admin-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .hero-actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n\n@media (max-width: 720px) {\n  .hero-card[_ngcontent-%COMP%], \n   .section-panel[_ngcontent-%COMP%], \n   .inset-panel[_ngcontent-%COMP%] {\n    padding: 1rem;\n    border-radius: 22px;\n  }\n\n  .tab-button[_ngcontent-%COMP%] {\n    flex: 1 1 calc(50% - 0.75rem);\n  }\n\n  .service-card[_ngcontent-%COMP%], \n   .provider-card[_ngcontent-%COMP%], \n   .section-head[_ngcontent-%COMP%], \n   .admin-card-head[_ngcontent-%COMP%], \n   .admin-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .service-meta[_ngcontent-%COMP%], \n   .provider-meta[_ngcontent-%COMP%] {\n    justify-items: start;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardHomeComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-home', template: "<app-page-shell title=\"Dashboard\" subtitle=\"Local discovery, SOS response, and role-aware operations in a simpler workspace.\">\n  <section class=\"hero-card\">\n    <div class=\"hero-copy\">\n      <p class=\"eyebrow\">Workspace overview</p>\n      <h3>{{ currentUserName }}</h3>\n      <p class=\"hero-meta\">\n        <span class=\"status-badge\">{{ currentUserRole | uppercase }}</span>\n        <span>{{ backendMode }}</span>\n        <span *ngIf=\"isUsingDemoData\">Demo fallback active</span>\n      </p>\n      <p class=\"muted\">\n        {{ isProviderView ? 'Manage your business profile and visibility.' : 'Search providers quickly, compare options, and trigger emergency help without leaving the dashboard.' }}\n      </p>\n    </div>\n\n    <div class=\"hero-actions\">\n      <p class=\"status-note\">{{ backendStatus }}</p>\n      <button type=\"button\" class=\"secondary-action\" (click)=\"refreshDashboard()\">Refresh workspace</button>\n    </div>\n\n    <div class=\"hero-stats\" *ngIf=\"isUserView\">\n      <article class=\"metric-card\">\n        <span>Providers</span>\n        <strong>{{ providers.length }}</strong>\n      </article>\n      <article class=\"metric-card\">\n        <span>Average rating</span>\n        <strong>{{ averageProviderRating }}</strong>\n      </article>\n      <article class=\"metric-card\">\n        <span>Fastest response</span>\n        <strong>{{ fastestResponseMinutes ?? 0 }} mins</strong>\n      </article>\n      <article class=\"metric-card\" *ngIf=\"isSuperAdminView\">\n        <span>Open SOS</span>\n        <strong>{{ openSosCount }}</strong>\n      </article>\n    </div>\n\n    <div class=\"hero-stats\" *ngIf=\"isProviderView && providerProfile as provider\">\n      <article class=\"metric-card\">\n        <span>Rating</span>\n        <strong>{{ provider.rating }}</strong>\n      </article>\n      <article class=\"metric-card\">\n        <span>Reviews</span>\n        <strong>{{ provider.reviewCount }}</strong>\n      </article>\n      <article class=\"metric-card\">\n        <span>Response time</span>\n        <strong>{{ provider.responseTimeMinutes }} mins</strong>\n      </article>\n    </div>\n  </section>\n\n  <ng-container *ngIf=\"isUserView; else providerDashboard\">\n    <section class=\"tab-strip\" role=\"tablist\" aria-label=\"Dashboard sections\">\n      <button type=\"button\" class=\"tab-button\" [class.active]=\"activeUserTab === 'discover'\" (click)=\"setUserTab('discover')\">Search</button>\n      <button type=\"button\" class=\"tab-button\" [class.active]=\"activeUserTab === 'providers'\" (click)=\"setUserTab('providers')\">Providers</button>\n      <button type=\"button\" class=\"tab-button\" [class.active]=\"activeUserTab === 'feedback'\" (click)=\"setUserTab('feedback')\">Feedback</button>\n      <button type=\"button\" class=\"tab-button\" [class.active]=\"activeUserTab === 'sos'\" (click)=\"setUserTab('sos')\">SOS</button>\n      <button type=\"button\" class=\"tab-button\" *ngIf=\"isSuperAdminView\" [class.active]=\"activeUserTab === 'admin'\" (click)=\"setUserTab('admin')\">\n        Super Admin\n        <span class=\"tab-count\" *ngIf=\"pendingUsersCount || pendingProvidersCount\">{{ pendingUsersCount + pendingProvidersCount }}</span>\n      </button>\n    </section>\n\n    <section class=\"panel section-panel\" *ngIf=\"activeUserTab === 'discover'\">\n      <div class=\"section-head\">\n        <div>\n          <p class=\"eyebrow\">Discovery</p>\n          <h3>Find the fastest local help</h3>\n        </div>\n        <p class=\"muted\" *ngIf=\"providersSource\">Source: {{ providersSource }}</p>\n      </div>\n\n      <div class=\"filter-grid\">\n        <label class=\"field\">\n          <span>Service</span>\n          <select [(ngModel)]=\"category\">\n            <option *ngFor=\"let categoryOption of serviceCategories\" [value]=\"categoryOption.value\">{{ categoryOption.label }}</option>\n          </select>\n        </label>\n\n        <label class=\"field\">\n          <span>City</span>\n          <select [(ngModel)]=\"city\">\n            <option *ngFor=\"let cityOption of cities\" [value]=\"cityOption\">{{ cityOption }}</option>\n          </select>\n        </label>\n\n        <button type=\"button\" (click)=\"searchServices()\">Update results</button>\n      </div>\n\n      <div class=\"loader-line\" *ngIf=\"providersLoading || servicesLoading || recommendationLoading\">\n        <span></span>\n      </div>\n\n      <div class=\"discover-layout\">\n        <article class=\"panel inset-panel recommendation-card\" *ngIf=\"recommendation as item\">\n          <p class=\"eyebrow\">Recommended match</p>\n          <h4>{{ item.provider.name }}</h4>\n          <app-star-rating [rating]=\"item.scoreBreakdown.rating\" [showValue]=\"true\"></app-star-rating>\n          <p class=\"muted\">{{ item.reason }}</p>\n          <div class=\"pill-row\">\n            <span>{{ item.provider.city }}</span>\n            <span>{{ item.scoreBreakdown.responseTimeMinutes }} mins</span>\n            <span>{{ item.scoreBreakdown.availability | capitalize }}</span>\n            <span>{{ item.provider.phone }}</span>\n          </div>\n        </article>\n\n        <article class=\"panel inset-panel\">\n          <div class=\"section-head compact-head\">\n            <div>\n              <p class=\"eyebrow\">Top options</p>\n              <h4>High-confidence providers</h4>\n            </div>\n            <span class=\"count-pill\">{{ topServices.length }}</span>\n          </div>\n\n          <div class=\"service-stack\" *ngIf=\"topServices.length; else noServices\">\n            <article class=\"service-card\" *ngFor=\"let service of topServices\">\n              <div>\n                <strong>{{ service.name }}</strong>\n                <p>{{ service.category | capitalize }} \u00B7 {{ service.city }}</p>\n              </div>\n              <div class=\"service-meta\">\n                <app-star-rating [rating]=\"service.rating || 0\" [showValue]=\"true\"></app-star-rating>\n                <span>{{ service.responseTimeMinutes || 0 }} mins</span>\n              </div>\n            </article>\n          </div>\n\n          <ng-template #noServices>\n            <p class=\"muted\">No live provider cards are available for this filter yet.</p>\n          </ng-template>\n        </article>\n      </div>\n    </section>\n\n    <section class=\"panel section-panel\" *ngIf=\"activeUserTab === 'providers'\">\n      <div class=\"section-head\">\n        <div>\n          <p class=\"eyebrow\">Provider compare</p>\n          <h3>Inspect details before you call</h3>\n        </div>\n        <span class=\"count-pill\">{{ providers.length }} results</span>\n      </div>\n\n      <div class=\"providers-layout\">\n        <article class=\"panel inset-panel\">\n          <div class=\"provider-stack\" *ngIf=\"providers.length; else noProviders\">\n            <button\n              type=\"button\"\n              class=\"provider-card\"\n              *ngFor=\"let provider of providers\"\n              [class.active]=\"provider.id === selectedProviderId\"\n              (click)=\"selectProvider(provider.id)\"\n            >\n              <div class=\"provider-copy\">\n                <strong>{{ provider.businessName }}</strong>\n                <span>{{ provider.ownerName }} \u00B7 {{ provider.city }}</span>\n              </div>\n\n              <div class=\"provider-meta\">\n                <span class=\"status-badge\" [class.pending]=\"!provider.verified\">{{ provider.verified ? 'Verified' : 'Pending' }}</span>\n                <app-star-rating [rating]=\"provider.rating\" [showValue]=\"true\" [reviewCount]=\"provider.reviewCount\"></app-star-rating>\n              </div>\n            </button>\n          </div>\n        </article>\n\n        <article class=\"panel inset-panel detail-panel\" *ngIf=\"selectedProvider as provider\">\n          <div class=\"section-head compact-head\">\n            <div>\n              <p class=\"eyebrow\">Selected provider</p>\n              <h4>{{ provider.businessName }}</h4>\n            </div>\n            <span class=\"status-badge\" [class.pending]=\"!provider.verified\">{{ provider.verified ? 'Verified' : 'Pending' }}</span>\n          </div>\n\n          <div class=\"detail-stats\">\n            <article class=\"metric-card\">\n              <span>Score</span>\n              <strong>{{ selectedProviderScore }}</strong>\n            </article>\n            <article class=\"metric-card\">\n              <span>Status</span>\n              <strong>{{ provider.availability | capitalize }}</strong>\n            </article>\n            <article class=\"metric-card\">\n              <span>Response</span>\n              <strong>{{ provider.responseTimeMinutes }} mins</strong>\n            </article>\n          </div>\n\n          <div class=\"detail-list\">\n            <p><strong>Owner:</strong> {{ provider.ownerName }}</p>\n            <p><strong>Phone:</strong> {{ provider.mobile }}</p>\n            <p><strong>Email:</strong> {{ provider.email || 'Not shared' }}</p>\n            <p><strong>Address:</strong> {{ provider.address || provider.city }}</p>\n          </div>\n\n          <div class=\"chip-grid\">\n            <span class=\"chip\" *ngFor=\"let offering of providerOfferings\">{{ offering }}</span>\n          </div>\n        </article>\n      </div>\n\n      <ng-template #noProviders>\n        <p class=\"muted\">No providers are available for the selected service and city.</p>\n      </ng-template>\n    </section>\n\n    <section class=\"panel section-panel\" *ngIf=\"activeUserTab === 'feedback'\">\n      <div class=\"section-head\">\n        <div>\n          <p class=\"eyebrow\">Feedback</p>\n          <h3>Rate the selected provider</h3>\n        </div>\n        <app-star-rating *ngIf=\"selectedProvider as provider\" [rating]=\"provider.rating\" [showValue]=\"true\"></app-star-rating>\n      </div>\n\n      <article class=\"panel inset-panel feedback-panel\" *ngIf=\"selectedProvider as provider; else feedbackEmpty\">\n        <div class=\"section-head compact-head\">\n          <div>\n            <p class=\"eyebrow\">Selected provider</p>\n            <h4>{{ provider.businessName }}</h4>\n          </div>\n          <span class=\"status-badge\" [class.pending]=\"!provider.verified\">{{ provider.verified ? 'Verified' : 'Pending' }}</span>\n        </div>\n\n        <p class=\"muted\">Share a quick rating for {{ provider.businessName }} without leaving the dashboard.</p>\n        <p class=\"status-copy\" *ngIf=\"reviewStatusMessage\">{{ reviewStatusMessage }}</p>\n        <p class=\"error-copy\" *ngIf=\"reviewErrorMessage\">{{ reviewErrorMessage }}</p>\n\n        <label class=\"field\">\n          <span>Your rating</span>\n          <app-star-rating [(rating)]=\"reviewForm.rating\" [interactive]=\"true\" [showValue]=\"true\"></app-star-rating>\n        </label>\n\n        <label class=\"field\">\n          <span>Review</span>\n          <textarea [(ngModel)]=\"reviewForm.comment\" rows=\"4\" placeholder=\"Share punctuality, quality, and communication details.\"></textarea>\n        </label>\n\n        <button type=\"button\" (click)=\"submitReview()\">Submit rating</button>\n      </article>\n\n      <ng-template #feedbackEmpty>\n        <article class=\"panel inset-panel guidance-card\">\n          <p class=\"eyebrow\">No provider selected</p>\n          <h4>Pick a provider in the Providers tab first</h4>\n          <p class=\"muted\">Once you select a provider, you can leave feedback here in a simpler focused form.</p>\n        </article>\n      </ng-template>\n    </section>\n\n    <section class=\"panel section-panel\" *ngIf=\"activeUserTab === 'sos'\">\n      <div class=\"section-head\">\n        <div>\n          <p class=\"eyebrow\">Emergency</p>\n          <h3>SOS response console</h3>\n        </div>\n        <span class=\"count-pill\">{{ city }}</span>\n      </div>\n\n      <div class=\"sos-layout\">\n        <article class=\"panel inset-panel\">\n          <div class=\"preset-list\">\n            <button type=\"button\" class=\"preset-chip\" *ngFor=\"let preset of sosPresets\" (click)=\"applySosPreset(preset)\">{{ preset }}</button>\n          </div>\n\n          <p class=\"status-copy\" *ngIf=\"emergencyStatusMessage\">{{ emergencyStatusMessage }}</p>\n          <p class=\"error-copy\" *ngIf=\"emergencyErrorMessage\">{{ emergencyErrorMessage }}</p>\n          <p class=\"status-copy\" *ngIf=\"sosStatusMessage\">{{ sosStatusMessage }}</p>\n          <p class=\"error-copy\" *ngIf=\"sosErrorMessage\">{{ sosErrorMessage }}</p>\n\n          <label class=\"field\">\n            <span>Emergency type</span>\n            <select [(ngModel)]=\"emergencyType\">\n              <option value=\"ambulance\">Ambulance</option>\n              <option value=\"medical_store\">Medical support</option>\n              <option value=\"electrician\">Electrical hazard</option>\n              <option value=\"plumber\">Water or gas issue</option>\n            </select>\n          </label>\n\n          <label class=\"field\">\n            <span>Situation details</span>\n            <textarea [(ngModel)]=\"emergencyQuery\" rows=\"5\" placeholder=\"Describe the location, symptoms, risk, and who needs help.\"></textarea>\n          </label>\n\n          <div class=\"action-row\">\n            <button type=\"button\" (click)=\"analyzeEmergency()\">Analyze now</button>\n            <button type=\"button\" class=\"danger-button\" (click)=\"sendSosAlert()\">Send SOS alert</button>\n          </div>\n        </article>\n\n        <article class=\"panel inset-panel\" *ngIf=\"emergencyAnalysis as analysis; else sosGuidance\">\n          <div class=\"section-head compact-head\">\n            <div>\n              <p class=\"eyebrow\">AI triage</p>\n              <h4>{{ analysis.priority | uppercase }} priority</h4>\n            </div>\n            <span class=\"count-pill\">{{ analysis.suggestedCategory | capitalize }}</span>\n          </div>\n\n          <p>{{ analysis.assistantMessage }}</p>\n          <ul class=\"analysis-list\">\n            <li *ngFor=\"let action of analysis.recommendedActions\">{{ action }}</li>\n          </ul>\n        </article>\n\n        <ng-template #sosGuidance>\n          <article class=\"panel inset-panel guidance-card\">\n            <p class=\"eyebrow\">Before sending SOS</p>\n            <h4>Share just enough detail to dispatch help fast</h4>\n            <ul class=\"analysis-list\">\n              <li>State who needs help and the exact risk.</li>\n              <li>Include building, area, or landmark information.</li>\n              <li>Mention electricity, water, fire, or medical urgency clearly.</li>\n            </ul>\n          </article>\n        </ng-template>\n      </div>\n    </section>\n\n    <section class=\"panel section-panel\" *ngIf=\"activeUserTab === 'admin' && isSuperAdminView\">\n      <div class=\"section-head\">\n        <div>\n          <p class=\"eyebrow\">Super Admin</p>\n          <h3>Approve and manage people, providers, and alerts</h3>\n        </div>\n        <button type=\"button\" class=\"secondary-action\" (click)=\"loadAdminOverview()\">Refresh admin data</button>\n      </div>\n\n      <p class=\"status-copy\" *ngIf=\"adminStatusMessage\">{{ adminStatusMessage }}</p>\n      <p class=\"error-copy\" *ngIf=\"adminErrorMessage\">{{ adminErrorMessage }}</p>\n      <p class=\"muted\" *ngIf=\"adminLoading\">Loading super admin workspace...</p>\n\n      <ng-container *ngIf=\"adminOverview as data\">\n        <div class=\"admin-metrics\">\n          <article class=\"metric-card\">\n            <span>Users</span>\n            <strong>{{ data.metrics.userCount }}</strong>\n          </article>\n          <article class=\"metric-card\">\n            <span>Pending users</span>\n            <strong>{{ data.metrics.pendingUserCount }}</strong>\n          </article>\n          <article class=\"metric-card\">\n            <span>Pending providers</span>\n            <strong>{{ data.metrics.pendingProviderCount }}</strong>\n          </article>\n          <article class=\"metric-card\">\n            <span>Open SOS</span>\n            <strong>{{ data.metrics.openSosCount }}</strong>\n          </article>\n        </div>\n\n        <div class=\"admin-layout\">\n          <article class=\"panel inset-panel\">\n            <div class=\"section-head compact-head\">\n              <div>\n                <p class=\"eyebrow\">Users</p>\n                <h4>Access control</h4>\n              </div>\n            </div>\n\n            <div class=\"admin-stack\">\n              <article class=\"admin-card\" *ngFor=\"let user of data.users\">\n                <div class=\"admin-card-head\">\n                  <div>\n                    <strong>{{ user.fullName }}</strong>\n                    <p>{{ user.mobile }} \u00B7 {{ user.email || 'No email' }}</p>\n                  </div>\n                  <span class=\"status-badge\" [class.pending]=\"user.approvalStatus !== 'approved'\">{{ user.approvalStatus | uppercase }}</span>\n                </div>\n\n                <div class=\"admin-controls\">\n                  <label class=\"field compact-field\">\n                    <span>Role</span>\n                    <select [ngModel]=\"user.role\" (ngModelChange)=\"updateUserRole(user, $event)\">\n                      <option *ngFor=\"let role of manageableRoles\" [value]=\"role.value\">{{ role.label }}</option>\n                    </select>\n                  </label>\n                  <div class=\"action-row\">\n                    <button type=\"button\" class=\"secondary-action\" (click)=\"updateUserApprovalStatus(user, 'approved')\">Approve</button>\n                    <button type=\"button\" class=\"secondary-action\" (click)=\"updateUserApprovalStatus(user, 'pending')\">Set pending</button>\n                    <button type=\"button\" class=\"danger-button\" (click)=\"updateUserApprovalStatus(user, 'suspended')\">Suspend</button>\n                  </div>\n                </div>\n              </article>\n            </div>\n          </article>\n\n          <article class=\"panel inset-panel\">\n            <div class=\"section-head compact-head\">\n              <div>\n                <p class=\"eyebrow\">Providers</p>\n                <h4>Approval queue</h4>\n              </div>\n            </div>\n\n            <div class=\"admin-stack\">\n              <article class=\"admin-card\" *ngFor=\"let provider of data.providers\">\n                <div class=\"admin-card-head\">\n                  <div>\n                    <strong>{{ provider.businessName }}</strong>\n                    <p>{{ provider.category | capitalize }} \u00B7 {{ provider.city }}</p>\n                  </div>\n                  <app-star-rating [rating]=\"provider.rating\" [showValue]=\"true\" [reviewCount]=\"provider.reviewCount\"></app-star-rating>\n                </div>\n                <div class=\"action-row\">\n                  <button type=\"button\" class=\"secondary-action\" *ngIf=\"!provider.verified\" (click)=\"setProviderVerification(provider, true)\">Approve provider</button>\n                  <button type=\"button\" class=\"danger-button\" *ngIf=\"provider.verified\" (click)=\"setProviderVerification(provider, false)\">Move to pending</button>\n                </div>\n              </article>\n            </div>\n          </article>\n\n          <article class=\"panel inset-panel\">\n            <div class=\"section-head compact-head\">\n              <div>\n                <p class=\"eyebrow\">SOS queue</p>\n                <h4>Dispatch status</h4>\n              </div>\n            </div>\n\n            <div class=\"admin-stack\">\n              <article class=\"admin-card\" *ngFor=\"let alert of data.alerts\">\n                <div class=\"admin-card-head\">\n                  <div>\n                    <strong>{{ alert.userName }}</strong>\n                    <p>{{ alert.city || 'Location pending' }} \u00B7 {{ alert.emergencyType | capitalize }}</p>\n                  </div>\n                  <span class=\"status-badge\" [class.pending]=\"alert.status !== 'resolved'\">{{ alert.status | uppercase }}</span>\n                </div>\n                <p class=\"muted\">{{ alert.description || 'No incident note provided.' }}</p>\n                <div class=\"action-row\">\n                  <button type=\"button\" class=\"secondary-action\" (click)=\"setAlertStatus(alert, 'dispatching')\">Dispatching</button>\n                  <button type=\"button\" (click)=\"setAlertStatus(alert, 'resolved')\">Resolve</button>\n                </div>\n              </article>\n            </div>\n          </article>\n        </div>\n      </ng-container>\n    </section>\n  </ng-container>\n\n  <ng-template #providerDashboard>\n    <section class=\"tab-strip\" role=\"tablist\" aria-label=\"Provider sections\">\n      <button type=\"button\" class=\"tab-button\" [class.active]=\"activeProviderTab === 'overview'\" (click)=\"setProviderTab('overview')\">Overview</button>\n      <button type=\"button\" class=\"tab-button\" [class.active]=\"activeProviderTab === 'visibility'\" (click)=\"setProviderTab('visibility')\">Visibility</button>\n    </section>\n\n    <section class=\"panel section-panel\" *ngIf=\"providerProfile as provider\">\n      <div class=\"providers-layout\" *ngIf=\"activeProviderTab === 'overview'; else visibilityTab\">\n        <article class=\"panel inset-panel detail-panel\">\n          <div class=\"section-head compact-head\">\n            <div>\n              <p class=\"eyebrow\">Business profile</p>\n              <h4>{{ provider.businessName }}</h4>\n            </div>\n            <span class=\"status-badge\" [class.pending]=\"!provider.verified\">{{ provider.verified ? 'Verified' : 'Pending approval' }}</span>\n          </div>\n\n          <div class=\"detail-stats\">\n            <article class=\"metric-card\">\n              <span>Profile</span>\n              <strong>{{ providerCompletionScore }}%</strong>\n            </article>\n            <article class=\"metric-card\">\n              <span>Rating</span>\n              <strong>{{ provider.rating }}</strong>\n            </article>\n            <article class=\"metric-card\">\n              <span>Reviews</span>\n              <strong>{{ provider.reviewCount }}</strong>\n            </article>\n          </div>\n\n          <div class=\"detail-list\">\n            <p><strong>Category:</strong> {{ provider.category | capitalize }}</p>\n            <p><strong>City:</strong> {{ provider.city }}</p>\n            <p><strong>Phone:</strong> {{ provider.mobile }}</p>\n            <p><strong>Email:</strong> {{ provider.email || 'Not shared' }}</p>\n            <p><strong>Address:</strong> {{ provider.address || 'Not added' }}</p>\n            <p><strong>Availability:</strong> {{ provider.availability | capitalize }}</p>\n          </div>\n\n          <div class=\"chip-grid\">\n            <span class=\"chip\" *ngFor=\"let offering of providerAudienceOfferings\">{{ offering }}</span>\n          </div>\n        </article>\n      </div>\n\n      <ng-template #visibilityTab>\n        <article class=\"panel inset-panel detail-panel\">\n          <div class=\"section-head compact-head\">\n            <div>\n              <p class=\"eyebrow\">Customer-facing view</p>\n              <h4>How local users will see your listing</h4>\n            </div>\n            <app-star-rating [rating]=\"provider.rating\" [showValue]=\"true\" [reviewCount]=\"provider.reviewCount\"></app-star-rating>\n          </div>\n\n          <div class=\"detail-stats\">\n            <article class=\"metric-card\">\n              <span>Response time</span>\n              <strong>{{ provider.responseTimeMinutes }} mins</strong>\n            </article>\n            <article class=\"metric-card\">\n              <span>Service city</span>\n              <strong>{{ provider.city }}</strong>\n            </article>\n            <article class=\"metric-card\">\n              <span>Verification</span>\n              <strong>{{ provider.verified ? 'Approved' : 'Pending' }}</strong>\n            </article>\n          </div>\n\n          <p class=\"muted\">Users filtering for {{ provider.category | capitalize }} in {{ provider.city }} will see your business summary, response time, and reviews in this format.</p>\n        </article>\n      </ng-template>\n    </section>\n  </ng-template>\n</app-page-shell>\n", styles: [".hero-card,\n.hero-meta,\n.hero-actions,\n.hero-stats,\n.tab-strip,\n.filter-grid,\n.pill-row,\n.service-card,\n.provider-card,\n.provider-meta,\n.section-head,\n.action-row,\n.admin-card-head,\n.admin-controls {\n  display: flex;\n}\n\n.discover-layout,\n.providers-layout,\n.sos-layout,\n.admin-layout,\n.hero-stats,\n.detail-stats,\n.admin-metrics,\n.chip-grid,\n.provider-stack,\n.service-stack,\n.admin-stack,\n.preset-list {\n  display: grid;\n}\n\n.hero-card,\n.section-panel,\n.inset-panel {\n  border: 1px solid rgba(154, 177, 214, 0.14);\n  background: rgba(10, 17, 31, 0.78);\n}\n\n.hero-card {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) auto;\n  gap: 1.25rem 1.5rem;\n  margin-bottom: 1.25rem;\n  padding: 1.5rem;\n  border-radius: 28px;\n  box-shadow: var(--shadow-card);\n}\n\n.hero-copy h3,\n.section-head h3,\n.section-head h4 {\n  margin: 0;\n  color: var(--ink-strong);\n  letter-spacing: -0.03em;\n}\n\n.hero-copy h3 {\n  font-size: clamp(1.45rem, 3vw, 2rem);\n}\n\n.hero-meta {\n  gap: 0.65rem;\n  flex-wrap: wrap;\n  margin: 0.85rem 0 0.65rem;\n  color: var(--ink-soft);\n}\n\n.hero-actions {\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.85rem;\n}\n\n.status-note,\n.muted {\n  margin: 0;\n  color: var(--ink-soft);\n}\n\n.hero-stats,\n.detail-stats,\n.admin-metrics {\n  grid-column: 1 / -1;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.8rem;\n}\n\n.metric-card {\n  padding: 0.95rem 1rem;\n  border-radius: 18px;\n  border: 1px solid rgba(154, 177, 214, 0.14);\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.metric-card span,\n.field span {\n  display: block;\n  margin-bottom: 0.35rem;\n  color: var(--ink-soft);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.metric-card strong {\n  color: var(--ink-strong);\n  font-size: 1.15rem;\n}\n\n.tab-strip {\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n\n.tab-button,\n.secondary-action,\n.preset-chip {\n  min-height: 44px;\n  border-radius: 999px;\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--ink-strong);\n  box-shadow: none;\n}\n\n.tab-button {\n  position: relative;\n  padding: 0.75rem 1rem;\n}\n\n.tab-button.active {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  border-color: transparent;\n}\n\n.tab-count {\n  margin-left: 0.5rem;\n  display: inline-flex;\n  min-width: 1.45rem;\n  min-height: 1.45rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.16);\n  font-size: 0.72rem;\n}\n\n.section-panel {\n  padding: 1rem;\n  border-radius: 24px;\n  margin-bottom: 1rem;\n}\n\n.panel {\n  border-radius: 22px;\n}\n\n.inset-panel {\n  padding: 1.15rem;\n  border-radius: 20px;\n}\n\n.section-head {\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n\n.compact-head {\n  margin-bottom: 0.8rem;\n}\n\n.eyebrow {\n  margin: 0 0 0.35rem;\n  color: var(--brand-warm);\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.filter-grid {\n  gap: 0.85rem;\n  flex-wrap: wrap;\n  align-items: end;\n}\n\n.field {\n  display: grid;\n  gap: 0.4rem;\n  min-width: 190px;\n  flex: 1 1 220px;\n}\n\n.compact-field {\n  min-width: 150px;\n}\n\nselect,\ninput,\ntextarea,\nbutton {\n  border: 1px solid rgba(106, 130, 160, 0.22);\n  border-radius: 14px;\n}\n\nselect,\ninput,\ntextarea {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--ink-strong);\n}\n\ntextarea {\n  resize: vertical;\n}\n\nbutton {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  border-color: transparent;\n  cursor: pointer;\n  font-weight: 700;\n}\n\n.secondary-action,\n.preset-chip {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--ink-strong);\n  border-color: rgba(154, 177, 214, 0.18);\n}\n\n.danger-button {\n  background: linear-gradient(135deg, #b91c1c, #ef4444);\n}\n\n.discover-layout,\n.providers-layout,\n.sos-layout {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.recommendation-card {\n  align-content: start;\n}\n\n.pill-row {\n  gap: 0.55rem;\n  flex-wrap: wrap;\n  margin-top: 0.85rem;\n}\n\n.pill-row span,\n.count-pill,\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.4rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.pill-row span,\n.count-pill {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--ink-soft);\n}\n\n.status-badge {\n  background: rgba(34, 197, 94, 0.15);\n  color: #99f6ba;\n}\n\n.status-badge.pending {\n  background: rgba(245, 158, 11, 0.16);\n  color: #ffd27a;\n}\n\n.service-stack,\n.provider-stack,\n.admin-stack {\n  gap: 0.75rem;\n}\n\n.service-card,\n.provider-card,\n.admin-card {\n  padding: 0.95rem 1rem;\n  border-radius: 16px;\n  border: 1px solid rgba(154, 177, 214, 0.14);\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.service-card,\n.provider-card {\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.service-card p,\n.provider-copy span,\n.admin-card p,\n.detail-list p {\n  margin: 0.3rem 0 0;\n  color: var(--ink-soft);\n}\n\n.service-meta,\n.provider-meta {\n  display: grid;\n  gap: 0.35rem;\n  justify-items: end;\n}\n\n.provider-card {\n  width: 100%;\n  text-align: left;\n  box-shadow: none;\n}\n\n.provider-card.active {\n  border-color: rgba(14, 165, 233, 0.3);\n  background: rgba(14, 165, 233, 0.1);\n}\n\n.detail-panel {\n  align-content: start;\n}\n\n.detail-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.7rem 1rem;\n  margin: 1rem 0;\n}\n\n.chip-grid {\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.65rem;\n}\n\n.chip {\n  padding: 0.7rem 0.8rem;\n  text-align: center;\n  border-radius: 999px;\n  background: rgba(31, 182, 255, 0.12);\n  color: var(--ink-strong);\n  font-weight: 600;\n}\n\n.feedback-block {\n  margin-top: 1.1rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(154, 177, 214, 0.12);\n}\n\n.preset-list {\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n}\n\n.preset-chip {\n  justify-content: flex-start;\n  text-align: left;\n  padding-inline: 0.95rem;\n}\n\n.analysis-list {\n  margin: 0.8rem 0 0;\n  padding-left: 1.15rem;\n  color: var(--ink-soft);\n}\n\n.action-row {\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n\n.admin-layout {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.admin-card-head,\n.admin-controls {\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n\n.admin-controls {\n  margin-top: 0.9rem;\n  flex-wrap: wrap;\n}\n\n.status-copy,\n.error-copy {\n  margin: 0.5rem 0 0;\n  font-weight: 700;\n}\n\n.status-copy {\n  color: #8ef0bd;\n}\n\n.error-copy {\n  color: #ffb4b4;\n}\n\n.loader-line {\n  height: 4px;\n  margin: 1rem 0;\n  border-radius: 999px;\n  overflow: hidden;\n  background: rgba(14, 165, 233, 0.08);\n}\n\n.loader-line span {\n  display: block;\n  width: 34%;\n  height: 100%;\n  background: linear-gradient(90deg, var(--brand-warm), #fafafa, var(--brand-mint));\n  animation: dashboard-loader 1s linear infinite;\n}\n\n@keyframes dashboard-loader {\n  from {\n    transform: translateX(-120%);\n  }\n\n  to {\n    transform: translateX(360%);\n  }\n}\n\n@media (max-width: 1024px) {\n  .hero-card,\n  .discover-layout,\n  .providers-layout,\n  .sos-layout,\n  .admin-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .hero-actions {\n    align-items: flex-start;\n  }\n}\n\n@media (max-width: 720px) {\n  .hero-card,\n  .section-panel,\n  .inset-panel {\n    padding: 1rem;\n    border-radius: 22px;\n  }\n\n  .tab-button {\n    flex: 1 1 calc(50% - 0.75rem);\n  }\n\n  .service-card,\n  .provider-card,\n  .section-head,\n  .admin-card-head,\n  .admin-controls {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .service-meta,\n  .provider-meta {\n    justify-items: start;\n  }\n}\n"] }]
    }], () => [{ type: i1.LocalServicesService }, { type: i2.SessionService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardHomeComponent, { className: "DashboardHomeComponent" }); })();
//# sourceMappingURL=dashboard-home.component.js.map