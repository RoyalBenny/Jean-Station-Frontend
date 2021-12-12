import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rs:RouterService) { }

  ngOnInit(): void {
  }

  onCart(){
    this.rs.routeToCart();
  }

  onOrder(){
    this.rs.routeToOrder();
  }

  onLogin(){
    this.rs.routeToLogin();
  }

  onHome(){
    this.rs.routeToHome();
  }

  onDropdown(cat:string,subCat:string){

    this.rs.routeToItemList(cat+' '+subCat);
  }

}
