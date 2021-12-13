import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  listdata:any;
  constructor() { 
    this.listdata=[];

  }

  ngOnInit(): void {
  }
  Additem(){
    this.listdata.push()
  }
}
