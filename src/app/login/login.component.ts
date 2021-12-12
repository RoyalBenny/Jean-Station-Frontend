import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rs: RouterService) { }

  ngOnInit(): void {
  }
  onSignUp(){
    this.rs.routeToSignUp();
  }
}
