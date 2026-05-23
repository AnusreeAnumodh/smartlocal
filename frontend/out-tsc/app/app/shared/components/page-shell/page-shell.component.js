import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function PageShellComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.subtitle);
} }
export class PageShellComponent {
    constructor() {
        this.title = '';
        this.subtitle = '';
    }
    static { this.ɵfac = function PageShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PageShellComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PageShellComponent, selectors: [["app-page-shell"]], inputs: { title: "title", subtitle: "subtitle" }, ngContentSelectors: _c0, decls: 13, vars: 2, consts: [[1, "page-shell"], [1, "page-shell-header"], [1, "shell-kicker"], [4, "ngIf"], ["aria-hidden", "true", 1, "shell-badge"]], template: function PageShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
            i0.ɵɵtext(4, "Live workspace");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h2");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, PageShellComponent_p_7_Template, 2, 1, "p", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵelement(9, "span")(10, "span")(11, "span");
            i0.ɵɵelementEnd()();
            i0.ɵɵprojection(12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subtitle);
        } }, dependencies: [i1.NgIf], styles: [".page-shell[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.78)),\n    radial-gradient(circle at top right, rgba(255, 138, 61, 0.12), transparent 24%);\n  border: 1px solid rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(16px);\n  border-radius: var(--radius-xl);\n  padding: 1.4rem 1.45rem;\n  box-shadow: var(--shadow-soft);\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n  letter-spacing: -0.03em;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ink-soft);\n}\n\n.page-shell-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.15rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n.shell-kicker[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: var(--brand-rose);\n}\n\n.shell-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.66);\n  border: 1px solid rgba(120, 142, 171, 0.14);\n}\n\n.shell-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.08);\n}\n\n.shell-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  background: linear-gradient(135deg, var(--brand-warm), #ffc857);\n}\n\n.shell-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  background: linear-gradient(135deg, var(--brand-rose), #ff8fab);\n}\n\n@media (max-width: 720px) {\n  .page-shell[_ngcontent-%COMP%] {\n    padding: 1.1rem;\n    border-radius: 22px;\n  }\n\n  .page-shell-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageShellComponent, [{
        type: Component,
        args: [{ selector: 'app-page-shell', template: "<section class=\"page-shell\">\n  <header class=\"page-shell-header\">\n    <div>\n      <p class=\"shell-kicker\">Live workspace</p>\n      <h2>{{ title }}</h2>\n      <p *ngIf=\"subtitle\">{{ subtitle }}</p>\n    </div>\n    <div class=\"shell-badge\" aria-hidden=\"true\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </header>\n  <ng-content></ng-content>\n</section>\n", styles: [".page-shell {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.78)),\n    radial-gradient(circle at top right, rgba(255, 138, 61, 0.12), transparent 24%);\n  border: 1px solid rgba(255, 255, 255, 0.82);\n  backdrop-filter: blur(16px);\n  border-radius: var(--radius-xl);\n  padding: 1.4rem 1.45rem;\n  box-shadow: var(--shadow-soft);\n}\n\nh2 {\n  margin: 0;\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n  letter-spacing: -0.03em;\n}\n\np {\n  margin: 0;\n  color: var(--ink-soft);\n}\n\n.page-shell-header {\n  margin-bottom: 1.15rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n.shell-kicker {\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: var(--brand-rose);\n}\n\n.shell-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.66);\n  border: 1px solid rgba(120, 142, 171, 0.14);\n}\n\n.shell-badge span {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--brand-deep), var(--brand-vivid));\n  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.08);\n}\n\n.shell-badge span:nth-child(2) {\n  background: linear-gradient(135deg, var(--brand-warm), #ffc857);\n}\n\n.shell-badge span:nth-child(3) {\n  background: linear-gradient(135deg, var(--brand-rose), #ff8fab);\n}\n\n@media (max-width: 720px) {\n  .page-shell {\n    padding: 1.1rem;\n    border-radius: 22px;\n  }\n\n  .page-shell-header {\n    flex-direction: column;\n  }\n}\n"] }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PageShellComponent, { className: "PageShellComponent" }); })();
//# sourceMappingURL=page-shell.component.js.map