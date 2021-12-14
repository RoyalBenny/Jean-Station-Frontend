import { Component, OnInit } from '@angular/core';
import { RouterService} from '../services/router.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private rs: RouterService) { }

  ngOnInit(): void {
  }
  onSignUp(){
    this.rs.routeToSignUp();
  }

}
