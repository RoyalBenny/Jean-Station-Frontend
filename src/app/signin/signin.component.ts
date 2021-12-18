import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { RouterService } from '../services/router.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private rs: RouterService, private us:UserService) { }
  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    retypePassword: new FormControl('', Validators.required),
    role : new FormControl(false, Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  })
  ngOnInit(): void {
  }

  signUp(){
    let user = this.signUpForm.value as User;
    user.role = !user.role ? 1 : 2;
    console.log(user);
    this.us.addUser(user).subscribe(data => {
      console.log(data);
      localStorage.setItem('logged','yes');
      this.rs.routeToHome();
    });
  }

}
