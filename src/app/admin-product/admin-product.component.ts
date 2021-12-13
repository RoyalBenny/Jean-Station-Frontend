import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private rs:RouterService) { }

  ngOnInit(): void {
  }
  Addproduct(){
   this.rs.routeToAddproduct();
  }
}
