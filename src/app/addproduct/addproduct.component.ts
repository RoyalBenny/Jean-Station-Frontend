import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 products:Array<Product>=[];
  


  constructor(private rs:RouterService ){   } 
  ngOnInit(): void {
      
  }
  loginForm=new FormGroup({
    name:new FormControl('',Validators.required),
    discount:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required)
    
  });
  
  Additem(){
    console.log("form"+this.loginForm);
    this.loginForm.reset();
    
    
  }

  
  
  }