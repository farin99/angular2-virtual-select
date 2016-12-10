import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {ShSelectModule} from "../../../src/index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ShSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
