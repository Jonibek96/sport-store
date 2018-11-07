import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AdminComponent} from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './auth.guard';
import {AuthService} from '../model/auth.service';
import {ProductTableComponent} from './product-table/product-table.component';
import {ProductEditorComponent} from './product-editor/product-editor.component';
import {OrderTableComponent} from './order-table/order-table.component';
import {MatIconModule, MatTooltipModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routing: Routes = [
  { path: "auth", component: AuthComponent },
  { path: "main", component: AdminComponent,
    children: [
      { path: "products/:mode/:id", component: ProductEditorComponent },
      { path: "products/:mode", component: ProductEditorComponent },
      { path: "products", component: ProductTableComponent },
      { path: "orders", component: OrderTableComponent },
      { path: "**", redirectTo: "products" }
    ]},
   { path: "**", redirectTo: "auth" }
];
@NgModule({
  imports: [
    RouterModule.forChild(routing),
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTableComponent,
    OrderTableComponent,
    ProductEditorComponent
  ],

})
export class AdminModule { }
