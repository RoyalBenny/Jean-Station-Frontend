import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductListService } from '../services/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';
import { ProductService } from '../services/product.service';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

products:Array<Product>=[]
categoryDict  = new Map<string,number>();

sectionDict = new Map<string,number>();
category: string ='';
  constructor(private ps:ProductService,private cs:CartService,private as: ActivatedRoute, private rs: RouterService
    ,commonService:CommonService) { 
    this.setCategoryDict();
    this.setSectionDict();
    //console.log(this.as.snapshot.paramMap.get('value'));
    //let value = this.as.snapshot.paramMap.get('value')?.split(" ") as Array<string>;
    // let value = localStorage.getItem('cat')?.split(" ") as Array<string>;
    // let subject = new BehaviorSubject(value);
    // subject.next(value);
    // subject.subscribe(value => {
    //   console.log(value);
    // });
    commonService.getCategory().subscribe(v => {
      console.log(v);
      this.category = v!=null?v.toUpperCase():'';
      console.log(v);
      let value = v?.split(" ") as Array<string>;
      console.log(value);
      ps.getProducts().subscribe(
        (data)=>{
          //this.products = data.fil;
          if(value?.length==2){
            this.products = data.filter(x=> x.category == this.categoryDict.get(value[1])  && x.section == this.sectionDict.get(value[0]));
          }
        },
        (error)=>{
          console.log(error);
        }
      );

    });
    let subject = new BehaviorSubject(localStorage.getItem('cat'));
    subject.subscribe(v => {
      // this.category = v!=null?v.toUpperCase():'';
      // console.log(v);
      // let value = v?.split(" ") as Array<string>;
      // console.log(value);
      // ps.getProducts().subscribe(
      //   (data)=>{
      //     //this.products = data.fil;
      //     if(value?.length==2){
      //       this.products = data.filter(x=> x.category == this.categoryDict.get(value[1])  && x.section == this.sectionDict.get(value[0]));
      //     }
      //   },
      //   (error)=>{
      //     console.log(error);
      //   }
      // );

    });
    
  }
  
  ngOnInit(): void {
      var value = this.as.snapshot.paramMap.get('value');
      console.log("in item-list init"+value);
      //alert(value);
      if(value!=null)
      this.category = value.toUpperCase();
  }
  ngOnChanges(){
    var value = this.as.snapshot.paramMap.get('value');
    console.log("in item-list onchanges "+value);
  }
  onItem(id: string) {
    console.log(id);
    this.rs.routeToProductShow(id);
  }
  addToCart(i:Product)
  {
    if(localStorage.getItem('logged') == 'no'){ 
      this.rs.routeToLogin();
      return;
    }
    this.cs.addToCart(i).subscribe(
      (data)=>{
        console.log(data);
        alert("Added to cart");
        //this.rs.routeToCart();

      }
    )
  }
  setCategoryDict(){
    this.categoryDict.set("pants",0);
    this.categoryDict.set("shirts",1);
    this.categoryDict.set("shoes",2);
    this.categoryDict.set("tshirts",3);
    this.categoryDict.set("blouses",4);

  //   export enum Category{
  //     Pants,
  //     Shirt,
  //     Shoes,
  //     Tshirt,
  //     Blouses
  // }
  }

  setSectionDict(){
    // export enum Section{
  //     Men,
  //     Women,
  //     Boy,
  //     Girl
  // }
    this.sectionDict.set("men",0);
    this.sectionDict.set("women",1);
    this.sectionDict.set("boy",2);
    this.sectionDict.set("girl",3);
  }


}
