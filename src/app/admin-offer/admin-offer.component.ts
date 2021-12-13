import { Component, OnInit } from '@angular/core';
import { Offer } from '../models/offer';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-admin-offer',
  templateUrl: './admin-offer.component.html',
  styleUrls: ['./admin-offer.component.css']
})
export class AdminOfferComponent implements OnInit {
  offers:Array<Offer>=[]
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
  Addoffer(){
    this.rs.routeToAddoffer();
  }
  

}
