import { Component } from '@angular/core';

@Component({
  selector: 'app-loation',
  templateUrl: './loation.component.html',
  styleUrls: ['./loation.component.scss']
})
export class LoationComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
  savedAddress=[
    {
      plotno :'129',
      address:'Ramna Maruti Nagar',
      floreno:0,
      place:'Home'
    }
  ]
  plotno ='';
  address='';
  floreno=0;
  place='';
  addToSavedAddress(){
    const newAddress = {
      plotno: this.plotno,
      address: this.address,
      floreno: this.floreno,
      place: this.place
    };
    this.savedAddress.push(newAddress);
    this.plotno='',
    this.address='',
    this.floreno=0,
    this.place=''

  }

}
