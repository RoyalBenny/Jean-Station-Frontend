import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Products } from '../Product'
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
=======
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { RouterService } from '../services/router.service';
>>>>>>> 313815d35ac045f948ce71056c2169814f81882e
@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
<<<<<<< HEAD
products:Array<Products>=[];
  constructor(private ps:ProductService) {
    this.ps.getProducts().subscribe((data)=>{this.products=data;});
   }
=======

  constructor(private ar: ActivatedRoute,private rs: RouterService) { }
>>>>>>> 313815d35ac045f948ce71056c2169814f81882e

  ngOnInit(): void {
    console.log(this.ar.snapshot.params.id);
  }

  onBuy(id:string){
    console.log(id);
    this.rs.routeToBuy(id);
  }
}
