import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  products:Array<Product>=[];
subject:BehaviorSubject<Array<Product>> =  new BehaviorSubject(this.products)
  constructor(private httpClient:HttpClient) {
    this.httpClient.get<Array<Product>>("http://localhost:5003/shopping")
     .subscribe(
       (data)=>{
         this.products = data;  
         this.subject.next(this.products)      
        });
   }
   getProducts():Observable<Array<Product>>
  {
    return this.subject;
  }
  // removeproduct(product:any){
  //   this.products.map((a:any,index:any)=>{
  //     if(product.id==a.id){
  //       this.products.splice(index,1);
  //     }
  //   })
  // }
}
