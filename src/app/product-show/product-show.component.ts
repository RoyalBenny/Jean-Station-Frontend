import { Component, OnInit } from '@angular/core';
import { Products } from '../Product'
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
products:Array<Products>=[];
  constructor(private ps:ProductService) {
    this.ps.getProducts().subscribe((data)=>{this.products=data;});
   }

  ngOnInit(): void {
  }

}
