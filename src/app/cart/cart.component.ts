import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CartService } from '../services/cart.service';
=======
import { RouterService } from '../services/router.service';

>>>>>>> 7837e8ba4be8d33e22a4acf787591406173fe04a
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
<<<<<<< HEAD
  public products:any=[];
  public Total!:number;
  constructor(private cartservice:CartService ) {}
=======

  constructor(private rs:RouterService) { }
>>>>>>> 7837e8ba4be8d33e22a4acf787591406173fe04a

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
  onBuy(id:string){
    this.rs.routeToBuy(id);
  }

}
