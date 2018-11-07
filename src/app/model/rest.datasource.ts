import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Product} from './product.model';
import {catchError, map, tap} from 'rxjs/internal/operators';
import {OrderModel} from './order.model';
import {Observable} from 'rxjs';

@Injectable()
export class RestDatasource implements OnInit{
  host:string =`http://localhost:3000/products`;
  auth_token: string;
  constructor(private http: HttpClient) {
  }
ngOnInit(){

}
  getProducts(): Observable<any>{
    return this.http.get(this.host);
    //   .pipe(
    //   map((respons: Response)=> respons)
    // );
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post( `http://localhost:3000/products`, product);
  }

  updateProduct(product){
    return this.http.put(`http://localhost:3000/products/${product.id}`, product);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/products/${id}`, id);
  }

  getOrders() {
    return this.http.get(`http://localhost:3000/orders`);
  }
  saveOrders(order:OrderModel): Observable<any> {
    // const data = OrderModel;
    return this.http.post(`http://localhost:3000/orders`, order);
  }
  deleteOrder(id: any): Observable<any>{
    return this.http.delete(`http://localhost:3000/orders/${id}`, id);
  }
  updateOrder(order: OrderModel): Observable<any> {
    return this.http.put(`http://localhost:3000/products/${order.id}`, order);
  }
  authenticate(user: string, pass: any){
    return this.http.post(`http://localhost:4200/admin/auth/login` , {
      name: user,
      password: pass
    }).pipe(
      map(response => {
        console.log(response)
      })
    )
  }


}
