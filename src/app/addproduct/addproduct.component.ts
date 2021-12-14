import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
addForm:FormGroup;
listData:any;
  constructor(private fb:FormBuilder,private rs:RouterService  ){

      this.listData = [];

    this.addForm = this.fb.group({
      name : ['', Validators.required],
      address : ['', Validators.required],
      ContactNo: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
  AddItem(){
    this.listData.push(this.addForm.value);
    this.rs.routeToAdminProduct();
  }

}