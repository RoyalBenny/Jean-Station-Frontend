import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './item-list/item-list.component';
import { OrderDeliveryComponent } from './order-delivery/order-delivery.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { CartComponent } from './cart/cart.component';
import{HttpClientModule} from '@angular/common/http';
=======
<<<<<<< HEAD


import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductShowComponent } from './product-show/product-show.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
=======
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductShowComponent } from './product-show/product-show.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 58f8360a6cda485e341c658ba5a8ca20f27c3537

 
=======
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './buy-page/buy-page.component';
>>>>>>> 7837e8ba4be8d33e22a4acf787591406173fe04a

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'item-list/:value', component: ItemListComponent},
  { path: 'order-delivery', component: OrderDeliveryComponent },
  { path: 'product-show/:id', component: ProductShowComponent },
  { path: 'cart', component: CartComponent },
  { path: 'buy-page/:id', component: BuyPageComponent }
];

>>>>>>> 313815d35ac045f948ce71056c2169814f81882e
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HeaderComponent,
<<<<<<< HEAD
    ItemListComponent,
    OrderDeliveryComponent,
    FooterComponent,
    HomePageComponent,
    ProductShowComponent,
    CartComponent,
=======
<<<<<<< HEAD

    ItemListComponent,
    OrderDeliveryComponent,

>>>>>>> 58f8360a6cda485e341c658ba5a8ca20f27c3537
    FooterComponent,
    HomePageComponent,
<<<<<<< HEAD
    ProductShowComponent
=======

    ProductShowComponent,
>>>>>>> 313815d35ac045f948ce71056c2169814f81882e

    CartComponent,

=======
    ItemListComponent,
    OrderDeliveryComponent,
>>>>>>> 7837e8ba4be8d33e22a4acf787591406173fe04a
    FooterComponent,
    HomePageComponent,
    ProductShowComponent,
    CartComponent,
    BuyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
<<<<<<< HEAD
    HttpClientModule
=======
<<<<<<< HEAD
    HttpClientModule
=======
    RouterModule.forRoot(appRoutes),
>>>>>>> 7837e8ba4be8d33e22a4acf787591406173fe04a
>>>>>>> 313815d35ac045f948ce71056c2169814f81882e
>>>>>>> 58f8360a6cda485e341c658ba5a8ca20f27c3537
  ],
  providers: [],
  bootstrap: [AppComponent],
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule {}


>>>>>>> 58f8360a6cda485e341c658ba5a8ca20f27c3537
