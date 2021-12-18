import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../models/product';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { FormControl } from '@angular/forms';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 products:Array<Product>=[];
 forms:Array<Product>=[];
 category=Category;

  constructor(private rs:RouterService ,private ps:ProductService){   } 
  ngOnInit(): void {
      
  }
  loginForm=new FormGroup({
    category:new FormControl(0,Validators.required),
    section:new FormControl(0,Validators.required),
    description:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    price:new FormControl(0,Validators.required),
    discount:new FormControl(0,Validators.required),
    quantity:new FormControl(0,Validators.required),
    imageUrl:new FormControl('',Validators.required)
    
  });
  // forms:Array<Product>=this.loginForm.value;
  Additem(){
    // console.log("form"+this.loginForm);
    
    // this.ps.addProduct(JSON.stringify(forms))
    
    this.forms.push(this.loginForm.value);
    // this.ps.addProduct(this.loginForm.value).subscribe(data => {} );
    // this.rs.routeToAdminProduct();
    // this.loginForm.reset();

    console.log("form"+JSON.stringify(this.forms));
    var product = this.loginForm.value as Product;
    console.log(product);
    this.ps.addProduct(product).subscribe(data => {
      console.log(data);
      this.rs.routeToAdminProduct();
    } );
    
  }
   
  }