import { EventEmitter } from "@angular/core";
import { VirtualScrollComponent } from "angular2-virtual-scroll";
export declare class ShSelectMenuComponent {
    selectedValues: any[];
    isOpen: boolean;
    noToggleClick: EventEmitter<any>;
    virtualScrollElm: VirtualScrollComponent;
    math: any;
    _rows: any[];
    rows: any[];
    toggleSelected(row: any): void;
}
