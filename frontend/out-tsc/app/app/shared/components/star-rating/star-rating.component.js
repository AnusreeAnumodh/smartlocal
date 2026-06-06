import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function StarRatingComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function StarRatingComponent_button_2_Template_button_click_0_listener() { const star_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setRating(star_r2 + 1)); });
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵtext(2, "\u2605");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 6);
    i0.ɵɵtext(4, "\u2605");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r2.interactive);
    i0.ɵɵattribute("aria-label", "Set rating to " + (star_r2 + 1) + " out of " + ctx_r2.max);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", ctx_r2.fillWidth(star_r2));
} }
function StarRatingComponent_div_3_strong_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.displayRating);
} }
function StarRatingComponent_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.reviewLabel);
} }
function StarRatingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, StarRatingComponent_div_3_strong_1_Template, 2, 1, "strong", 8)(2, StarRatingComponent_div_3_span_2_Template, 2, 1, "span", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.reviewCount !== null);
} }
export class StarRatingComponent {
    constructor() {
        this.rating = 0;
        this.max = 5;
        this.interactive = false;
        this.showValue = true;
        this.reviewCount = null;
        this.ratingChange = new EventEmitter();
    }
    get stars() {
        return Array.from({ length: this.max }, (_, index) => index);
    }
    get displayRating() {
        return this.rating.toFixed(1);
    }
    get reviewLabel() {
        if (this.reviewCount == null) {
            return '';
        }
        return `${this.reviewCount} review${this.reviewCount === 1 ? '' : 's'}`;
    }
    fillWidth(index) {
        const fill = Math.max(0, Math.min(1, this.rating - index));
        return `${fill * 100}%`;
    }
    setRating(value) {
        if (!this.interactive) {
            return;
        }
        this.ratingChange.emit(value);
    }
    static { this.ɵfac = function StarRatingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StarRatingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StarRatingComponent, selectors: [["app-star-rating"]], inputs: { rating: "rating", max: "max", interactive: "interactive", showValue: "showValue", reviewCount: "reviewCount" }, outputs: { ratingChange: "ratingChange" }, decls: 4, vars: 5, consts: [[1, "rating-shell"], [1, "star-row"], ["type", "button", "class", "star-button", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "rating-meta", 4, "ngIf"], ["type", "button", 1, "star-button", 3, "click", "disabled"], [1, "star-base"], [1, "star-fill"], [1, "rating-meta"], [4, "ngIf"]], template: function StarRatingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, StarRatingComponent_button_2_Template, 5, 4, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, StarRatingComponent_div_3_Template, 3, 2, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("interactive", ctx.interactive);
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-label", "Rating " + ctx.displayRating + " out of " + ctx.max);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.stars);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showValue || ctx.reviewCount !== null);
        } }, dependencies: [i1.NgForOf, i1.NgIf], styles: [".rating-shell[_ngcontent-%COMP%], \n.star-row[_ngcontent-%COMP%], \n.rating-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.rating-shell[_ngcontent-%COMP%] {\n  gap: 0.65rem;\n  flex-wrap: wrap;\n}\n\n.star-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0.2rem;\n  line-height: 1;\n}\n\n.star-button[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 1rem;\n  min-height: 1rem;\n  min-width: 1rem;\n  width: 1rem;\n  height: 1rem;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  appearance: none;\n  font: inherit;\n  line-height: 1;\n  box-shadow: none;\n  overflow: visible;\n}\n\n.star-button[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 1;\n}\n\n.rating-shell.interactive[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%]:not(:disabled) {\n  cursor: pointer;\n  transform: scale(1);\n  transition: transform 140ms ease;\n}\n\n.rating-shell.interactive[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: translateY(-1px) scale(1.04);\n}\n\n.star-base[_ngcontent-%COMP%], \n.star-fill[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.05rem;\n  width: 1rem;\n  height: 1rem;\n  line-height: 1;\n}\n\n.star-base[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n}\n\n.star-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 0;\n  overflow: hidden;\n  color: #fbbf24;\n  text-shadow: 0 0 12px rgba(251, 191, 36, 0.24);\n  pointer-events: none;\n}\n\n.rating-meta[_ngcontent-%COMP%] {\n  gap: 0.45rem;\n  color: var(--ink-soft);\n  font-size: 0.9rem;\n}\n\n.rating-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink-strong);\n  font-size: 0.95rem;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StarRatingComponent, [{
        type: Component,
        args: [{ selector: 'app-star-rating', template: "<div class=\"rating-shell\" [class.interactive]=\"interactive\">\n  <div class=\"star-row\" [attr.aria-label]=\"'Rating ' + displayRating + ' out of ' + max\">\n    <button\n      type=\"button\"\n      class=\"star-button\"\n      *ngFor=\"let star of stars\"\n      [disabled]=\"!interactive\"\n      [attr.aria-label]=\"'Set rating to ' + (star + 1) + ' out of ' + max\"\n      (click)=\"setRating(star + 1)\"\n    >\n      <span class=\"star-base\">\u2605</span>\n      <span class=\"star-fill\" [style.width]=\"fillWidth(star)\">\u2605</span>\n    </button>\n  </div>\n\n  <div class=\"rating-meta\" *ngIf=\"showValue || reviewCount !== null\">\n    <strong *ngIf=\"showValue\">{{ displayRating }}</strong>\n    <span *ngIf=\"reviewCount !== null\">{{ reviewLabel }}</span>\n  </div>\n</div>\n", styles: [".rating-shell,\n.star-row,\n.rating-meta {\n  display: flex;\n  align-items: center;\n}\n\n.rating-shell {\n  gap: 0.65rem;\n  flex-wrap: wrap;\n}\n\n.star-row {\n  display: inline-flex;\n  gap: 0.2rem;\n  line-height: 1;\n}\n\n.star-button {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 1rem;\n  min-height: 1rem;\n  min-width: 1rem;\n  width: 1rem;\n  height: 1rem;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  appearance: none;\n  font: inherit;\n  line-height: 1;\n  box-shadow: none;\n  overflow: visible;\n}\n\n.star-button:disabled {\n  cursor: default;\n  opacity: 1;\n}\n\n.rating-shell.interactive .star-button:not(:disabled) {\n  cursor: pointer;\n  transform: scale(1);\n  transition: transform 140ms ease;\n}\n\n.rating-shell.interactive .star-button:not(:disabled):hover {\n  transform: translateY(-1px) scale(1.04);\n}\n\n.star-base,\n.star-fill {\n  display: block;\n  font-size: 1.05rem;\n  width: 1rem;\n  height: 1rem;\n  line-height: 1;\n}\n\n.star-base {\n  color: rgba(255, 255, 255, 0.18);\n}\n\n.star-fill {\n  position: absolute;\n  inset: 0 auto 0 0;\n  overflow: hidden;\n  color: #fbbf24;\n  text-shadow: 0 0 12px rgba(251, 191, 36, 0.24);\n  pointer-events: none;\n}\n\n.rating-meta {\n  gap: 0.45rem;\n  color: var(--ink-soft);\n  font-size: 0.9rem;\n}\n\n.rating-meta strong {\n  color: var(--ink-strong);\n  font-size: 0.95rem;\n}\n"] }]
    }], null, { rating: [{
            type: Input
        }], max: [{
            type: Input
        }], interactive: [{
            type: Input
        }], showValue: [{
            type: Input
        }], reviewCount: [{
            type: Input
        }], ratingChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StarRatingComponent, { className: "StarRatingComponent" }); })();
//# sourceMappingURL=star-rating.component.js.map