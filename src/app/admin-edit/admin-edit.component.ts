import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormGroup } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
 // products:Array<Product>=[new Product("1","nhfg",458,1,"ytt","gggg",5,8,6,"shipped")];
    product:Product;
    editForm : FormGroup;

  constructor(private rs:RouterService, private ps: ProductService, private as: ActivatedRoute ){
    var id = this.as.snapshot.paramMap.get('id') as string;
    this.product = this.ps.getProduct(id);
    this.editForm=new FormGroup({
      name:new FormControl(this.product.name,Validators.required),
      discount:new FormControl(this.product.discount,Validators.required),
      price:new FormControl(this.product.price,Validators.required),
      imageUrl:new FormControl(this.product.imageUrl,Validators.required),
      description:new FormControl(this.product.description,Validators.required),
      quantity:new FormControl(this.product.quantity,Validators.required),
      category:new FormControl(this.product.category,Validators.required),
      section:new FormControl(this.product.section,Validators.required),
      
    });

     } 
  ngOnInit(): void {
    
  }
  
  
  savechanges(){
    console.log("form"+this.editForm);
    this.editForm.reset();
    
    
  }

  editItem(){
    var product = this.editForm.value as Product;
    product.id=this.product.id;
    console.log(this.product);
    this.ps.updateProduct(product).subscribe(data => {
      console.log(data);
      this.rs.routeToAdminProduct();
    },
    error => {
      console.log(error);
    });
  }
}
