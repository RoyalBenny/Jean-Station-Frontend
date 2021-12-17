import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './item-list/item-list.component';
import { OrderDeliveryComponent } from './order-delivery/order-delivery.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminOfferComponent } from './admin-offer/admin-offer.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddoffersComponent } from './addoffers/addoffers.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminEditComponent } from './admin-edit/admin-edit.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'item-list/:value', component: ItemListComponent},
  { path: 'order-delivery', component: OrderDeliveryComponent },
  { path: 'product-show/:id', component: ProductShowComponent },
  { path: 'cart', component: CartComponent },
  { path: 'buy-page/:id', component: BuyPageComponent },
  {path:'admin-product',component:AdminProductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'admin-order',component:AdminOrderComponent},
  {path:'admin-offer',component:AdminOfferComponent},
  {path:'addoffers',component:AddoffersComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-edit/:id',component:AdminEditComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HeaderComponent,
    ItemListComponent,
    OrderDeliveryComponent,
    FooterComponent,
    HomePageComponent,
    ProductShowComponent,
    CartComponent,
    BuyPageComponent,
    AdminProductComponent,
    AdminOrderComponent,
    AdminOfferComponent,
    AddproductComponent,
    AddoffersComponent,
    AdminLoginComponent,
    AdminEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


