"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var virtual_scroll_1 = require("./virtual-scroll");
var ShSelectMenuComponent = (function () {
    function ShSelectMenuComponent() {
        this.noToggleClick = new core_1.EventEmitter();
        this.math = Math;
    }
    Object.defineProperty(ShSelectMenuComponent.prototype, "rows", {
        set: function (val) {
            if (this.virtualScrollElm) {
                this.virtualScrollElm.scrollInto(this._rows[0]);
            }
            this._rows = val;
            if (this.virtualScrollElm) {
                this.virtualScrollElm.refresh();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ShSelectMenuComponent.prototype.toggleSelected = function (row) {
        this.noToggleClick.emit(row);
    };
    return ShSelectMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ShSelectMenuComponent.prototype, "selectedValues", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ShSelectMenuComponent.prototype, "isOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ShSelectMenuComponent.prototype, "noToggleClick", void 0);
__decorate([
    core_1.ViewChild(virtual_scroll_1.VirtualScrollComponent),
    __metadata("design:type", virtual_scroll_1.VirtualScrollComponent)
], ShSelectMenuComponent.prototype, "virtualScrollElm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ShSelectMenuComponent.prototype, "rows", null);
ShSelectMenuComponent = __decorate([
    core_1.Component({
        selector: 'sh-select-menu',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: "\n        <div class=\"menu\" *ngIf=\"isOpen && _rows\" style=\"min-height: 35px;background-color: white\">\n          <!--virtual-->\n          <virtual-scroll [items]=\"_rows\" (update)=\"viewPortItems = $event\"\n            [style.height]=\"math.min(290,38 * _rows.length) + 'px'\"\n            style=\"display: block\">         \n            <div class=\"item\"\n                 *ngFor=\"let row of viewPortItems\"\n                 [class.selected]=\"selectedValues?.indexOf(row) !== -1\"\n                 (click)=\"toggleSelected(row)\">\n              {{row.name || row}}\n            </div>\n          </virtual-scroll>\n        </div>",
        styles: [".menu{\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  background-color: white;\n  width: 100%;\n  max-height: 300px;\n  overflow: auto;\n  box-sizing: border-box;\n  z-index: 999;\n  box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);\n  border-bottom: 1px solid rgba(34,36,38,.15);\n  border-left: 1px solid rgba(34,36,38,.15);\n  border-right: 1px solid rgba(34,36,38,.15);\n  border-radius: 0 0 2px 2px;\n  min-width: max-content;\n}\n\n.item{\n  padding: 4px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.item:hover{\n  background-color: #efefef;\n}\n\n\n.item.selected{\n  font-weight: 900;\n}"]
    })
], ShSelectMenuComponent);
exports.ShSelectMenuComponent = ShSelectMenuComponent;
//# sourceMappingURL=sh-select-menu.component.js.map