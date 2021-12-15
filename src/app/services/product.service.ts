import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "http://localhost:5000/api/product";
  products:Array<Product>;
  subject:BehaviorSubject<Array<Product>>;

  constructor(private httpClient:HttpClient) { 
    this.products=[];
    this.subject=new BehaviorSubject(this.products);
    
  }

  fetchProductsFromServer(){
    this.httpClient.get<Array<Product>>(this.url)
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
    return this.subject;
  }

  getProduct(id:string):Product{
    return this.products.find(product=>product.id==id) as Product;
  }

  addProduct(product:Product):Observable<Product>{
    this.products.push(product);
    this.subject.next(this.products);
    return this.httpClient.post<Product>(this.url,product);
  }

  updateProduct(product:Product):Observable<Product>{
    //this.products.push(product);
    let p = this.products.find(prod=>prod.id==product.id) as Product;
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
  
}