import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  

  constructor(private httpClient:HttpClient) { 
    // this.httpClient.get<Array<Product>>("http://localhost:3000/shopping").subscribe(
    //   (data)=>{
    //     this.cartItemList=data;
    //   }
    // );
  }
  getProducts(){
    // return this.productList.asObservable();
    return this.httpClient.get<any>("http://localhost:3000/shopping")
  }

  setProduct(product : any){
    this.cartItemList.push(product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
