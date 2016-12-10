/**
 * Created by yonifarin on 12/3/16.
 */
import {
    Component, OnInit, ElementRef, Input, forwardRef, ViewChild, Renderer, Output,
    EventEmitter
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@ Component({
    selector: 'sh-select',
    template:`<div class="header" [class.inline]="mode==='inline'"
     (click)="show()" [class.open]="isOpen">
    <input type="text"
           #inputFilter
           [hidden]="!isOpen"
           (click)="show()"
           [placeholder]="placeholder"
           [ngModel]="filter"
           (ngModelChange)="updateFilter($event)">
    <div (click)="show(); $event.stopPropagation()"

         *ngIf="!isOpen">
        {{selectedValues?.length ?
        (isMultiselect ?
        selectedValues?.length + ' Selected'
        : (selectedValues[0].name || selectedValues))
        : placeholder}}
    </div>
    <i class="close icon clear"
       *ngIf="showClear && selectedValues.length > 0"
       (click)="clear()"></i>
</div>
<sh-select-menu [isOpen]="isOpen"
                [rows]="rows"
                [selectedValues]="selectedValues"
                (noToggleClick)="toggleSelected($event)"></sh-select-menu>`,
    styles:[`:host{
    display: block;
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 1.0rem;
    line-height: 2rem;
    letter-spacing: 0.01rem;
    color: #212121;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

.header{
    width: 100%;
    margin: 0 !important;
    padding: 2px 30px 2px 10px;
    box-sizing: border-box;
    background-color: white;
    font-size: 1.0em;
    border-radius: 2px;
    border: 1px solid rgba(34,36,38,.15);
    vertical-align: middle;
    cursor: pointer;
}

.header.inline{
    background-color: transparent;
    width: max-content;
    border: none;
}

.header.open{
    border-radius: 2px 2px 0 0;
    box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);
    border-bottom: none;
}

div{
    display: block;
}

input[type="text"]{
    border: none !important;
    vertical-align: middle !important;
    width: 100%;
    margin: 0 !important;
    padding: 0px !important;
    box-sizing: border-box;
    background-color: white;
    font-size: 1.0rem !important;
    line-height: 2rem !important;
    letter-spacing: 0.01rem !important;
    font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;
    font-style: normal !important;
    font-weight: 300 !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;;
    text-rendering: optimizeLegibility !important;;
}

input[type="text"] { outline: none; }


[hidden]{
    display: none;
}

.clear{
    position: absolute;
    right: 2px;
    padding-left: 2px;
    padding-right: 2px;
    top:3px;
    cursor: pointer;
}`],
    host: {
        '(window:mouseup)': 'onDocumentClick($event)',
    },
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ShSelectComponent),
            multi: true
        }
    ]
})
export class ShSelectComponent implements ControlValueAccessor, OnInit {
    @Input() placeholder:string = "Type to filter";
    @Input() isMultiselect:boolean = false;
    @Input() mode:"default" | "inline" = "default";
    @Input() showClear:boolean = true;
    @ViewChild('inputFilter') inputFilter:ElementRef;
    @Input() set options(val:any[]){
        this._options = val;
        this.updateRows(val);
    }
    get options():any[]{
        return this._options;
    }
    @Output() onHide:EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() onShow:EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() onClear:EventEmitter<any[]> = new EventEmitter<any[]>();

    rows:any[] =[];
    _options:any[] = [];
    isOpen:boolean;
    filter:string;
    filteredData:any[] = [];
    _selectedValues:any[] =[];
    get selectedValues():any[]{
        return this._selectedValues;
    };

    set selectedValues(val:any[]){
        if(!val) val =[];
        this._selectedValues = val;
    }

    constructor(private element:ElementRef,
                private renderer: Renderer) {
    }

    /**
     * on click outside the view close the menu
     * @param event
     */
    onDocumentClick(event) {
        if (this.isOpen && !this.element.nativeElement.contains(event.target))
            this.hide();
    }


    updateRows(val:any[] =[]){
        this.rows = val;
    }

    updateFilter(filter){
        const lowercaseFilter = filter.toLocaleLowerCase();
        this.filteredData = this._options.filter(item =>
        !lowercaseFilter || (item.name || item).toLowerCase().indexOf(lowercaseFilter) !== -1);
        this.updateRows(this.filteredData);
    }

    toggleSelected(item){
        if(!item) return;

        if(this.isMultiselect)
            this.selectMultiple(item);
        else{
            this.selectSingle(item)
        }

        this.propagateChange(this._selectedValues);
    }

    selectSingle(item){
        this._selectedValues.splice(0, this.rows.length);
        this._selectedValues.push(item);
        this.hide();
    }

    selectMultiple(item){
        if(this.selectedValues.indexOf(item) == -1){
            this.selectedValues.push(item);
        }
        else{
            this.selectedValues.splice(this.selectedValues.indexOf(item),1);
        }
    }

    focusFilter(){
        setTimeout(()=>{
            this.renderer.invokeElementMethod(this.inputFilter.nativeElement, 'focus');
        },0);
    }

    show(){
        if(this.isOpen) return;

        this.isOpen = true;
        this.focusFilter();
        this.onShow.emit();
    }

    hide(){
        this.isOpen = false;
        this.onHide.emit();
    }

    clear(){
        this._selectedValues.splice(0, this.rows.length);
        this.propagateChange(this._selectedValues);
        this.onClear.emit();
    }

    ngOnInit() {
    }

    //////// ControlValueAccessor imp //////////

    writeValue(value: any) {
        this.selectedValues = value;
    }

    propagateChange = (_: any) => {};

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}
}
