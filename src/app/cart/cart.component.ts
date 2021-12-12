import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public Total!:number;
  constructor(private cartservice:CartService ) {}

  ngOnInit(): void {
   this.cartservice.getProducts().subscribe(res=>{this.products=res;
  this.Total=this.cartservice.getTotalPrice();})

  }
  RemoveItem(item:any){
    this.cartservice.removeCartItem(item);
  }
  Emptycart(){
    this.cartservice.removeAllCart();
  }

}
