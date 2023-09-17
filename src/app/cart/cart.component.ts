import { Component } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
cart:any=[];
total=0;
constructor(private router:ActivatedRoute,private route:Router){
  window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.fade-in');
    var threshold = window.innerHeight / 1; // Adjust this threshold as needed

    elements.forEach(function (element) {
      var bounding = element.getBoundingClientRect();
      if (bounding.top < threshold && bounding.bottom > 0) {
        element.classList.add('in-viewport');
      } else {
        element.classList.remove('in-viewport');
      }
    });
  });
}
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.router.paramMap.subscribe((params)=>{
  const dataParams:any=params.get('data');
  this.cart=JSON.parse(dataParams);
})
this.total = 0;
    for (let idx = 0; idx < this.cart.length; idx++) {
      this.total = this.total + this.cart[idx].price;
    }
}
delete_from_cart(idx: any) {
  this.cart.splice(idx, 1);
  this.total = 0;
  this.cart.forEach((Element: any) => {
    this.total = this.total + Element.price;
  });
}
sendToLocation(){
  const dataToSend = {
    cart: this.cart,
    total: this.total,
  };
  this.route.navigate(['/MochaMania/location', { data: JSON.stringify(dataToSend) }]);
}
}
