import { Component, OnInit} from '@angular/core';
import $ from 'jquery';
declare const $: $;

@Component({
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

   constructor() { }

   ngOnInit() {
   }
}
