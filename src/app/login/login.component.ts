import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { RouterService } from '../services/router.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rs: RouterService, private us:UserService) { }
  loginForm= new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  onSignUp(){
    this.rs.routeToSignUp();
  }

  onLogin(){

    let user = this.loginForm.value as User;
    this.us.checkUser(user).subscribe(data => {
      if(data){
      //   this.us.getUser(user).subscribe(data => {

          
      //     console.log(data);
      //     localStorage.setItem('logged','yes');
          
      //     localStorage.setItem('role',parseInt(data.role.toString()).toString());
      //     this.rs.routeToHome();
      // });
      this.us.getUser(user).then(data => {
        if(data == null) alert('Invalid User');
        else{
          console.log(data);
          localStorage.setItem('logged','yes');
          localStorage.setItem('role',parseInt(data.role.toString()).toString());
          this.rs.routeToHome();
        }
      }
      );
      }
      else{
        alert("User not exist");
      }
    });
    // this.rs.routeToHome();
  }
}
