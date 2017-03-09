import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {VirtualScrollModule} from "./virtual-scroll";
import {ShSelectMenuComponent} from "./sh-select-menu.component";
import {ShSelectComponent} from "./sh-select.component";
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
export class ShSelectRootModule { }

export class ShSelectModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShSelectRootModule
        };
    }
}
