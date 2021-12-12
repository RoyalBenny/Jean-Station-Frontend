import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) {

   }

   routeToHome(){
     this.router.navigate(['/home']);
   }

   routeToLogin(){
      this.router.navigate(['/login']);
    }

    routeToSignup(){
      this.router.navigate(['/signin']);
    }

    routeToProfile(){
      this.router.navigate(['/profile']);
    }
    routeToItemList(category:any){
      this.router.navigate(['/item-list',category]);
    }
    routeToProductShow(){
      this.router.navigate(['/product-show']);
    }
    routeToCart(){
      this.router.navigate(['/cart']);
    }

    routeToOrder(){
      this.router.navigate(['/order-delivery']);
    }
   
}
