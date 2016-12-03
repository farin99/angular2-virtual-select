import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {VirtualScrollModule} from "angular2-virtual-scroll";
import {ShSelectMenuComponent} from "./sh-select-menu.component";
import {ShSelectComponent} from "./sh-slelect.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        VirtualScrollModule
    ],
    declarations: [
        ShSelectComponent,
        ShSelectMenuComponent
    ],
    exports: [ShSelectComponent]
})
export class ShSelectModule {
}
