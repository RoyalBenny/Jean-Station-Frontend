import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { Category, Product, Section } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { ProductListService } from '../services/product-list.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  listdata:any;
  products:Array<Product>=[];
  category=Category;
  section=Section;
  constructor(private rs:RouterService,private ps:ProductService) {
   this.ps.getProducts().subscribe((data)=>{this.products=data;});
   this.listdata=[];
   }
 
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
  editclick(id:string){
    this.rs.routeToAdminEdit(id);
  }
  deleteclick(product:Product){
    this.ps.removeproduct(product).subscribe((data)=>{
      console.log(data);
    },
    (error)=>{
      console.log(error);
    });
  }
}
