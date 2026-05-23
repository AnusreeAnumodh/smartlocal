import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CapitalizePipe {
    transform(value) {
        if (!value)
            return '';
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    static { this.ɵfac = function CapitalizePipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CapitalizePipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "capitalize", type: CapitalizePipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CapitalizePipe, [{
        type: Pipe,
        args: [{ name: 'capitalize' }]
    }], null, null); })();
//# sourceMappingURL=capitalize.pipe.js.map