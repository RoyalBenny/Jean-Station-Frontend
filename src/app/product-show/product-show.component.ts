import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  constructor(private ar: ActivatedRoute,private rs: RouterService) { }

  ngOnInit(): void {
    console.log(this.ar.snapshot.params.id);
  }

  onBuy(id:string){
    console.log(id);
    this.rs.routeToBuy(id);
  }
}
