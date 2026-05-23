import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import * as i0 from "@angular/core";
export class AuthModule {
    static { this.ɵfac = function AuthModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AuthModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule, FormsModule, AuthRoutingModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthModule, [{
        type: NgModule,
        args: [{
                declarations: [LoginComponent],
                imports: [SharedModule, FormsModule, AuthRoutingModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthModule, { declarations: [LoginComponent], imports: [SharedModule, FormsModule, AuthRoutingModule] }); })();
//# sourceMappingURL=auth.module.js.map