import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductListService } from '../services/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

products:Array<Product>=[]
  constructor(private ps:ProductListService,private cs:CartService,private as: ActivatedRoute, private rs: RouterService) { 
    this.ps.getProducts().subscribe((data)=>{this.products = data;});
  }
  category: string ='';
  ngOnInit(): void {
      var value = this.as.snapshot.paramMap.get('value');
      console.log(value);
      //alert(value);
      if(value!=null)
      this.category = value.toUpperCase();
  }
  onItem(id: string) {
    console.log(id);
    this.rs.routeToProductShow(id);
  }
  //addToCart(i:any)
  //{
   // this.cs.addToCart(i);
  //}
}
