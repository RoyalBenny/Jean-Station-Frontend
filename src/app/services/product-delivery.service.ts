import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
@Injectable({
  providedIn: 'root'
})
export class ProductDeliveryService {
//   products:Array<Order>=[];
// subject:BehaviorSubject<Array<Order>> =  new BehaviorSubject(this.products)
//   constructor(private httpClient:HttpClient) {
//     this.httpClient.get<Array<Order>>("http://localhost:3000/shopping")
//      .subscribe(
//        (data)=>{
//          this.products = data;  
//          this.subject.next(this.products)      
//         });
public orderList = new BehaviorSubject<any>([]);
constructor(){}
getProducts(){
  return this.orderList.asObservable();
  // return this.httpClient.get<any>("http://localhost:3000/shopping")
}
   }
  //  getProducts():Observable<Array<Order>>
  // {
  //   return this.subject;
  // }
  
