import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiseComponent } from './advertise/advertise.component';
import { ItemsComponent } from './items/items.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

  {
    path:"",
    pathMatch:"full",
    redirectTo:"MochaMania"
  },
  {
    path:"MochaMania",
    component:AdvertiseComponent
  },
  {
    path:"MochaMania/Order",
    component:ItemsComponent
  },
  {
    path:"MochaMania/PaymentGateway",
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
