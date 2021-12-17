import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "http://localhost:5003/api/product";
  products:Array<Product>;
  subject:BehaviorSubject<Array<Product>>;

  constructor(private httpClient:HttpClient) { 
    this.products=[];
    this.subject=new BehaviorSubject(this.products);
    
  }

  fetchProductsFromServer(){
    return this.httpClient.get<Array<Product>>(this.url,
      {
        // headers:{
        //   'Access-Control-Allow-Origin': '*',    
        //   'Access-Control-Allow-Credentials': 'true',    
        //   // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',    
        //   // 'Access-Control-Allow-Headers' : 'Origin, Content - Type, Accept'
        // },
        
      })
    .subscribe(
      (data)=>{
        this.products = data;
        this.subject.next(this.products)
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  getProducts():BehaviorSubject<Array<Product>>
  {
    this.fetchProductsFromServer();
    return this.subject;
  }

  getProduct(id:string):Product{
    if(this.products.length<0) this.getProducts().subscribe(
      (data)=>{
      return this.products.find(product=>product.id==id) as Product;
      }
    );
    return this.products.find(product=>product.id==id) as Product;
  }

  addProduct(product:Product):Observable<Product>{
    product.price = parseInt(product.price.toString());
    product.discount = parseInt(product.discount.toString());
    product.quantity = parseInt(product.quantity.toString());
    product.section = parseInt(product.section.toString());
    product.category = parseInt(product.category.toString());
    console.log("len"+this.products.length);
    this.products.push(product);
    console.log("after len"+this.products.length);
    console.log(product);
    this.subject.next(this.products);
    return this.httpClient.post<Product>(this.url,product);
  }

  updateProduct(product:Product):Observable<Product>{
    //this.products.push(product);
    product.price = parseInt(product.price.toString());
    product.discount = parseInt(product.discount.toString());
    product.quantity = parseInt(product.quantity.toString());
    product.section = parseInt(product.section.toString());
    product.category = parseInt(product.category.toString());
    let p = this.products.find(prod=>prod.id==product.id) as Product;
    console.log("p");
    console.log(p);
    p.name=product.name;
    p.price=product.price;
    p.category=product.category;
    p.imageUrl=product.imageUrl;
    p.description=product.description;
    p.quantity=product.quantity;
    p.discount=product.discount;
    p.section=product.section;
    return this.httpClient.put<Product>(this.url+"/"+product.id,product);
  }

  deleteProduct(id:string):Observable<Product>{
    let p = this.products.find(prod=>prod.id==id) as Product;
    this.products.splice(this.products.indexOf(p),1);
    this.subject.next(this.products);
    return this.httpClient.delete<Product>(this.url+"/"+id);
  }
  removeproduct(product:Product){
    this.products.map((a:any,index:any)=>{
      if(product.id==a.id){
        this.products.splice(index,1);
      }
    })
    this.subject.next(this.products);
    return this.httpClient.delete<Product>(this.url+"/"+product.id);
}
}
