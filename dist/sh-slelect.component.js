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
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var ShSelectComponent = (function () {
    function ShSelectComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.rows = [];
        this._options = [];
        this.filteredData = [];
        this.placeholder = "Type to filter";
        this.isMultiselect = false;
        this.mode = "default";
        this.showClear = true;
        this._selectedValues = [];
        this.onHide = new core_1.EventEmitter();
        this.onShow = new core_1.EventEmitter();
        this.onClear = new core_1.EventEmitter();
        this.propagateChange = function (_) { };
    }
    Object.defineProperty(ShSelectComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            this._options = val;
            this.updateRows(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShSelectComponent.prototype, "selectedValues", {
        get: function () {
            return this._selectedValues;
        },
        set: function (val) {
            if (!val)
                val = [];
            this._selectedValues = val;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ShSelectComponent.prototype.onDocumentClick = function (event) {
        if (this.isOpen && !this.element.nativeElement.contains(event.target))
            this.hide();
    };
    ShSelectComponent.prototype.updateRows = function (val) {
        if (!val)
            val = [];
        this.rows = val;
    };
    ShSelectComponent.prototype.updateFilter = function (filter) {
        var lowercaseFilter = filter.toLocaleLowerCase();
        this.filteredData = this._options.filter(function (item) {
            return !lowercaseFilter || (item.name || item).toLowerCase().indexOf(lowercaseFilter) !== -1;
        });
        this.updateRows(this.filteredData);
    };
    ShSelectComponent.prototype.writeValue = function (value) {
        this.selectedValues = value;
    };
    ShSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ShSelectComponent.prototype.registerOnTouched = function () { };
    ShSelectComponent.prototype.toggleSelected = function (item) {
        if (!item)
            return;
        if (this.isMultiselect)
            this.selectMultiple(item);
        else {
            this.selectSingle(item);
        }
        this.propagateChange(this._selectedValues);
    };
    ShSelectComponent.prototype.selectSingle = function (item) {
        this._selectedValues.splice(0, this.rows.length);
        this._selectedValues.push(item);
        this.hide();
    };
    ShSelectComponent.prototype.selectMultiple = function (item) {
        if (this.selectedValues.indexOf(item) == -1) {
            this.selectedValues.push(item);
        }
        else {
            this.selectedValues.splice(this.selectedValues.indexOf(item), 1);
        }
    };
    ShSelectComponent.prototype.focusFilter = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.inputFilter.nativeElement, 'focus');
        }, 0);
    };
    ShSelectComponent.prototype.show = function () {
        if (this.isOpen)
            return;
        this.isOpen = true;
        this.focusFilter();
        this.onShow.emit();
    };
    ShSelectComponent.prototype.hide = function () {
        this.isOpen = false;
        this.onHide.emit();
    };
    ShSelectComponent.prototype.clear = function () {
        this._selectedValues.splice(0, this.rows.length);
        this.propagateChange(this._selectedValues);
        this.onClear.emit();
    };
    ShSelectComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ShSelectComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ShSelectComponent.prototype, "isMultiselect", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ShSelectComponent.prototype, "mode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ShSelectComponent.prototype, "showClear", void 0);
    __decorate([
        core_1.ViewChild('inputFilter'), 
        __metadata('design:type', core_1.ElementRef)
    ], ShSelectComponent.prototype, "inputFilter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], ShSelectComponent.prototype, "options", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ShSelectComponent.prototype, "onHide", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ShSelectComponent.prototype, "onShow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ShSelectComponent.prototype, "onClear", void 0);
    ShSelectComponent = __decorate([
        core_1.Component({
            selector: 'sh-select',
            template: "<div class=\"header\" [class.inline]=\"mode==='inline'\"\n     (click)=\"show()\" [class.open]=\"isOpen\">\n    <input type=\"text\"\n           #inputFilter\n           [hidden]=\"!isOpen\"\n           (click)=\"show()\"\n           [placeholder]=\"placeholder\"\n           [ngModel]=\"filter\"\n           (ngModelChange)=\"updateFilter($event)\">\n    <div (click)=\"show(); $event.stopPropagation()\"\n\n         *ngIf=\"!isOpen\">\n        {{selectedValues?.length ?\n        (isMultiselect ?\n        selectedValues?.length + ' Selected'\n        : (selectedValues[0].name || selectedValues))\n        : placeholder}}\n    </div>\n    <i class=\"close icon clear\"\n       *ngIf=\"showClear && selectedValues.length > 0\"\n       (click)=\"clear()\"></i>\n</div>\n<sh-select-menu [isOpen]=\"isOpen\"\n                [rows]=\"rows\"\n                [selectedValues]=\"selectedValues\"\n                (noToggleClick)=\"toggleSelected($event)\"></sh-select-menu>",
            styles: [":host{\n    display: block;\n    position: relative;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 1.0rem;\n    line-height: 2rem;\n    letter-spacing: 0.01rem;\n    color: #212121;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n}\n\n.header{\n    width: 100%;\n    margin: 0 !important;\n    padding: 2px 30px 2px 10px;\n    box-sizing: border-box;\n    background-color: white;\n    font-size: 1.0em;\n    border-radius: 2px;\n    border: 1px solid rgba(34,36,38,.15);\n    vertical-align: middle;\n    cursor: pointer;\n}\n\n.header.inline{\n    background-color: transparent;\n    width: max-content;\n    border: none;\n}\n\n.header.open{\n    border-radius: 2px 2px 0 0;\n    box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);\n    border-bottom: none;\n}\n\ndiv{\n    display: block;\n}\n\ninput[type=\"text\"]{\n    border: none !important;\n    vertical-align: middle !important;\n    width: 100%;\n    margin: 0 !important;\n    padding: 0px !important;\n    box-sizing: border-box;\n    background-color: white;\n    font-size: 1.0rem !important;\n    line-height: 2rem !important;\n    letter-spacing: 0.01rem !important;\n    font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\n    font-style: normal !important;\n    font-weight: 300 !important;\n    -webkit-font-smoothing: antialiased !important;\n    -moz-osx-font-smoothing: grayscale !important;;\n    text-rendering: optimizeLegibility !important;;\n}\n\ninput[type=\"text\"] { outline: none; }\n\n\n[hidden]{\n    display: none;\n}\n\n.clear{\n    position: absolute;\n    right: 2px;\n    padding-left: 2px;\n    padding-right: 2px;\n    top:3px;\n    cursor: pointer;\n}"],
            host: {
                '(window:mouseup)': 'onDocumentClick($event)',
            },
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return ShSelectComponent; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ShSelectComponent);
    return ShSelectComponent;
}());
exports.ShSelectComponent = ShSelectComponent;
//# sourceMappingURL=sh-slelect.component.js.map