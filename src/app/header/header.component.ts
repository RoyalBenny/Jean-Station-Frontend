import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn = localStorage.getItem("logged")=="yes"?true:false;
  constructor(private rs:RouterService, private cs: CommonService) {
   }

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
    this.cs.setCategory(cat+" "+subCat);
    localStorage.setItem('cat',cat+' '+subCat);
    this.rs.routeToItemList(cat+' '+subCat);
  }

  onLogout(){
    localStorage.setItem('logged','no');
    this.isLoggedIn = false;
   // this.rs.routeToHome();
  }

}
