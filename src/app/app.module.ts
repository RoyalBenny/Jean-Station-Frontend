import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { ItemListComponent } from './item-list/item-list.component';
import { OrderDeliveryComponent } from './order-delivery/order-delivery.component';
=======
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
>>>>>>> 0c378c9501af76ee707798862079c01f19c6a782

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HeaderComponent,
<<<<<<< HEAD
    ItemListComponent,
    OrderDeliveryComponent
=======
    FooterComponent,
    HomePageComponent,
    CartComponent
>>>>>>> 0c378c9501af76ee707798862079c01f19c6a782
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
