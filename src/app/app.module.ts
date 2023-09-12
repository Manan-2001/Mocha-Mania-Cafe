import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { LoationComponent } from './loation/loation.component';
import { Advertise2Component } from './advertise2/advertise2.component';
import { Advertise3Component } from './advertise3/advertise3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdvertiseComponent,
    FooterComponent,
    ItemsComponent,
    PaymentComponent,
    CartComponent,
    LoationComponent,
    Advertise2Component,
    Advertise3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
