import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginClientComponent,
    LoginOwnerComponent,
    ShoppingcartComponent,
    WelcomeComponent,
    RestaurantsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
