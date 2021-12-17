import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  //private cartList: Array<Cart> = [];
  private cartItemList : Array<Cart> =[]
  private subject = new BehaviorSubject<Array<Cart>>(this.cartItemList);
  private url: string = "http://localhost:5000/api/cart";

  constructor(private httpClient:HttpClient) { 
    // this.httpClient.get<Array<Product>>("http://localhost:3000/shopping").subscribe(
    //   (data)=>{
    //     this.cartItemList=data;
    //   }
    // );

    httpClient.get<Array<Cart>>(this.url).subscribe(
      (data)=>{
        this.cartItemList=data;
        this.subject.next(this.cartItemList);
      },
      (error)=>{
        console.log(error);
      }
    );
    
  }
  getCartItems():BehaviorSubject<Array<Cart>>{
    return this.subject;
    // return this.httpClient.get<any>("http://localhost:3000/shopping")
  }

  setProduct(product : any){
    // this.cartItemList.push(product);
    // this.productList.next(product);
  }
  // addtoCart(product : any){
  //   this.cartItemList.push(product);
  //   this.subject.next(this.cartItemList);
  //   this.getTotalPrice();
  //   console.log(this.cartItemList)
  // }
  addToCart(product:Product):Observable<Cart>{
    let cart = new Cart('','1',
    product.id,product.name,product.price,product.category,product.imageUrl,product.description,product.quantity,
    product.discount,product.section,product.status);
    return this.httpClient.post<Cart>(this.url,cart);
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:Product)=>{
      grandTotal += a.price- a.price*a.discount/100;
    })
    return grandTotal;
  }
  removeCartItem(cart: Cart): Observable<Cart>{
    // this.cartItemList.map((a:any, index:any)=>{
    //   if(product.id=== a.id){
    //     this.cartItemList.splice(index,1);
    //   }
    // })
    // this.subject.next(this.cartItemList);
    this.cartItemList.splice(this.cartItemList.indexOf(cart),1);
    // var p = this.cartItemList.find(a=>a.id==cart.id);
    // var index = this.cartItemList.indexOf(p as Product);
    // this.cartItemList.splice(index,1);
    this.subject.next(this.cartItemList);
    return this.httpClient.delete<Cart>(this.url+"/"+cart.id);
  }
  // removeAllCart(){
  //   this.cartItemList = []
  //   this.subject.next(this.cartItemList);
  // }
}
