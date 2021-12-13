import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
 orders:Array<Order>=[]
  constructor(private rs:RouterService) { }

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

}
