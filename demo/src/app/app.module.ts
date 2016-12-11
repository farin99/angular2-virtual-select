import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {ShSelectModule} from "../../../src/index";
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import {SingleSelectComponent} from "./samples/single-select/single-select";
import {SingleSelectObjectsComponent} from "./samples/single-select-objects/single-select-objects";

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
    HighlightJsModule
  ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
