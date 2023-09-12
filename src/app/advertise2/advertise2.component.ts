import { Component } from '@angular/core';

@Component({
  selector: 'app-advertise2',
  templateUrl: './advertise2.component.html',
  styleUrls: ['./advertise2.component.scss']
})
export class Advertise2Component {
constructor(){
  window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.fade-in');
    var threshold = window.innerHeight / 1;

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
