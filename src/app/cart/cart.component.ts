import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart:Array<Cart>=[];
  public Total!:number;
  // constructor(private cartservice:CartService ) {}
  constructor(private rs:RouterService,private cartservice:CartService) {

   }

  ngOnInit(): void {
   this.cartservice.getCart().subscribe(res=>{
     this.cart=res;
  // this.Total=this.cartservice.getTotalPrice();
})
  }
  
  onBuy(id:string){
    this.rs.routeToBuy(id);
  }
  RemoveItem(item:any){
   // this.cartservice.removeItem(item);
  }

}
