"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var virtual_scroll_1 = require("./virtual-scroll");
var sh_select_menu_component_1 = require("./sh-select-menu.component");
var sh_select_component_1 = require("./sh-select.component");
var common_1 = require("@angular/common");
var ShSelectRootModule = (function () {
    function ShSelectRootModule() {
    }
    return ShSelectRootModule;
}());
ShSelectRootModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            virtual_scroll_1.VirtualScrollModule
        ],
        declarations: [
            sh_select_component_1.ShSelectComponent,
            sh_select_menu_component_1.ShSelectMenuComponent
        ],
        exports: [sh_select_component_1.ShSelectComponent]
    })
], ShSelectRootModule);
exports.ShSelectRootModule = ShSelectRootModule;
var ShSelectModule = (function () {
    function ShSelectModule() {
    }
    ShSelectModule.forRoot = function () {
        return {
            ngModule: ShSelectRootModule
        };
    };
    return ShSelectModule;
}());
exports.ShSelectModule = ShSelectModule;
//# sourceMappingURL=sh-select.module.js.map