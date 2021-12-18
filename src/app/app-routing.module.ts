import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ItemListComponent } from './item-list/item-list.component';
import { OrderDeliveryComponent } from './order-delivery/order-delivery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { CartComponent } from './cart/cart.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminOfferComponent } from './admin-offer/admin-offer.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddoffersComponent } from './addoffers/addoffers.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { ActivateGuard } from './guards/activate.guard';
const routes: Routes = [
  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-product",component:AdminProductComponent,
canActivate:[ActivateGuard],
children:[
  {path:"addproduct",component:AddproductComponent},
  {path:'admin-edit/:id',component:AdminEditComponent},
  {path:'admin-order',component:AdminOrderComponent}
]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
