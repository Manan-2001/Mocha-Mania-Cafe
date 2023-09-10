import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  constructor(private router:Router){
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
  menulist_coffees:any=[
    {
      name: 'Classic Hot Coffee',
      price:25
    },
    {
      name: 'Bootcamp Special Coffee',
      price:25
    },
    {
      name: 'Cappuccino',
      price:120
    },
    {
      name: 'Americano',
      price:140
    },
    {
      name: 'Espresso',
      price:180
    },
    {
      name: 'Mocha',
      price:180
    }
  ]

  menulist_Tea:any=[
    {
      name: 'Masala Tea',
      price:20
    },
    {
      name: 'Olong Tea',
      price:50
    },
    {
      name: 'White Tea',
      price:30
    },
    {
      name: 'Green Tea',
      price:30
    },
    {
      name: 'Lemon Tea',
      price:30
    },
    {
      name: 'Blac Tea',
      price:30
    },
    {
      name: 'Darjeeling Tea',
      price:180
    }
  ]

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
  menulist_chinees: any = [
    {
      name: 'Veg Hakka Noodles',
      price: 120,
    },
    {
      name: 'Veg Noodles',
      price: 80
    },
    {
      name: 'Manchuriyan Noodles',
      price: 100
    },
    {
      name: 'Veg Fried Rice',
      price: 90
    },
    {
      name: 'Manchuriyan Fried Rice',
      price: 80
    },
    {
      name: 'Manchuriyan',
      price: 80
    },
    {
      name: 'Dry Manchuriyan',
      price: 90
    },
    {
      name: 'White Sauce Pasta',
      price: 90
    },
    {
      name: 'Pink Sauce Pasta',
      price: 90
    },
    {
      name: 'Crispy Veg',
      price: 120
    }
  ];
  menulist_momos: any = [
    {
      name: 'Veg Steam Momos',
      price: 100,
    },
    {
      name: 'Veg Fried Momos',
      price: 120
    },
    {
      name: 'Paneer Steam Momos',
      price: 110
    },
    {
      name: 'Paneer Fried Momos',
      price: 130
    },
    {
      name: 'Tandoori Momos',
      price: 130
    },
    {
      name: 'Cheese Momos',
      price: 130
    },
    {
      name: 'Sweet Corn Momos',
      price: 120
    },
    {
      name: 'Sweet Corn Cheese Momos',
      price: 140
    },
    {
      name: 'Mix Veg Momos',
      price: 100
    },
    {
      name: 'Cheese Mix Veg Momos',
      price: 120
    }
  ];
  menulist_moctails: any = [
    {
      name: 'Lemonade',
      price: 80,
    },
    {
      name: 'Mojito',
      price: 120
    },
    {
      name: 'Virgin Pina Colada',
      price: 110
    },
    {
      name: 'Shirley Temple',
      price: 140
    },
    {
      name: 'Fruity Mocktail',
      price: 130
    },
    {
      name: 'Margarita Mocktail',
      price: 160
    },
    {
      name: 'Virgin Sangaria',
      price: 160
    },
    {
      name: 'Apple cider Mocktail',
      price: 140
    },
    {
      name: 'Quick Fruit Punch',
      price: 170
    },
    {
      name: 'Watermelon Mocktail',
      price: 140
    }
  ];
  cartselected = false;
  total = 0;
  cart: any = [];
  pizza_Quantity=0;
  opencart(){
    this.router.navigate(['/Cart',{data:JSON.stringify(this.cart),
     }]);
  }
  add_pizza_to_cart(idx: any) {
    this.cart.push(this.menulist_pizzas[idx]);

    this.cartselected = true;
  }
  add_momos_to_cart(idx: any) {
    this.cart.push(this.menulist_momos[idx]);

    this.cartselected = true;
  }
  add_cofeee_to_cart(idx: any) {
    this.cart.push(this.menulist_coffees[idx]);
    this.cartselected = true;
  }
  add_Tea_to_cart(idx: any) {
    this.cart.push(this.menulist_Tea[idx]);
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
  add_chinees_to_cart(idx: any) {
    this.cart.push(this.menulist_chinees[idx]);
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
