import { Component } from '@angular/core';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent {
  constructor(){
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

}
