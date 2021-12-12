import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { CartService } from '../services/cart.service';
import { ProductListService } from '../services/product-list.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
products:Array<Product>=[]
  constructor(private ps:ProductListService,private cs:CartService) { 
    this.ps.getProducts().subscribe((data)=>{this.products = data;});
  }
  
  ngOnInit(): void {
  }
  //addToCart(i:any)
  //{
   // this.cs.addToCart(i);
  //}
}
