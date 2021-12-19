import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
import { RouterService } from '../services/router.service';
import {map} from 'rxjs/operators';
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
    this.os.getOrders()
    // .pipe(
    //   map(data=>{
    //     return data.map(item=>{
    //       const order : Order = {
    //         // id:item.id,
    //         // userId:item.payload.doc.data()['userId'],
    //         // productId:item.payload.doc.data()['productID'],
    //         // address:item.payload.doc.data()['address'],
    //         // price:item.payload.doc.data()['price'],
    //         // date:item.payload.doc.data()['date'],
    //         // size:item.payload.doc.data()['size'],
    //         // color:item.payload.doc.data()['color'],
    //         // status:item.payload.doc.data()['status'],
    //         // imageUrl:item.payload.doc.data()['imageUrl']

    //       }
    //       return order;
    //       //return new Order(item.id,item.userId,item.productID,item.address,item.price,item.date,item.size,item.color,item.status,item.imageUrl);
    //     });
    //   }
    // ))
    .subscribe(res=>{
      this.orders=res as Array<Order>;
      console.log(this.orders[0]);

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
