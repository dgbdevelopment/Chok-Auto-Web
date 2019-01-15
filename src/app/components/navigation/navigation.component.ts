import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit () {

  }
  ngDoCheck() {
     const menu_servicios = document.querySelector('#navbarDropdown');
     if (window.location.href.includes('servicios')) {
      menu_servicios.classList.add('active');
     } else {
      menu_servicios.classList.remove('active');
     }
  }

}
