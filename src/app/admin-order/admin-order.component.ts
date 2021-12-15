import { Component, OnInit } from '@angular/core';
import { Color, Order, Size, Status } from '../models/order';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
 orders:Array<Order>=new Array<Order>();
 option: string= '';
 status = Status;
  constructor(private rs:RouterService) {
    console.log(Size[1]);
    this.orders.push(new Order("1","1","1","pala",5000,new Date(),Size.M,Color.Red,Status.APPROVED,"link"));
    this.orders.push(new Order("2","1","1","pala",5000,new Date(),Size.M,Color.Red,Status.SHIPPED,"link"));

   }

  ngOnInit(): void {
    
  }
  orderclick(){
    this.rs.routeToAdminOrder();
  }
  offerclick(){
    this.rs.routeToAdminOffer();
  }
  productclick(){
    this.rs.routeToAdminProduct();
  }
  // onSelect(option:string){

  // }

  updateOrder(i:Order){
    console.log(i);
    console.log(this.orders);
  }

}
