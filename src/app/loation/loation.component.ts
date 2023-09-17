import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loation',
  templateUrl: './loation.component.html',
  styleUrls: ['./loation.component.scss']
})
export class LoationComponent {
  constructor(private router:ActivatedRoute,
    private route:Router){}
  ngOnInit(): void {
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

    this.router.paramMap.subscribe((params) => {
      const dataParams = params.get('data');
      if (dataParams) {
        const data = JSON.parse(dataParams);
        this.recievedCart=data.cart;
        this.recievedTotal=data.total;
        console.log(this.recievedCart);
        console.log(this.recievedTotal);
      }
    });
  }
  recievedCart:any=[]
  recievedTotal=0
  savedAddress=[
    {
      plotno :'129',
      address:'Ramna Maruti Nagar',
      floreno:0,
      place:'Home',
      city:'Nagpur'
    }
  ]
  plotno ='';
  address='';
  floreno:any;
  place='';
  city='';
  addToSavedAddress(){
    const newAddress = {
      plotno: this.plotno,
      address: this.address,
      floreno: this.floreno,
      place: this.place,
      city:this.city
    };
    this.savedAddress.push(newAddress);
    this.plotno='',
    this.address='',
    this.floreno=0,
    this.place='',
this.city=''
  }
  sendArray:any=[];
  sendToPaymentGateway(idx:any){
this.sendArray.push(this.savedAddress[idx]);
const dataToSend={
  cart:this.recievedCart,
  location:this.sendArray,
  total:this.recievedTotal,
}
this.route.navigate(['/MochaMania/PaymentGateway',{data:JSON.stringify(dataToSend)}])
  }

}
