import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import {StoreComponent} from './store/store.component';
import {CounterDirective} from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import {MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {RouterModule} from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],

  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }
