import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  ImagePath: string;

  constructor() {
    //image location
    this.ImagePath = './Photo_1687970038581.png'

  }

  ngOnInit() {
  }
  handleHoverIn() {
    document.getElementById('dropdownHover').classList.add('show');
  }

  handleHoverOut() {
    document.getElementById('dropdownHover').classList.remove('show');
  }
}
