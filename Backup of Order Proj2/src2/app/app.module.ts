import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDashComponent } from './order-dash/order-dash.component';
import { HttpClientModule } from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';


@NgModule({
  declarations: [
    AppComponent,
    OrderDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
