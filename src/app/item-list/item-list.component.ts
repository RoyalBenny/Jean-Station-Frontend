import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Product } from '../Product';
import { CartService } from '../services/cart.service';
import { ProductListService } from '../services/product-list.service';
=======
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

>>>>>>> 58f8360a6cda485e341c658ba5a8ca20f27c3537
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
<<<<<<< HEAD
products:Array<Product>=[]
  constructor(private ps:ProductListService,private cs:CartService) { 
    this.ps.getProducts().subscribe((data)=>{this.products = data;});
  }
  
=======

  constructor(private as: ActivatedRoute, private rs: RouterService) { }
  category: string ='';
>>>>>>> 58f8360a6cda485e341c658ba5a8ca20f27c3537
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
<<<<<<< HEAD
  //addToCart(i:any)
  //{
   // this.cs.addToCart(i);
  //}
=======


>>>>>>> 58f8360a6cda485e341c658ba5a8ca20f27c3537
}
