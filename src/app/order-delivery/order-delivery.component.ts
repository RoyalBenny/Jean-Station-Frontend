import { Component, OnInit } from '@angular/core';
import { Order, Status } from '../models/order';
import { OrderService } from '../services/order.service';
import { ProductDeliveryService } from '../services/product-delivery.service';
@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.css']
})
export class OrderDeliveryComponent implements OnInit {
  orders:Array<Order>=[]
  delivStatus = Status;
    constructor(private os:OrderService) { 
    }
    ngOnInit(): void {
      this.os.getOrderByUserId().subscribe((data)=>{
        this.orders = data;
        console.log(this.orders);

      }
        );

    }
  }
