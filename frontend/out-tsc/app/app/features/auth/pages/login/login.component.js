import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function LoginComponent_form_40_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 19);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_form_40_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(1, "div", 20)(2, "label", 21);
    i0.ɵɵtext(3, "Mobile or Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_40_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.mobile, $event) || (ctx_r1.form.mobile = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 20)(6, "label", 23);
    i0.ɵɵtext(7, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_40_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.password, $event) || (ctx_r1.form.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 25)(10, "button", 26);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 27);
    i0.ɵɵlistener("click", function LoginComponent_form_40_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.continueAsGuest()); });
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
function LoginComponent_form_41_option_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(city_r4);
} }
function LoginComponent_form_41_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 20)(2, "label", 47);
    i0.ɵɵtext(3, "Profile Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_div_32_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.accountType, $event) || (ctx_r1.signUpForm.accountType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(5, "option", 49);
    i0.ɵɵtext(6, "Individual");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option", 50);
    i0.ɵɵtext(8, "Community");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 20)(10, "label", 51);
    i0.ɵɵtext(11, "Locality");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 52);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_div_32_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.locality, $event) || (ctx_r1.signUpForm.locality = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.accountType);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.locality);
} }
function LoginComponent_form_41_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "label", 53);
    i0.ɵɵtext(2, "Community Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 54);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_div_33_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.communityName, $event) || (ctx_r1.signUpForm.communityName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.communityName);
} }
function LoginComponent_form_41_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "label", 55);
    i0.ɵɵtext(2, "Business Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 56);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_div_34_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.businessName, $event) || (ctx_r1.signUpForm.businessName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.businessName);
} }
function LoginComponent_form_41_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 20)(2, "label", 57);
    i0.ɵɵtext(3, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 58);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_div_35_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.category, $event) || (ctx_r1.signUpForm.category = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(5, "option", 59);
    i0.ɵɵtext(6, "Plumber");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option", 60);
    i0.ɵɵtext(8, "Electrician");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 61);
    i0.ɵɵtext(10, "Medical Store");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 62);
    i0.ɵɵtext(12, "Ambulance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 20)(14, "label", 63);
    i0.ɵɵtext(15, "Experience (Years)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_div_35_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.experienceYears, $event) || (ctx_r1.signUpForm.experienceYears = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.category);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.experienceYears);
} }
function LoginComponent_form_41_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "label", 65);
    i0.ɵɵtext(2, "Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 66);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_div_36_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.address, $event) || (ctx_r1.signUpForm.address = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.signUpForm.address);
} }
function LoginComponent_form_41_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 19);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_form_41_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.signUp()); });
    i0.ɵɵelementStart(1, "div", 20)(2, "label", 28);
    i0.ɵɵtext(3, "Full Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.fullName, $event) || (ctx_r1.signUpForm.fullName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 30)(6, "div", 20)(7, "label", 31);
    i0.ɵɵtext(8, "Mobile Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.mobile, $event) || (ctx_r1.signUpForm.mobile = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 20)(11, "label", 33);
    i0.ɵɵtext(12, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.email, $event) || (ctx_r1.signUpForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 20)(15, "label", 35);
    i0.ɵɵtext(16, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.password, $event) || (ctx_r1.signUpForm.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 30)(19, "div", 20)(20, "label", 37);
    i0.ɵɵtext(21, "Account Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "select", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.role, $event) || (ctx_r1.signUpForm.role = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(23, "option", 39);
    i0.ɵɵtext(24, "User");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 40);
    i0.ɵɵtext(26, "Provider");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 20)(28, "label", 41);
    i0.ɵɵtext(29, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "select", 42);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_41_Template_select_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.signUpForm.city, $event) || (ctx_r1.signUpForm.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(31, LoginComponent_form_41_option_31_Template, 2, 2, "option", 43);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(32, LoginComponent_form_41_div_32_Template, 13, 2, "div", 44)(33, LoginComponent_form_41_div_33_Template, 4, 1, "div", 45)(34, LoginComponent_form_41_div_34_Template, 4, 1, "div", 45)(35, LoginComponent_form_41_div_35_Template, 17, 2, "div", 44)(36, LoginComponent_form_41_div_36_Template, 4, 1, "div", 45);
    i0.ɵɵelementStart(37, "button", 26);
    i0.ɵɵtext(38);
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
    i0.ɵɵadvance(8);
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
function LoginComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67)(1, "span", 68);
    i0.ɵɵtext(2, "Quick access for emergency use without a full sign-up flow.");
    i0.ɵɵelementEnd()();
} }
function LoginComponent_p_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusMessage);
} }
function LoginComponent_p_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 70);
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
        this.keralaCities = [
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
            city: 'Kochi',
            accountType: 'individual',
            businessName: '',
            category: 'plumber',
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 45, vars: 11, consts: [[1, "auth-shell"], [1, "auth-showcase"], [1, "eyebrow"], [1, "muted", "intro-copy"], [1, "showcase-grid"], [1, "showcase-card", "primary-card"], [1, "showcase-label"], [1, "showcase-card", "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "auth-card"], [1, "auth-card-head"], [1, "muted"], [1, "mode-switch"], ["type", "button", 3, "click"], ["class", "auth-form", 3, "ngSubmit", 4, "ngIf"], ["class", "helper-row", 4, "ngIf"], ["class", "status", 4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit"], [1, "field"], ["for", "mobile"], ["id", "mobile", "type", "text", "name", "mobile", "placeholder", "name@example.com or +91 98xxxxxxx", "required", "", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "placeholder", "Enter your password", "required", "", 3, "ngModelChange", "ngModel"], [1, "action-row"], ["type", "submit", 3, "disabled"], ["type", "button", 1, "ghost-button", 3, "click", "disabled"], ["for", "fullName"], ["id", "fullName", "type", "text", "name", "fullName", "placeholder", "Your full name", "required", "", 3, "ngModelChange", "ngModel"], [1, "two-col"], ["for", "signupMobile"], ["id", "signupMobile", "type", "text", "name", "signupMobile", "placeholder", "+91 98xxxxxxx", "required", "", 3, "ngModelChange", "ngModel"], ["for", "signupEmail"], ["id", "signupEmail", "type", "email", "name", "signupEmail", "placeholder", "name@example.com", 3, "ngModelChange", "ngModel"], ["for", "signupPassword"], ["id", "signupPassword", "type", "password", "name", "signupPassword", "placeholder", "Create a secure password", "required", "", 3, "ngModelChange", "ngModel"], ["for", "signupRole"], ["id", "signupRole", "name", "signupRole", 3, "ngModelChange", "ngModel"], ["value", "user"], ["value", "provider"], ["for", "signupCity"], ["id", "signupCity", "name", "signupCity", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "two-col", 4, "ngIf"], ["class", "field", 4, "ngIf"], [3, "value"], ["for", "accountType"], ["id", "accountType", "name", "accountType", 3, "ngModelChange", "ngModel"], ["value", "individual"], ["value", "community"], ["for", "locality"], ["id", "locality", "type", "text", "name", "locality", "placeholder", "Neighborhood or area", 3, "ngModelChange", "ngModel"], ["for", "communityName"], ["id", "communityName", "type", "text", "name", "communityName", "placeholder", "Apartment or association name", 3, "ngModelChange", "ngModel"], ["for", "businessName"], ["id", "businessName", "type", "text", "name", "businessName", "placeholder", "Your business name", 3, "ngModelChange", "ngModel"], ["for", "category"], ["id", "category", "name", "category", 3, "ngModelChange", "ngModel"], ["value", "plumber"], ["value", "electrician"], ["value", "medical_store"], ["value", "ambulance"], ["for", "experienceYears"], ["id", "experienceYears", "type", "number", "name", "experienceYears", "min", "1", 3, "ngModelChange", "ngModel"], ["for", "address"], ["id", "address", "type", "text", "name", "address", "placeholder", "Business address", 3, "ngModelChange", "ngModel"], [1, "helper-row"], [1, "helper-copy"], [1, "status"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "article", 1)(2, "p", 2);
            i0.ɵɵtext(3, "Connected local response");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Local help, faster and easier.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 3);
            i0.ɵɵtext(7, " Discover trusted providers, surface emergency options quickly, and switch between user and provider journeys without friction. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 4)(9, "article", 5)(10, "span", 6);
            i0.ɵɵtext(11, "Live access");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "strong");
            i0.ɵɵtext(13, "24x7 emergency-first flow");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p");
            i0.ɵɵtext(15, "Designed for fast action on mobile, tablet, and desktop with clear touch targets and bold visual feedback.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "article", 7)(17, "span", 8);
            i0.ɵɵtext(18, "10+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span", 9);
            i0.ɵɵtext(20, "Kerala city presets");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "article", 7)(22, "span", 8);
            i0.ɵɵtext(23, "4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span", 9);
            i0.ɵɵtext(25, "core service categories");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(26, "article", 10)(27, "div", 11)(28, "div")(29, "p", 2);
            i0.ɵɵtext(30, "SmartLocal access");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "h2");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "p", 12);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "div", 13)(36, "button", 14);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_36_listener() { return ctx.setMode("login"); });
            i0.ɵɵtext(37, "Login");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "button", 14);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_38_listener() { return ctx.setMode("signup"); });
            i0.ɵɵtext(39, "Sign up");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(40, LoginComponent_form_40_Template, 14, 5, "form", 15)(41, LoginComponent_form_41_Template, 39, 14, "form", 15)(42, LoginComponent_div_42_Template, 3, 0, "div", 16)(43, LoginComponent_p_43_Template, 2, 1, "p", 17)(44, LoginComponent_p_44_Template, 2, 1, "p", 18);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(32);
            i0.ɵɵtextInterpolate(ctx.mode === "login" ? "Sign in" : "Create account");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.mode === "login" ? "Pick up where you left off or continue as guest." : "Set up a user or provider account in a few quick steps.");
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
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.MinValidator, i3.NgModel, i3.NgForm], styles: [".auth-shell[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 180px);\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 560px);\n  gap: 1.4rem;\n  align-items: stretch;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.78rem;\n  color: var(--brand-rose);\n  font-weight: 800;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  line-height: 0.96;\n  margin: 0.75rem 0 0.5rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  color: #0b1730;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(2.6rem, 5vw, 4.5rem);\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 3vw, 2.7rem);\n}\n\n.auth-showcase[_ngcontent-%COMP%], \n.auth-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(18px);\n  box-shadow: var(--shadow-soft);\n  animation: _ngcontent-%COMP%_auth-fade-in 720ms ease both;\n}\n\n.auth-showcase[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 32px;\n  background:\n    linear-gradient(145deg, rgba(12, 57, 97, 0.9), rgba(14, 165, 233, 0.72)),\n    radial-gradient(circle at top right, rgba(255, 255, 255, 0.28), transparent 28%);\n  color: #ffffff;\n}\n\n.auth-showcase[_ngcontent-%COMP%]::before, \n.auth-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: auto auto -60px -40px;\n  width: 180px;\n  height: 180px;\n  border-radius: 999px;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.18), transparent 68%);\n  pointer-events: none;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: min(100%, 560px);\n  background: rgba(255, 255, 255, 0.78);\n  border-radius: 28px;\n  padding: 1.6rem;\n  animation-delay: 120ms;\n}\n\n.auth-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.35rem;\n}\n\n.mode-switch[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: 0.35rem;\n  border-radius: 999px;\n  background: rgba(15, 76, 129, 0.08);\n  border: 1px solid rgba(120, 142, 171, 0.16);\n}\n\n.mode-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 96px;\n  border: 0;\n  background: transparent;\n  color: var(--ink-soft);\n  font-weight: 800;\n  box-shadow: none;\n}\n\n.mode-switch[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  box-shadow: 0 12px 24px rgba(15, 76, 129, 0.18);\n}\n\n.intro-copy[_ngcontent-%COMP%], \n.auth-showcase[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n}\n\n.showcase-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 2rem;\n}\n\n.showcase-card[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  padding: 1.15rem;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14);\n}\n\n.primary-card[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.showcase-label[_ngcontent-%COMP%], \n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.72);\n}\n\n.showcase-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.55rem;\n  font-size: 1.28rem;\n}\n\n.showcase-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.55rem 0 0;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.55;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n  align-content: end;\n  min-height: 148px;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 0.98rem;\n}\n\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n  font: inherit;\n}\n\n.ghost-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(255, 138, 61, 0.14), rgba(14, 165, 233, 0.12));\n  color: var(--brand-deep);\n  border: 1px solid rgba(15, 76, 129, 0.16);\n  font-weight: 700;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45);\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #27415f;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \nbutton[type='submit'][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.95rem 1rem;\n  border: 1px solid var(--line-soft);\n  background: rgba(255, 255, 255, 0.88);\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  color: var(--ink-strong);\n  font-weight: 600;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #7b8794;\n  font-weight: 500;\n}\n\n.helper-row[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.9rem 1rem;\n  border-radius: 18px;\n  background: linear-gradient(135deg, rgba(14, 165, 233, 0.08), rgba(100, 216, 195, 0.12));\n}\n\n.helper-copy[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n\nbutton[type='submit'][_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  border-color: transparent;\n  font-weight: 800;\n  box-shadow: var(--shadow-card);\n}\n\n.action-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n\n.status[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #166534;\n  font-weight: 600;\n}\n\n.error[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #b91c1c;\n  font-weight: 600;\n}\n\n@media (max-width: 720px) {\n  .auth-shell[_ngcontent-%COMP%], \n   .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .auth-shell[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n\n  .auth-showcase[_ngcontent-%COMP%], \n   .auth-card[_ngcontent-%COMP%] {\n    padding: 1.15rem;\n    border-radius: 24px;\n  }\n\n  .auth-card-head[_ngcontent-%COMP%], \n   .action-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    display: grid;\n  }\n\n  .mode-switch[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .showcase-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_auth-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(26px) scale(0.98);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', template: "<section class=\"auth-shell\">\n  <article class=\"auth-showcase\">\n    <p class=\"eyebrow\">Connected local response</p>\n    <h1>Local help, faster and easier.</h1>\n    <p class=\"muted intro-copy\">\n      Discover trusted providers, surface emergency options quickly, and switch between user and provider journeys without friction.\n    </p>\n\n    <div class=\"showcase-grid\">\n      <article class=\"showcase-card primary-card\">\n        <span class=\"showcase-label\">Live access</span>\n        <strong>24x7 emergency-first flow</strong>\n        <p>Designed for fast action on mobile, tablet, and desktop with clear touch targets and bold visual feedback.</p>\n      </article>\n      <article class=\"showcase-card stat-card\">\n        <span class=\"stat-value\">10+</span>\n        <span class=\"stat-label\">Kerala city presets</span>\n      </article>\n      <article class=\"showcase-card stat-card\">\n        <span class=\"stat-value\">4</span>\n        <span class=\"stat-label\">core service categories</span>\n      </article>\n    </div>\n  </article>\n\n  <article class=\"auth-card\">\n    <div class=\"auth-card-head\">\n      <div>\n        <p class=\"eyebrow\">SmartLocal access</p>\n        <h2>{{ mode === 'login' ? 'Sign in' : 'Create account' }}</h2>\n        <p class=\"muted\">{{ mode === 'login' ? 'Pick up where you left off or continue as guest.' : 'Set up a user or provider account in a few quick steps.' }}</p>\n      </div>\n      <div class=\"mode-switch\">\n        <button type=\"button\" [class.active]=\"mode === 'login'\" (click)=\"setMode('login')\">Login</button>\n        <button type=\"button\" [class.active]=\"mode === 'signup'\" (click)=\"setMode('signup')\">Sign up</button>\n      </div>\n    </div>\n\n    <form class=\"auth-form\" *ngIf=\"mode === 'login'\" (ngSubmit)=\"submit()\">\n      <div class=\"field\">\n        <label for=\"mobile\">Mobile or Email</label>\n        <input id=\"mobile\" type=\"text\" [(ngModel)]=\"form.mobile\" name=\"mobile\" placeholder=\"name@example.com or +91 98xxxxxxx\" required />\n      </div>\n\n      <div class=\"field\">\n        <label for=\"password\">Password</label>\n        <input id=\"password\" type=\"password\" [(ngModel)]=\"form.password\" name=\"password\" placeholder=\"Enter your password\" required />\n      </div>\n\n      <div class=\"action-row\">\n        <button type=\"submit\" [disabled]=\"loading\">{{ loading ? 'Signing in...' : 'Continue' }}</button>\n        <button type=\"button\" class=\"ghost-button\" (click)=\"continueAsGuest()\" [disabled]=\"loading\">Continue as guest</button>\n      </div>\n    </form>\n\n    <form class=\"auth-form\" *ngIf=\"mode === 'signup'\" (ngSubmit)=\"signUp()\">\n      <div class=\"field\">\n        <label for=\"fullName\">Full Name</label>\n        <input id=\"fullName\" type=\"text\" [(ngModel)]=\"signUpForm.fullName\" name=\"fullName\" placeholder=\"Your full name\" required />\n      </div>\n\n      <div class=\"two-col\">\n        <div class=\"field\">\n          <label for=\"signupMobile\">Mobile Number</label>\n          <input id=\"signupMobile\" type=\"text\" [(ngModel)]=\"signUpForm.mobile\" name=\"signupMobile\" placeholder=\"+91 98xxxxxxx\" required />\n        </div>\n        <div class=\"field\">\n          <label for=\"signupEmail\">Email</label>\n          <input id=\"signupEmail\" type=\"email\" [(ngModel)]=\"signUpForm.email\" name=\"signupEmail\" placeholder=\"name@example.com\" />\n        </div>\n      </div>\n\n      <div class=\"field\">\n        <label for=\"signupPassword\">Password</label>\n        <input id=\"signupPassword\" type=\"password\" [(ngModel)]=\"signUpForm.password\" name=\"signupPassword\" placeholder=\"Create a secure password\" required />\n      </div>\n\n      <div class=\"two-col\">\n        <div class=\"field\">\n          <label for=\"signupRole\">Account Type</label>\n          <select id=\"signupRole\" [(ngModel)]=\"signUpForm.role\" name=\"signupRole\">\n            <option value=\"user\">User</option>\n            <option value=\"provider\">Provider</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label for=\"signupCity\">City</label>\n          <select id=\"signupCity\" [(ngModel)]=\"signUpForm.city\" name=\"signupCity\">\n            <option *ngFor=\"let city of keralaCities\" [value]=\"city\">{{ city }}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"two-col\" *ngIf=\"signUpForm.role === 'user'\">\n        <div class=\"field\">\n          <label for=\"accountType\">Profile Type</label>\n          <select id=\"accountType\" [(ngModel)]=\"signUpForm.accountType\" name=\"accountType\">\n            <option value=\"individual\">Individual</option>\n            <option value=\"community\">Community</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label for=\"locality\">Locality</label>\n          <input id=\"locality\" type=\"text\" [(ngModel)]=\"signUpForm.locality\" name=\"locality\" placeholder=\"Neighborhood or area\" />\n        </div>\n      </div>\n\n      <div class=\"field\" *ngIf=\"showCommunityFields\">\n        <label for=\"communityName\">Community Name</label>\n        <input id=\"communityName\" type=\"text\" [(ngModel)]=\"signUpForm.communityName\" name=\"communityName\" placeholder=\"Apartment or association name\" />\n      </div>\n\n      <div class=\"field\" *ngIf=\"showProviderFields\">\n        <label for=\"businessName\">Business Name</label>\n        <input id=\"businessName\" type=\"text\" [(ngModel)]=\"signUpForm.businessName\" name=\"businessName\" placeholder=\"Your business name\" />\n      </div>\n\n      <div class=\"two-col\" *ngIf=\"showProviderFields\">\n        <div class=\"field\">\n          <label for=\"category\">Category</label>\n          <select id=\"category\" [(ngModel)]=\"signUpForm.category\" name=\"category\">\n            <option value=\"plumber\">Plumber</option>\n            <option value=\"electrician\">Electrician</option>\n            <option value=\"medical_store\">Medical Store</option>\n            <option value=\"ambulance\">Ambulance</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label for=\"experienceYears\">Experience (Years)</label>\n          <input id=\"experienceYears\" type=\"number\" [(ngModel)]=\"signUpForm.experienceYears\" name=\"experienceYears\" min=\"1\" />\n        </div>\n      </div>\n\n      <div class=\"field\" *ngIf=\"showProviderFields\">\n        <label for=\"address\">Address</label>\n        <input id=\"address\" type=\"text\" [(ngModel)]=\"signUpForm.address\" name=\"address\" placeholder=\"Business address\" />\n      </div>\n\n      <button type=\"submit\" [disabled]=\"loading\">{{ loading ? 'Creating account...' : 'Create account' }}</button>\n    </form>\n\n    <div class=\"helper-row\" *ngIf=\"mode === 'login'\">\n      <span class=\"helper-copy\">Quick access for emergency use without a full sign-up flow.</span>\n    </div>\n\n    <p class=\"status\" *ngIf=\"statusMessage\">{{ statusMessage }}</p>\n    <p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n  </article>\n</section>\n", styles: [".auth-shell {\n  min-height: calc(100vh - 180px);\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 560px);\n  gap: 1.4rem;\n  align-items: stretch;\n}\n\n.eyebrow {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.78rem;\n  color: var(--brand-rose);\n  font-weight: 800;\n}\n\nh1,\nh2 {\n  line-height: 0.96;\n  margin: 0.75rem 0 0.5rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  color: #0b1730;\n}\n\nh1 {\n  font-size: clamp(2.6rem, 5vw, 4.5rem);\n}\n\nh2 {\n  font-size: clamp(2rem, 3vw, 2.7rem);\n}\n\n.auth-showcase,\n.auth-card {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(18px);\n  box-shadow: var(--shadow-soft);\n  animation: auth-fade-in 720ms ease both;\n}\n\n.auth-showcase {\n  padding: 2rem;\n  border-radius: 32px;\n  background:\n    linear-gradient(145deg, rgba(12, 57, 97, 0.9), rgba(14, 165, 233, 0.72)),\n    radial-gradient(circle at top right, rgba(255, 255, 255, 0.28), transparent 28%);\n  color: #ffffff;\n}\n\n.auth-showcase::before,\n.auth-card::before {\n  content: '';\n  position: absolute;\n  inset: auto auto -60px -40px;\n  width: 180px;\n  height: 180px;\n  border-radius: 999px;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.18), transparent 68%);\n  pointer-events: none;\n}\n\n.auth-card {\n  width: min(100%, 560px);\n  background: rgba(255, 255, 255, 0.78);\n  border-radius: 28px;\n  padding: 1.6rem;\n  animation-delay: 120ms;\n}\n\n.auth-card-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.35rem;\n}\n\n.mode-switch {\n  display: inline-grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: 0.35rem;\n  border-radius: 999px;\n  background: rgba(15, 76, 129, 0.08);\n  border: 1px solid rgba(120, 142, 171, 0.16);\n}\n\n.mode-switch button {\n  min-width: 96px;\n  border: 0;\n  background: transparent;\n  color: var(--ink-soft);\n  font-weight: 800;\n  box-shadow: none;\n}\n\n.mode-switch button.active {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  box-shadow: 0 12px 24px rgba(15, 76, 129, 0.18);\n}\n\n.intro-copy,\n.auth-showcase .muted {\n  color: rgba(255, 255, 255, 0.82);\n}\n\n.showcase-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 2rem;\n}\n\n.showcase-card {\n  border-radius: 24px;\n  padding: 1.15rem;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14);\n}\n\n.primary-card {\n  grid-column: 1 / -1;\n}\n\n.showcase-label,\n.stat-label {\n  display: block;\n  font-size: 0.78rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.72);\n}\n\n.showcase-card strong {\n  display: block;\n  margin-top: 0.55rem;\n  font-size: 1.28rem;\n}\n\n.showcase-card p {\n  margin: 0.55rem 0 0;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.55;\n}\n\n.stat-card {\n  display: grid;\n  gap: 0.25rem;\n  align-content: end;\n  min-height: 148px;\n}\n\n.stat-value {\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n\n.muted {\n  color: var(--ink-soft);\n  font-size: 0.98rem;\n}\n\nbutton,\ninput,\nselect {\n  border-radius: var(--radius-md);\n  font: inherit;\n}\n\n.ghost-button {\n  background: linear-gradient(135deg, rgba(255, 138, 61, 0.14), rgba(14, 165, 233, 0.12));\n  color: var(--brand-deep);\n  border: 1px solid rgba(15, 76, 129, 0.16);\n  font-weight: 700;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45);\n}\n\n.auth-form {\n  display: grid;\n  gap: 1rem;\n}\n\n.field {\n  display: grid;\n  gap: 0.45rem;\n}\n\n.two-col {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n\nlabel {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #27415f;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\ninput,\nselect,\nbutton,\nbutton[type='submit'] {\n  width: 100%;\n  padding: 0.95rem 1rem;\n  border: 1px solid var(--line-soft);\n  background: rgba(255, 255, 255, 0.88);\n}\n\ninput,\nselect {\n  color: var(--ink-strong);\n  font-weight: 600;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);\n}\n\ninput::placeholder {\n  color: #7b8794;\n  font-weight: 500;\n}\n\n.helper-row {\n  margin-top: 1rem;\n  padding: 0.9rem 1rem;\n  border-radius: 18px;\n  background: linear-gradient(135deg, rgba(14, 165, 233, 0.08), rgba(100, 216, 195, 0.12));\n}\n\n.helper-copy {\n  color: var(--ink-soft);\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n\nbutton[type='submit'] {\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  color: #ffffff;\n  border-color: transparent;\n  font-weight: 800;\n  box-shadow: var(--shadow-card);\n}\n\n.action-row {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n\n.status {\n  margin-top: 1rem;\n  color: #166534;\n  font-weight: 600;\n}\n\n.error {\n  margin-top: 1rem;\n  color: #b91c1c;\n  font-weight: 600;\n}\n\n@media (max-width: 720px) {\n  .auth-shell,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .auth-shell {\n    min-height: auto;\n  }\n\n  .auth-showcase,\n  .auth-card {\n    padding: 1.15rem;\n    border-radius: 24px;\n  }\n\n  .auth-card-head,\n  .action-row {\n    grid-template-columns: 1fr;\n    display: grid;\n  }\n\n  .mode-switch {\n    width: 100%;\n  }\n\n  .showcase-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@keyframes auth-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(26px) scale(0.98);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n"] }]
    }], () => [{ type: i1.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent" }); })();
//# sourceMappingURL=login.component.js.map