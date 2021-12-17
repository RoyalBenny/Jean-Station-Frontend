import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
 orders:Array<Order>=[]
  constructor(private rs:RouterService,private os:OrderService) {

   }

  ngOnInit(): void {
    this.os.getOrders().subscribe(res=>{
      this.orders=res;
      console.log(this.orders);

    });
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

  onUpdate(item:Order){
    this.os.updateOrderStatus(item).subscribe(res=>{
      console.log(res);
    },
    err=>{
      console.log(err);
    }
    );
  }

}
