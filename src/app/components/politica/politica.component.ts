import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.sass']
})
export class PoliticaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   window.scrollTo({top: 0});
  }

}
