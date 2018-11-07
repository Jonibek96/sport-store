import { Component, OnInit } from '@angular/core';
import {OrderRepository} from '../../model/order.repository';
import {OrderModel} from '../../model/order.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  includeShipped = false;
  constructor(private repository: OrderRepository) {}

  ngOnInit() {
  }
  getOrders(): OrderModel[] {
    return this.repository.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }
  markShipped(order: OrderModel){
    order.shipped = true;
    this.repository.updateOrder(order);
  }
  delete(id: number) {
    this.repository.deleteOrder(id);
  }
}
