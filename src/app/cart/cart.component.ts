import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems:Array<Cart>=[];
  public Total!:number;
  // constructor(private cartservice:CartService ) {}
  constructor(private rs:RouterService,private cartservice:CartService) {

   }

  ngOnInit(): void {
    this.cartservice.getCartByUserId();
   this.cartservice.getCartItems().subscribe(res=>{
     this.cartItems=res;
    //  res.forEach(element => {
    //     this.Total+=element.price* element.price- element.price* element.discount/100;
    //   });
  // this.Total=this.cartservice.getTotalPrice();
    });
  }

  onBuy(c:Cart){
    this.rs.routeToBuy(c.itemId);
  }
  RemoveItem(item:Cart){
   // this.cartservice.removeItem(item);
   //this.cartservice.removeCartItem(item);
   console.log(item);
    this.cartservice.removeCartItem(item).subscribe
    (res=>{
      console.log(res);
    },
    err=>{
      console.log(err);
    }
    
    
    );

  }

}
