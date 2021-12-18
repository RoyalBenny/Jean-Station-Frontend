import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 
  constructor(private rs: RouterService,private currentRoute:ActivatedRoute,private httpclient:HttpClient) { }

  ngOnInit(): void {
    // this.currentRoute.params.subscribe((p:Params)=>{
    //   this.caption=p.caption;
    // })
  }
  Adminlog(){
    
    localStorage.setItem("logged","yes")
    this.rs.routeToAdminProduct();
  }
}
