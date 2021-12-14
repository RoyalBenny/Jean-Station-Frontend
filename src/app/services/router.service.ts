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

    routeToSignUp(){
      this.router.navigate(['/signin']);
    }

    routeToProfile(){
      this.router.navigate(['/profile']);
    }
    routeToItemList(category:any){
      console.log("in service "+category);
      this.router.navigate(['/item-list',category]);
    }
    routeToProductShow(id: string){
      this.router.navigate(['/product-show',id]);
    }
    routeToCart(){
      this.router.navigate(['/cart']);
    }

    routeToOrder(){
      this.router.navigate(['/order-delivery']);
    }

    routeToBuy(id:string){
      this.router.navigate(['/buy-page',id]);
    }
   routeToAddproduct(){
     this.router.navigate(['/addproduct']);
   }
   routeToAdminOrder(){
     this.router.navigate(['/admin-order']);
   }
   routeToAdminOffer(){
     this.router.navigate(['/admin-offer']);
   }
   routeToAdminProduct(){
     this.router.navigate(['/admin-product']);
   }
   routeToAddoffer(){
     this.router.navigate(['/addoffers']);
   }
}
