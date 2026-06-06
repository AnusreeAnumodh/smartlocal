import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageShellComponent } from './components/page-shell/page-shell.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import * as i0 from "@angular/core";
export class SharedModule {
    static { this.ɵfac = function SharedModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SharedModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule, CommonModule, RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [PageShellComponent, StarRatingComponent, CapitalizePipe],
                imports: [CommonModule, RouterModule],
                exports: [CommonModule, RouterModule, PageShellComponent, StarRatingComponent, CapitalizePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [PageShellComponent, StarRatingComponent, CapitalizePipe], imports: [CommonModule, RouterModule], exports: [CommonModule, RouterModule, PageShellComponent, StarRatingComponent, CapitalizePipe] }); })();
//# sourceMappingURL=shared.module.js.map