import { Component, OnInit } from '@angular/core';
import {CartModel} from '../../model/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent  {

  constructor(public cart: CartModel) { }

}
