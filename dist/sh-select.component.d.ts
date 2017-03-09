/**
 * Created by yonifarin on 12/3/16.
 */
import { OnInit, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";
export declare class ShSelectComponent implements ControlValueAccessor, OnInit {
    private element;
    private renderer;
    placeholder: string;
    isMultiselect: boolean;
    rawOptionGenerator: Function;
    mode: "default" | "inline";
    showClear: boolean;
    disabled: boolean;
    inputFilter: ElementRef;
    options: any[];
    onHide: EventEmitter<any[]>;
    onShow: EventEmitter<any[]>;
    onClear: EventEmitter<any[]>;
    rows: any[];
    _options: any[];
    isOpen: boolean;
    filter: string;
    filteredData: any[];
    _selectedValues: any[];
    selectedValues: any[];
    constructor(element: ElementRef, renderer: Renderer);
    /**
     * on click outside the view close the menu
     * @param event
     */
    onDocumentClick(event: any): void;
    updateRows(val?: any[]): void;
    updateFilter(filter: any): void;
    clearFilter(): void;
    toggleSelected(item: any): void;
    selectSingle(item: any): void;
    selectMultiple(item: any): void;
    focusFilter(): void;
    show(): void;
    hide(): void;
    clear(): void;
    ngOnInit(): void;
    writeValue(value: any): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}
export declare function ShSelectProvider(): any;
