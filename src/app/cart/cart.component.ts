import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public Total!:number;
  // constructor(private cartservice:CartService ) {}
  constructor(private rs:RouterService,private cartservice:CartService) {

   }

  ngOnInit(): void {
   this.cartservice.getProducts().subscribe(res=>{
     this.products=res;
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
