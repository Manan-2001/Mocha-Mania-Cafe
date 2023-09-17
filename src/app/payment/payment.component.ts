import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      const dataParams = params.get('data');
      if (dataParams) {
        const data = JSON.parse(dataParams);
        this.cart = data.cart;
        this.total=data.total;
        this.location=data.location;
        console.log(this.cart );
        console.log(this.total );
        console.log(this.location );
      }
    });
    this.tax=this.total*18/100;
    this.amount=this.total+this.tax;
    // const { plotno, address, floreno, place } = this.location[0];
  }
 tax=0;
 amount=0;
  cart: any = [];
  location: any = [];
  total = 0;
  order_no = Math.floor(Math.random() * 100000 + 1);
  date = new Date().toDateString();
  time =
    new Date().getHours() +
    ':' +
    new Date().getMinutes() +
    ':' +
    new Date().getSeconds();

  Name="Manan Jain";
  ContactNo=8390596701;

}
