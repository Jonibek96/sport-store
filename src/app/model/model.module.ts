import { NgModule } from "@angular/core";
import {ProductRepository} from './product.repository';
import {StaticDatasource} from './static.datasource';
import {CartLine, CartModel} from './cart.model';
import {OrderRepository} from './order.repository';
import {OrderModel} from './order.model';
import {RestDatasource} from './rest.datasource';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    // HttpClient
  ],
  providers: [
    ProductRepository,
    CartModel,
    OrderModel,
    OrderRepository,
    StaticDatasource,
    RestDatasource,
    AuthService
    // { provide:StaticDatasource , useClass: RestDatasource }
  ]
})
export class ModelModule {

}
