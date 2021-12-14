import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { Product } from '../models/product';
import { AddproductComponent } from '../addproduct/addproduct.component';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  products:Array<Product>=[]

  constructor(private rs:RouterService) { }

  ngOnInit(): void {
  }
  Addproduct(){
   this.rs.routeToAddproduct();
  }
  orderclick(){
    this.rs.routeToAdminOrder();
  }
  offerclick(){
    this.rs.routeToAdminOffer();
  }
  productclick(){
    this.rs.routeToAdminProduct();
  }
 
}
