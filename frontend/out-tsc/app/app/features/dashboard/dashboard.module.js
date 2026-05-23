import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import * as i0 from "@angular/core";
export class DashboardModule {
    static { this.ɵfac = function DashboardModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DashboardModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [SharedModule, FormsModule, DashboardRoutingModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardModule, [{
        type: NgModule,
        args: [{
                declarations: [DashboardHomeComponent],
                imports: [SharedModule, FormsModule, DashboardRoutingModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DashboardModule, { declarations: [DashboardHomeComponent], imports: [SharedModule, FormsModule, DashboardRoutingModule] }); })();
//# sourceMappingURL=dashboard.module.js.map