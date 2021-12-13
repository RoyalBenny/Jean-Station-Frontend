import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { ProductDeliveryService } from '../services/product-delivery.service';
@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.css']
})
export class OrderDeliveryComponent implements OnInit {
  products:Array<Order>=[]
    constructor(private ps:ProductDeliveryService) { 
      this.ps.getProducts().subscribe((data)=>{this.products = data;});
    }
    ngOnInit(): void {
    }
  }