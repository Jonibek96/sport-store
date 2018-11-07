import {Injectable} from '@angular/core';
import {OrderModel} from './order.model';
import {RestDatasource} from './rest.datasource';

@Injectable()
export class OrderRepository {
  private orders: OrderModel[] =[];
  loaded: boolean = false;
  constructor(private datasource: RestDatasource){}
  loadOrders() {
    this.loaded = true;
    this.datasource.getOrders()
      .subscribe((orders: any) => this.orders = orders);
  }
  getOrders(): OrderModel[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }
  saveOrder(order: OrderModel){
    return this.datasource.saveOrders(order)
  }

  updateOrder(order: OrderModel){
    this.datasource.updateOrder(order).subscribe(order => {
      this.orders.splice(this.orders.
      findIndex(o => o.id == order.id), 1, order);
    });
  }

  deleteOrder(id: number) {
    this.datasource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id));

    });
  }
}
