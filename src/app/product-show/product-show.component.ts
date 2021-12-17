import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

product:Product;
  constructor(private ps:ProductService,private ar: ActivatedRoute,private rs: RouterService,private cs:CartService) {
    var id = this.ar.snapshot.params.id;
    //this.ps.getProducts().subscribe((data)=>{this.products=data;});
    this.product = this.ps.getProduct(id);
  }
   
  ngOnInit(): void {
    console.log(this.ar.snapshot.params.id);
    
  }

  onBuy(p: Product){
    console.log(p);
    this.rs.routeToBuy(p.id);
  }
  AddToCart(i:Product)
  {
    this.cs.addToCart(i).subscribe
    (res=>{
      console.log(res);
      this.rs.routeToCart();
    },
    err=>{
      console.log(err);
    }
    );
    //this.cs.addToCart(i);
  }
}
