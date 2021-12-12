import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductDeliveryService } from '../services/product-delivery.service';
@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.css']
})
export class OrderDeliveryComponent implements OnInit {
  products:Array<Product>=[]
    constructor(private ps:ProductDeliveryService) { 
      this.ps.getProducts().subscribe((data)=>{this.products = data;});
    }
    
    ngOnInit(): void {
    }
    
  }