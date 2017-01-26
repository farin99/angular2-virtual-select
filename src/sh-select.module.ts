import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {VirtualScrollModule} from "./virtual-scroll";
import {ShSelectMenuComponent} from "./sh-select-menu.component";
import {ShSelectComponent} from "./sh-slelect.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
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
