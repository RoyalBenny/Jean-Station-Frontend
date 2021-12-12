import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Array<Products>=[];
  subject:BehaviorSubject<Array<Products>> = new BehaviorSubject(this.products)
  constructor(private httpClient:HttpClient) { 
    this.httpClient.get<Array<Products>>("http://localhost:3000/shopping")
    .subscribe(
      (data)=>{
        this.products =data;
        this.subject.next(this.products)
      }
    )
  }
  getProducts():Observable<Array<Products>>
  {
    return this.subject;
  }
}
