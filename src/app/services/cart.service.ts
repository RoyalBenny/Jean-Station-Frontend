import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { User } from '../models/user';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root'
})
export class CartService  {

  private cartArray : Array<Cart> =[]
  private subject = new BehaviorSubject<Array<Cart>>(this.cartArray);
  private url: string = "http://localhost:3000/api/cart";

  constructor(private httpClient:HttpClient, private ps:ProductService) { 
    // this.httpClient.get<Array<Product>>("http://localhost:3000/shopping").subscribe(
    //   (data)=>{
    //     this.cartItemList=data;
    //   }
    // );

    
    
  }
 fetchCart(user:User){
  this.httpClient.get<Array<Cart>>(this.url+'/'+user.id).subscribe(
    (data)=>{
      this.cartArray=data;
      this.subject.next(this.cartArray);
    },
    (error)=>{
      console.log(error);
    }
  );

 }



  getCart():BehaviorSubject<Array<Cart>>{
    return this.subject;
    // return this.httpClient.get<any>("http://localhost:3000/shopping")
  }

  // setProduct(cart : Cart):Observable<Cart>{
  //   this.cartArray.push(cart);
  //   this.subject.next(this.cartArray);
  //   return this.httpClient.post<Cart>(this.url,cart);
  // }
  addtoCart(cart:Cart):Observable<Cart>{
    this.cartArray.push(cart);
    this.subject.next(this.cartArray);
    return this.httpClient.post<Cart>(this.url,cart);
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartArray.map((a:Cart)=>{
      grandTotal += 0;
    })
    this.cartArray.find
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartArray.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartArray.splice(index,1);
      }
    })
    this.subject.next(this.cartArray);
  }
  removeAllCart(){
    this.cartArray = []
    this.subject.next(this.cartArray);
  }
}
