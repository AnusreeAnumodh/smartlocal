import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import * as i0 from "@angular/core";
export class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule should only be imported in AppModule.');
        }
    }
    static { this.ɵfac = function CoreModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CoreModule)(i0.ɵɵinject(CoreModule, 12)); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CoreModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
            }
        ] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                providers: [
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: AuthInterceptor,
                        multi: true
                    }
                ]
            }]
    }], () => [{ type: CoreModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }], null); })();
//# sourceMappingURL=core.module.js.map