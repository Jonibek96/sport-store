import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from './store/store.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {StoreComponent} from './store/store/store.component';

import {StoreFirstGuard} from './storeFirst.guard';
import {CartDetailComponent} from './store/cart-detail/cart-detail.component';
import {CheckoutComponent} from './store/checkout/checkout.component';
import {HttpClientModule} from '@angular/common/http';
import { FotoComponent } from './foto/foto.component';
import {Serv} from './foto/serv';



@NgModule({
  declarations: [
    AppComponent,
    FotoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'store', component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]

      },
      {
        path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule",
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [StoreFirstGuard, Serv],
  bootstrap: [AppComponent]
})
export class AppModule { }
