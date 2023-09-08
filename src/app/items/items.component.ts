import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  menulist_pizzas: any = [
    {
      name: 'VEG PIZZA',
      price: 130,
    },
    {
      name: 'MARGHERITA',
      price: 100,

    },
    {
      name: 'SCHEZWAN VEG',
      price: 140,
    },
    {
      name: 'DELUXE VEGGIE',
      price: 200,
    },
    {
      name: 'FHARMHOUSE PIZZA',
      price: 190,
    },
  ];
  menulist_sandwiches: any = [
    {
      name: 'VEG SANDWICH',
      price: 130,
    },
    {
      name: 'SCHEESE CORN SANDWICH',
      price: 100,
    },
    {
      name: 'SHEZWAN SANDWICH',
      price: 140,
    },
    {
      name: 'PANEERTIKKA SANDWICH',
      price: 200,
    },
    {
      name: 'MUSHROOM SANDWICH',
      price: 190,
    },
  ];
  menulist_burger: any = [
    {
      name: 'PANEERTIKA BURGER',
      price: 200,
    },
    {
      name: 'ALOO TIKKI BURGER',
      price: 190,
    },
    {
      name: 'DOUBLE PATTIE BURGER',
      price: 200,
    },
    {
      name: 'SPECIAL BURGER',
      price: 190,
    },
  ];
  menulist_tornado: any = [
    {
      name: 'Mexicon Tornado',
      price: 120,
    },
    {
      name: 'Peri Peri Tornado',
      price: 125,
    },
    {
      name: 'Cheese Crispy Tornado',
      price: 135,
    },
    {
      name: 'Cheese Tomato Tornado',
      price: 110,
    },
  ];
  cartselected = false;
  total = 0;
  cart: any = [];
  pizza_Quantity=0;
  add_pizza_to_cart(idx: any) {
    this.cart.push(this.menulist_pizzas[idx]);
    // this.total_Piza=this.total_Piza+this.menulist_pizzas.price;
    this.cartselected = true;
  }
  add_tornado_to_cart(idx: any) {
    this.cart.push(this.menulist_tornado[idx]);
    // this.total_Piza=this.total_Piza+this.menulist_pizzas.price;
    this.cartselected = true;
  }
  add_sanwich_to_cart(idx: any) {
    this.cart.push(this.menulist_sandwiches[idx]);
    this.cartselected = true;
  }
  add_burger_to_cart(idx: any) {
    this.cart.push(this.menulist_burger[idx]);
    this.cartselected = true;
  }
  open_cart = false;

  cartclicked() {
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
  confirmtoPayment() {
    Swal.fire({
      title: 'Please Confirm',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: '<a href="MochaMania/PaymentGateway" style="color: whitesmoke;">Proceed to Payment</a>',
      denyButtonText: `Denied`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        Swal.fire('Payment Cancle', '', 'info');
      }
    });
  }
}
