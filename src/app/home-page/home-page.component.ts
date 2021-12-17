import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private ps: ProductService, private rs: RouterService, private cs: CartService) { }
  products: Array<Product> = [];
  ngOnInit(): void {

    this.ps.getProducts().subscribe((data) => {
      this.products = data.slice(0, 6);
      console.log(this.products);
    });

  }

  addToCart(p: Product) {
    this.cs.addToCart(p).subscribe
      (res => {
        console.log(res);
        this.rs.routeToCart();
      },
      err => {
        console.log(err);
      }
    );
  }

}
