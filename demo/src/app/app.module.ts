import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {SingleSelectComponent} from "./samples/single-select/single-select";
import {SingleSelectObjectsComponent} from "./samples/single-select-objects/single-select-objects";
import {ShCodeViewer} from "../code-viewer/code-viewer.module";
import {ShSelectModule} from "../../../src";

@NgModule({
  declarations: [
    AppComponent,
    SingleSelectComponent,
    SingleSelectObjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ShSelectModule,
    ShCodeViewer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
