import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 
  constructor(private rs: RouterService,private currentRoute:ActivatedRoute,private httpclient:HttpClient, private us: UserService) { }
  adminForm = new FormGroup({
    email :new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });
  ngOnInit(): void {
    // this.currentRoute.params.subscribe((p:Params)=>{
    //   this.caption=p.caption;
    // })
  }
  Adminlog(){
    
    // localStorage.setItem("logged","yes")
    // this.rs.routeToAdminProduct();

    let user = this.adminForm.value as User;
    this.us.checkUser(user).subscribe(data => {
      if(data){
      //   this.us.getUser(user).subscribe(data => {

          
      //     console.log(data);
      //     localStorage.setItem('logged','yes');
          
      //     localStorage.setItem('role',parseInt(data.role.toString()).toString());
      //     this.rs.routeToHome();
      // });
      this.us.getUser(user).then(data => {
        if(data == null || data.role!=0) alert('Invalid User');
        else{
          console.log(data);
          localStorage.setItem('logged','yes');
          localStorage.setItem('role',parseInt(data.role.toString()).toString());
          localStorage.setItem('userId',data.id);
          this.rs.routeToAdminProduct();
        }
      }
      );
      }
      else{
        alert("User not exist");
      }
    });
  }
}
