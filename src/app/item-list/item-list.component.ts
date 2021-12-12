import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private as: ActivatedRoute, private rs: RouterService) { }
  category: string ='';
  ngOnInit(): void {
      var value = this.as.snapshot.paramMap.get('value');
      console.log(value);
      //alert(value);
      if(value!=null)
      this.category = value.toUpperCase();
  }

  onItem(id: string) {
    console.log(id);
    this.rs.routeToProductShow(id);
  }


}
