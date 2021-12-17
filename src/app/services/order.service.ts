import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../models/order';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url:string = "http://localhost:5002/api/order";
  orders:Array<Order>;
  subject: BehaviorSubject<Array<Order>>;
  constructor(private httpClient:HttpClient) {
    this.orders = [];
    this.subject = new BehaviorSubject(this.orders);
    this.httpClient.get<Array<Order>>(this.url)
    .subscribe(
      (data)=>{
        this.orders = data;  
        this.subject.next(this.orders)      
       },
        (error)=>{
          console.log(error);
        }
       );
  }

  getOrders():BehaviorSubject<Array<Order>>{
    return this.subject;
  }

  addOrder(order:Order):Observable<Order>{
    // let order = new Order('','1',
    // product.id,product.name,product.price,product.category,product.imageUrl,product.description,product.quantity,
    // product.discount,product.section,product.status);
    order.color = parseInt(order.color.toString());
    order.size = parseInt(order.size.toString());

    console.log(order);
    this.orders.push(order);
    this.subject.next(this.orders);
    return this.httpClient.post<Order>(this.url,order);
  }

  updateOrderStatus(order:Order):Observable<Order>{
    order.status = parseInt(order.status.toString());
    let o = this.orders.find(ord=>ord.id==order.id) as Order;
    o.status=order.status;
    return this.httpClient.put<Order>(this.url+'/'+order.id,order);
  }

  
}
