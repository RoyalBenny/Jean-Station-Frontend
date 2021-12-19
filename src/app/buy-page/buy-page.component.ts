import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {
  product:Product;
  price :number;
  address = "";
  order: Order = new Order( "", "", "", "", 0, new Date(), 0, 0, 0, "");
  constructor(private rs:RouterService, private os: OrderService,private ar: ActivatedRoute, private ps: ProductService) {
    var id = this.ar.snapshot.params.id;
    this.product = this.ps.getProduct(id);
    this.price = this.product.price - this.product.price*this.product.discount/100;
  

   }



  ngOnInit(): void {
  }

  // public id:string,
  //       public userId:string,
  //       public productId:string,
  //       public address:string,
  //       public price:number,
  //       public date:Date,
  //       public size:Size,
  //       public color:Color,
  //       public status:Status,
  //       public imageUrl: string
  buyForm = new FormGroup({
    address: new FormControl('', Validators.required),
    size: new FormControl(0, Validators.required),
    color: new FormControl(0, Validators.required),
  });
  
  onOrder(){
    console.log(JSON.stringify(this.buyForm.value));
    this.order.userId = '1';
    this.order.productID = this.product.id;
    this.order.address = this.buyForm.value.address;
    this.order.price = this.price;
    this.order.date = new Date();
    this.order.size = this.buyForm.value.size;
    this.order.color = this.buyForm.value.color;
    this.order.status = 0;
    this.order.imageUrl = this.product.imageUrl;
    this.os.addOrder(this.order).subscribe
    (res=>{
      console.log(res);
      this.rs.routeToOrder();
    },
    err=>{
      console.log(err);
    }
    );
  }
}
