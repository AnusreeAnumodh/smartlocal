import { Component } from '@angular/core';
import { KERALA_CITIES } from '../../../../shared/data/kerala-directory.data';
import { ACCOUNT_TYPE_OPTIONS, FRONTEND_DEFAULTS, ROLE_OPTIONS, SERVICE_CATEGORIES } from '../../../../shared/config/app-config';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function LoginComponent_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 11);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_form_15_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(1, "div", 12)(2, "label", 13);
    i0.ɵɵtext(3, "Mobile or Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_15_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.mobile, $event) || (ctx_r1.form.mobile = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 12)(6, "label", 15);
    i0.ɵɵtext(7, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_15_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.password, $event) || (ctx_r1.form.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 17)(10, "button", 18);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 19);
    i0.ɵɵlistener("click", function LoginComponent_form_15_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.continueAsGuest()); });
    i0.ɵɵtext(13, "Continue as guest");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.mobile);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.password);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.loading ? "Signing in..." : "Continue");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading);
} }
function LoginComponent_form_16_option_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const role_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", role_r4.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(role_r4.label);
} }
function LoginComponent_form_16_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(city_r5);
} }
function LoginComponent_form_16_div_29_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const accountType_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", accountType_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(accountType_r7.label);
} }
function LoginComponent_form_16_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 12)(2, "label", 37);
    i0.ɵɵtext(3, "Profile Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_div_29_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.accountType, $event) || (ctx_r1.signUpForm.accountType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(5, LoginComponent_form_16_div_29_option_5_Template, 2, 2, "option", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 12)(7, "label", 39);
    i0.ɵɵtext(8, "Locality");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_div_29_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.locality, $event) || (ctx_r1.signUpForm.locality = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.accountType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.accountTypeOptions);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.locality);
} }
function LoginComponent_form_16_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "label", 41);
    i0.ɵɵtext(2, "Community Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 42);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_div_30_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.communityName, $event) || (ctx_r1.signUpForm.communityName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.communityName);
} }
function LoginComponent_form_16_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "label", 43);
    i0.ɵɵtext(2, "Business Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_div_31_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.businessName, $event) || (ctx_r1.signUpForm.businessName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.businessName);
} }
function LoginComponent_form_16_div_32_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", category_r11.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(category_r11.label);
} }
function LoginComponent_form_16_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 12)(2, "label", 45);
    i0.ɵɵtext(3, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_div_32_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.category, $event) || (ctx_r1.signUpForm.category = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(5, LoginComponent_form_16_div_32_option_5_Template, 2, 2, "option", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 12)(7, "label", 47);
    i0.ɵɵtext(8, "Experience (Years)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_div_32_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.experienceYears, $event) || (ctx_r1.signUpForm.experienceYears = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.category);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.serviceCategories);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.experienceYears);
} }
function LoginComponent_form_16_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "label", 49);
    i0.ɵɵtext(2, "Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_div_33_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.address, $event) || (ctx_r1.signUpForm.address = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.address);
} }
function LoginComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 11);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_form_16_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.signUp()); });
    i0.ɵɵelementStart(1, "div", 12)(2, "label", 20);
    i0.ɵɵtext(3, "Full Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.fullName, $event) || (ctx_r1.signUpForm.fullName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 22)(6, "div", 12)(7, "label", 23);
    i0.ɵɵtext(8, "Mobile Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.mobile, $event) || (ctx_r1.signUpForm.mobile = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 12)(11, "label", 25);
    i0.ɵɵtext(12, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.email, $event) || (ctx_r1.signUpForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 12)(15, "label", 27);
    i0.ɵɵtext(16, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.password, $event) || (ctx_r1.signUpForm.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 22)(19, "div", 12)(20, "label", 29);
    i0.ɵɵtext(21, "Account Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "select", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.role, $event) || (ctx_r1.signUpForm.role = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(23, LoginComponent_form_16_option_23_Template, 2, 2, "option", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 12)(25, "label", 32);
    i0.ɵɵtext(26, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_select_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.city, $event) || (ctx_r1.signUpForm.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(28, LoginComponent_form_16_option_28_Template, 2, 2, "option", 31);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(29, LoginComponent_form_16_div_29_Template, 10, 3, "div", 34)(30, LoginComponent_form_16_div_30_Template, 4, 1, "div", 35)(31, LoginComponent_form_16_div_31_Template, 4, 1, "div", 35)(32, LoginComponent_form_16_div_32_Template, 10, 3, "div", 34)(33, LoginComponent_form_16_div_33_Template, 4, 1, "div", 35);
    i0.ɵɵelementStart(34, "button", 18);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.fullName);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.mobile);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.email);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.password);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.role);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.roleOptions);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.city);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.keralaCities);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.signUpForm.role === "user");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showCommunityFields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showProviderFields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showProviderFields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showProviderFields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.loading ? "Creating account..." : "Create account");
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "span", 52);
    i0.ɵɵtext(2, "Use guest mode only for quick browsing without saving account data.");
    i0.ɵɵelementEnd()();
} }
function LoginComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 53);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusMessage);
} }
function LoginComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 54);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.errorMessage);
} }
export class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.keralaCities = KERALA_CITIES;
        this.roleOptions = ROLE_OPTIONS;
        this.accountTypeOptions = ACCOUNT_TYPE_OPTIONS;
        this.serviceCategories = SERVICE_CATEGORIES;
        this.mode = 'login';
        this.statusMessage = '';
        this.errorMessage = '';
        this.loading = false;
        this.form = {
            mobile: '',
            password: ''
        };
        this.signUpForm = {
            fullName: '',
            mobile: '',
            email: '',
            password: '',
            role: 'user',
            city: FRONTEND_DEFAULTS.city,
            accountType: 'individual',
            businessName: '',
            category: FRONTEND_DEFAULTS.category,
            address: '',
            experienceYears: 1,
            communityName: '',
            locality: ''
        };
    }
    submit() {
        this.errorMessage = '';
        this.statusMessage = '';
        if (!this.form.mobile.trim() || !this.form.password.trim()) {
            this.errorMessage = 'Enter your mobile number and password.';
            return;
        }
        this.loading = true;
        this.authService.login(this.form).subscribe({
            next: (response) => {
                this.loading = false;
                this.statusMessage = response.message;
            },
            error: (error) => {
                this.loading = false;
                this.errorMessage = error.message || 'Unable to login';
            }
        });
    }
    signUp() {
        this.errorMessage = '';
        this.statusMessage = '';
        if (!this.signUpForm.fullName.trim() || !this.signUpForm.mobile.trim() || !this.signUpForm.password.trim()) {
            this.errorMessage = 'Name, mobile number, and password are required.';
            return;
        }
        if (this.signUpForm.role === 'provider' && !this.signUpForm.businessName?.trim()) {
            this.errorMessage = 'Business name is required for provider signup.';
            return;
        }
        this.loading = true;
        this.authService.signUp(this.signUpForm).subscribe({
            next: (response) => {
                this.loading = false;
                this.statusMessage = response.message;
            },
            error: (error) => {
                this.loading = false;
                this.errorMessage = error.message || 'Unable to create account';
            }
        });
    }
    setMode(mode) {
        this.mode = mode;
        this.errorMessage = '';
        this.statusMessage = '';
    }
    continueAsGuest() {
        this.errorMessage = '';
        this.statusMessage = '';
        this.authService.continueAsGuest();
    }
    get showCommunityFields() {
        return this.signUpForm.role === 'user' && this.signUpForm.accountType === 'community';
    }
    get showProviderFields() {
        return this.signUpForm.role === 'provider';
    }
    static { this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 11, consts: [[1, "auth-shell"], [1, "auth-card"], [1, "auth-card-head"], [1, "eyebrow"], [1, "muted"], [1, "mode-switch"], ["type", "button", 3, "click"], ["class", "auth-form", 3, "ngSubmit", 4, "ngIf"], ["class", "helper-row", 4, "ngIf"], ["class", "status", 4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit"], [1, "field"], ["for", "mobile"], ["id", "mobile", "type", "text", "name", "mobile", "placeholder", "name@example.com or +91 98xxxxxxx", "required", "", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "placeholder", "Enter your password", "required", "", 3, "ngModelChange", "ngModel"], [1, "action-row"], ["type", "submit", 3, "disabled"], ["type", "button", 1, "ghost-button", 3, "click", "disabled"], ["for", "fullName"], ["id", "fullName", "type", "text", "name", "fullName", "placeholder", "Your full name", "required", "", 3, "ngModelChange", "ngModel"], [1, "two-col"], ["for", "signupMobile"], ["id", "signupMobile", "type", "text", "name", "signupMobile", "placeholder", "+91 98xxxxxxx", "required", "", 3, "ngModelChange", "ngModel"], ["for", "signupEmail"], ["id", "signupEmail", "type", "email", "name", "signupEmail", "placeholder", "name@example.com", 3, "ngModelChange", "ngModel"], ["for", "signupPassword"], ["id", "signupPassword", "type", "password", "name", "signupPassword", "placeholder", "Create a secure password", "required", "", 3, "ngModelChange", "ngModel"], ["for", "signupRole"], ["id", "signupRole", "name", "signupRole", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "signupCity"], ["id", "signupCity", "name", "signupCity", 3, "ngModelChange", "ngModel"], ["class", "two-col", 4, "ngIf"], ["class", "field", 4, "ngIf"], [3, "value"], ["for", "accountType"], ["id", "accountType", "name", "accountType", 3, "ngModelChange", "ngModel"], ["for", "locality"], ["id", "locality", "type", "text", "name", "locality", "placeholder", "Neighborhood or area", 3, "ngModelChange", "ngModel"], ["for", "communityName"], ["id", "communityName", "type", "text", "name", "communityName", "placeholder", "Apartment or association name", 3, "ngModelChange", "ngModel"], ["for", "businessName"], ["id", "businessName", "type", "text", "name", "businessName", "placeholder", "Your business name", 3, "ngModelChange", "ngModel"], ["for", "category"], ["id", "category", "name", "category", 3, "ngModelChange", "ngModel"], ["for", "experienceYears"], ["id", "experienceYears", "type", "number", "name", "experienceYears", "min", "1", 3, "ngModelChange", "ngModel"], ["for", "address"], ["id", "address", "type", "text", "name", "address", "placeholder", "Business address", 3, "ngModelChange", "ngModel"], [1, "helper-row"], [1, "helper-copy"], [1, "status"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "article", 1)(2, "div", 2)(3, "div")(4, "p", 3);
            i0.ɵɵtext(5, "SmartLocal access");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 4);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 5)(11, "button", 6);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_11_listener() { return ctx.setMode("login"); });
            i0.ɵɵtext(12, "Login");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 6);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_13_listener() { return ctx.setMode("signup"); });
            i0.ɵɵtext(14, "Sign up");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(15, LoginComponent_form_15_Template, 14, 5, "form", 7)(16, LoginComponent_form_16_Template, 36, 15, "form", 7)(17, LoginComponent_div_17_Template, 3, 0, "div", 8)(18, LoginComponent_p_18_Template, 2, 1, "p", 9)(19, LoginComponent_p_19_Template, 2, 1, "p", 10);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.mode === "login" ? "Sign in" : "Create account");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.mode === "login" ? "Use your saved mobile number or email to continue." : "Create a standard user or provider account.");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.mode === "login");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.mode === "signup");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.mode === "login");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.mode === "signup");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.mode === "login");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.statusMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.errorMessage);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.MinValidator, i3.NgModel, i3.NgForm], styles: [".auth-shell[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 160px);\n  display: grid;\n  justify-content: center;\n  align-items: start;\n  animation: fade-up 420ms ease both;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.78rem;\n  color: var(--brand-rose);\n  font-weight: 800;\n}\n\nh2[_ngcontent-%COMP%] {\n  line-height: 1.1;\n  margin: 0.5rem 0 0.5rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--ink-strong);\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 3vw, 2rem);\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  box-shadow: var(--shadow-soft);\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: min(100%, 560px);\n  background: var(--bg-panel-strong);\n  border-radius: 18px;\n  padding: 1.6rem;\n}\n\n.auth-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n.mode-switch[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: 0.25rem;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(154, 177, 214, 0.16);\n}\n\n.mode-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 88px;\n  min-height: 40px;\n  border: 0;\n  background: transparent;\n  color: var(--ink-soft);\n  font-weight: 600;\n  box-shadow: none;\n  padding: 0.65rem 0.9rem;\n}\n\n.mode-switch[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(31, 182, 255, 0.22), rgba(255, 95, 143, 0.18));\n  color: #ffffff;\n  animation: fade-up 260ms ease both;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 0.95rem;\n}\n\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n  font: inherit;\n}\n\n.ghost-button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--ink-strong);\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  font-weight: 600;\n  box-shadow: none;\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.05rem;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--ink-soft);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  line-height: 1.2;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \nbutton[type='submit'][_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--line-soft);\n  background: rgba(255, 255, 255, 0.05);\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  color: var(--ink-strong);\n  font-weight: 600;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #7a7a85;\n  font-weight: 500;\n}\n\n.helper-row[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.95rem 1rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(154, 177, 214, 0.16);\n}\n\n.helper-copy[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n\nbutton[type='submit'][_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  border-color: transparent;\n  font-weight: 700;\n  box-shadow: var(--shadow-card);\n}\n\n.action-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n\n.auth-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  animation: fade-up 360ms ease both;\n}\n\n.auth-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 70ms;\n}\n\n.auth-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 120ms;\n}\n\n.auth-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 170ms;\n}\n\n.auth-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 220ms;\n}\n\n.auth-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 270ms;\n}\n\n.status[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: var(--success);\n  font-weight: 600;\n}\n\n.error[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: var(--danger);\n  font-weight: 600;\n}\n\n@media (max-width: 720px) {\n  .auth-shell[_ngcontent-%COMP%], \n   .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .auth-shell[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.15rem;\n    border-radius: 16px;\n  }\n\n  .auth-card-head[_ngcontent-%COMP%], \n   .action-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    display: grid;\n  }\n\n  .mode-switch[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', template: "<section class=\"auth-shell\">\n  <article class=\"auth-card\">\n    <div class=\"auth-card-head\">\n      <div>\n        <p class=\"eyebrow\">SmartLocal access</p>\n        <h2>{{ mode === 'login' ? 'Sign in' : 'Create account' }}</h2>\n        <p class=\"muted\">{{ mode === 'login' ? 'Use your saved mobile number or email to continue.' : 'Create a standard user or provider account.' }}</p>\n      </div>\n      <div class=\"mode-switch\">\n        <button type=\"button\" [class.active]=\"mode === 'login'\" (click)=\"setMode('login')\">Login</button>\n        <button type=\"button\" [class.active]=\"mode === 'signup'\" (click)=\"setMode('signup')\">Sign up</button>\n      </div>\n    </div>\n\n    <form class=\"auth-form\" *ngIf=\"mode === 'login'\" (ngSubmit)=\"submit()\">\n      <div class=\"field\">\n        <label for=\"mobile\">Mobile or Email</label>\n        <input id=\"mobile\" type=\"text\" [(ngModel)]=\"form.mobile\" name=\"mobile\" placeholder=\"name@example.com or +91 98xxxxxxx\" required />\n      </div>\n\n      <div class=\"field\">\n        <label for=\"password\">Password</label>\n        <input id=\"password\" type=\"password\" [(ngModel)]=\"form.password\" name=\"password\" placeholder=\"Enter your password\" required />\n      </div>\n\n      <div class=\"action-row\">\n        <button type=\"submit\" [disabled]=\"loading\">{{ loading ? 'Signing in...' : 'Continue' }}</button>\n        <button type=\"button\" class=\"ghost-button\" (click)=\"continueAsGuest()\" [disabled]=\"loading\">Continue as guest</button>\n      </div>\n    </form>\n\n    <form class=\"auth-form\" *ngIf=\"mode === 'signup'\" (ngSubmit)=\"signUp()\">\n      <div class=\"field\">\n        <label for=\"fullName\">Full Name</label>\n        <input id=\"fullName\" type=\"text\" [(ngModel)]=\"signUpForm.fullName\" name=\"fullName\" placeholder=\"Your full name\" required />\n      </div>\n\n      <div class=\"two-col\">\n        <div class=\"field\">\n          <label for=\"signupMobile\">Mobile Number</label>\n          <input id=\"signupMobile\" type=\"text\" [(ngModel)]=\"signUpForm.mobile\" name=\"signupMobile\" placeholder=\"+91 98xxxxxxx\" required />\n        </div>\n        <div class=\"field\">\n          <label for=\"signupEmail\">Email</label>\n          <input id=\"signupEmail\" type=\"email\" [(ngModel)]=\"signUpForm.email\" name=\"signupEmail\" placeholder=\"name@example.com\" />\n        </div>\n      </div>\n\n      <div class=\"field\">\n        <label for=\"signupPassword\">Password</label>\n        <input id=\"signupPassword\" type=\"password\" [(ngModel)]=\"signUpForm.password\" name=\"signupPassword\" placeholder=\"Create a secure password\" required />\n      </div>\n\n      <div class=\"two-col\">\n        <div class=\"field\">\n          <label for=\"signupRole\">Account Type</label>\n          <select id=\"signupRole\" [(ngModel)]=\"signUpForm.role\" name=\"signupRole\">\n            <option *ngFor=\"let role of roleOptions\" [value]=\"role.value\">{{ role.label }}</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label for=\"signupCity\">City</label>\n          <select id=\"signupCity\" [(ngModel)]=\"signUpForm.city\" name=\"signupCity\">\n            <option *ngFor=\"let city of keralaCities\" [value]=\"city\">{{ city }}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"two-col\" *ngIf=\"signUpForm.role === 'user'\">\n        <div class=\"field\">\n          <label for=\"accountType\">Profile Type</label>\n          <select id=\"accountType\" [(ngModel)]=\"signUpForm.accountType\" name=\"accountType\">\n            <option *ngFor=\"let accountType of accountTypeOptions\" [value]=\"accountType.value\">{{ accountType.label }}</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label for=\"locality\">Locality</label>\n          <input id=\"locality\" type=\"text\" [(ngModel)]=\"signUpForm.locality\" name=\"locality\" placeholder=\"Neighborhood or area\" />\n        </div>\n      </div>\n\n      <div class=\"field\" *ngIf=\"showCommunityFields\">\n        <label for=\"communityName\">Community Name</label>\n        <input id=\"communityName\" type=\"text\" [(ngModel)]=\"signUpForm.communityName\" name=\"communityName\" placeholder=\"Apartment or association name\" />\n      </div>\n\n      <div class=\"field\" *ngIf=\"showProviderFields\">\n        <label for=\"businessName\">Business Name</label>\n        <input id=\"businessName\" type=\"text\" [(ngModel)]=\"signUpForm.businessName\" name=\"businessName\" placeholder=\"Your business name\" />\n      </div>\n\n      <div class=\"two-col\" *ngIf=\"showProviderFields\">\n        <div class=\"field\">\n          <label for=\"category\">Category</label>\n          <select id=\"category\" [(ngModel)]=\"signUpForm.category\" name=\"category\">\n            <option *ngFor=\"let category of serviceCategories\" [value]=\"category.value\">{{ category.label }}</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label for=\"experienceYears\">Experience (Years)</label>\n          <input id=\"experienceYears\" type=\"number\" [(ngModel)]=\"signUpForm.experienceYears\" name=\"experienceYears\" min=\"1\" />\n        </div>\n      </div>\n\n      <div class=\"field\" *ngIf=\"showProviderFields\">\n        <label for=\"address\">Address</label>\n        <input id=\"address\" type=\"text\" [(ngModel)]=\"signUpForm.address\" name=\"address\" placeholder=\"Business address\" />\n      </div>\n\n      <button type=\"submit\" [disabled]=\"loading\">{{ loading ? 'Creating account...' : 'Create account' }}</button>\n    </form>\n\n    <div class=\"helper-row\" *ngIf=\"mode === 'login'\">\n      <span class=\"helper-copy\">Use guest mode only for quick browsing without saving account data.</span>\n    </div>\n\n    <p class=\"status\" *ngIf=\"statusMessage\">{{ statusMessage }}</p>\n    <p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n  </article>\n</section>\n", styles: [".auth-shell {\n  min-height: calc(100vh - 160px);\n  display: grid;\n  justify-content: center;\n  align-items: start;\n  animation: fade-up 420ms ease both;\n}\n\n.eyebrow {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.78rem;\n  color: var(--brand-rose);\n  font-weight: 800;\n}\n\nh2 {\n  line-height: 1.1;\n  margin: 0.5rem 0 0.5rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--ink-strong);\n}\n\nh2 {\n  font-size: clamp(1.5rem, 3vw, 2rem);\n}\n\n.auth-card {\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  box-shadow: var(--shadow-soft);\n}\n\n.auth-card {\n  width: min(100%, 560px);\n  background: var(--bg-panel-strong);\n  border-radius: 18px;\n  padding: 1.6rem;\n}\n\n.auth-card-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n.mode-switch {\n  display: inline-grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: 0.25rem;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(154, 177, 214, 0.16);\n}\n\n.mode-switch button {\n  min-width: 88px;\n  min-height: 40px;\n  border: 0;\n  background: transparent;\n  color: var(--ink-soft);\n  font-weight: 600;\n  box-shadow: none;\n  padding: 0.65rem 0.9rem;\n}\n\n.mode-switch button.active {\n  background: linear-gradient(135deg, rgba(31, 182, 255, 0.22), rgba(255, 95, 143, 0.18));\n  color: #ffffff;\n  animation: fade-up 260ms ease both;\n}\n\n.muted {\n  color: var(--ink-soft);\n  font-size: 0.95rem;\n}\n\nbutton,\ninput,\nselect {\n  border-radius: var(--radius-md);\n  font: inherit;\n}\n\n.ghost-button {\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--ink-strong);\n  border: 1px solid rgba(154, 177, 214, 0.16);\n  font-weight: 600;\n  box-shadow: none;\n}\n\n.auth-form {\n  display: grid;\n  gap: 1.05rem;\n}\n\n.field {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.two-col {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n\nlabel {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--ink-soft);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  line-height: 1.2;\n}\n\ninput,\nselect,\nbutton,\nbutton[type='submit'] {\n  width: 100%;\n  border: 1px solid var(--line-soft);\n  background: rgba(255, 255, 255, 0.05);\n}\n\ninput,\nselect {\n  color: var(--ink-strong);\n  font-weight: 600;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);\n}\n\ninput::placeholder {\n  color: #7a7a85;\n  font-weight: 500;\n}\n\n.helper-row {\n  margin-top: 1rem;\n  padding: 0.95rem 1rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(154, 177, 214, 0.16);\n}\n\n.helper-copy {\n  color: var(--ink-soft);\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n\nbutton[type='submit'] {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  border-color: transparent;\n  font-weight: 700;\n  box-shadow: var(--shadow-card);\n}\n\n.action-row {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n\n.auth-form > * {\n  animation: fade-up 360ms ease both;\n}\n\n.auth-form > *:nth-child(1) {\n  animation-delay: 70ms;\n}\n\n.auth-form > *:nth-child(2) {\n  animation-delay: 120ms;\n}\n\n.auth-form > *:nth-child(3) {\n  animation-delay: 170ms;\n}\n\n.auth-form > *:nth-child(4) {\n  animation-delay: 220ms;\n}\n\n.auth-form > *:nth-child(5) {\n  animation-delay: 270ms;\n}\n\n.status {\n  margin-top: 1rem;\n  color: var(--success);\n  font-weight: 600;\n}\n\n.error {\n  margin-top: 1rem;\n  color: var(--danger);\n  font-weight: 600;\n}\n\n@media (max-width: 720px) {\n  .auth-shell,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .auth-shell {\n    min-height: auto;\n  }\n\n  .auth-card {\n    padding: 1.15rem;\n    border-radius: 16px;\n  }\n\n  .auth-card-head,\n  .action-row {\n    grid-template-columns: 1fr;\n    display: grid;\n  }\n\n  .mode-switch {\n    width: 100%;\n  }\n}\n"] }]
    }], () => [{ type: i1.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent" }); })();
//# sourceMappingURL=login.component.js.map