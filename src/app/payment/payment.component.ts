import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
order_no=Math.floor(Math.random()*100000+1);
date= new Date().toDateString();
time=new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

}
