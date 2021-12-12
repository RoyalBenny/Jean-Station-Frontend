import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

products:Array<Product>=[];
  constructor(private ps:ProductService,private ar: ActivatedRoute,private rs: RouterService) {
    this.ps.getProducts().subscribe((data)=>{this.products=data;});
  }
   
  ngOnInit(): void {
    console.log(this.ar.snapshot.params.id);
  }

  onBuy(id:string){
    console.log(id);
    this.rs.routeToBuy(id);
  }
}
