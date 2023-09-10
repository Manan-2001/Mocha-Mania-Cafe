import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
cart:any=[];
total=0;
constructor(private router:ActivatedRoute){}
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.router.paramMap.subscribe((params)=>{
  const dataParams:any=params.get('data');
  this.cart=JSON.parse(dataParams);
})
}
delete_from_cart(idx: any) {
  this.cart.splice(idx, 1);
  this.total = 0;
  this.cart.forEach((Element: any) => {
    this.total = this.total + Element.price;
  });
}
}
