import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private rs:RouterService) { }

  ngOnInit(): void {
  }
  onBuy(id:string){
    this.rs.routeToBuy(id);
  }

}
