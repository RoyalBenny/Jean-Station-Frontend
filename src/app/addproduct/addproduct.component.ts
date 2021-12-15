import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  listdata:any;
  products: Array<Product>;
  constructor(private ps:ProductService) { 
    this.products = new Array<Product>();
    this.ps.getProducts().subscribe((data)=>{this.products=data;});
    this.listdata=[];

  }

  ngOnInit(): void {
  }
  Additem(){
    this.listdata.push()
    //this.ps.addProduct(product);

  }
}
