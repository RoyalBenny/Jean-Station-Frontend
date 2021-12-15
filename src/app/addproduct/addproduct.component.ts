import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { FormControl } from '@angular/forms';
import { ProductListService } from '../services/product-list.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 products:Array<Product>=[];
forms:Array<Product>=[];



  constructor(private rs:RouterService,private ps:ProductService){} 
  ngOnInit(): void {
    
  }
  loginForm=new FormGroup({
    name:new FormControl('',Validators.required),
    discount:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required)
    
  });
// forms:Array<Product>=this.loginForm.value;


  Additem(){
    //console.log(this.loginForm.value)
    //console.log(JSON.stringify(this.loginForm.value))
    this.forms.push(this.loginForm.value);
    this.ps.addProduct(this.loginForm.value).subscribe(data => {} );
    this.rs.routeToAdminProduct();
    this.loginForm.reset();
  }
  }