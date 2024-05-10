import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiseComponent } from './advertise/advertise.component';
import { ItemsComponent } from './items/items.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { LoationComponent } from './loation/loation.component';

const routes: Routes = [

  {
    path:"",
    pathMatch:"full",
    redirectTo:""
  },
  {
    path:"",
    component:AdvertiseComponent
  },
  {
    path:"location",
    component:LoationComponent
  },
  {
    path:"Cart",
    component:CartComponent
  },
  {
    path:"Order",
    component:ItemsComponent
  },
  {
    path:"PaymentGateway",
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
