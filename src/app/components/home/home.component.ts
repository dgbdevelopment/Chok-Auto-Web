import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare const $: $;



@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {

   constructor() {

   }

   ngOnInit() {
   }

   ngAfterViewInit() {

      $('.anim-in').each(function() {
         animar($(this), 'fadeIn', '80%');
      });
      $('.anim-right').each(function() {
         animar($(this), 'fadeInRight', '80%');
      });
      $('.anim-left').each(function() {
         animar($(this), 'fadeInLeft', '80%');
      });
      $('.anim-up').each(function() {
         animar($(this), 'fadeInUp', '80%');
      });
      $('.anim-down').each(function() {
         animar($(this), 'fadeInDown', '80%');
      });
   }
}

function animar(element: $, animation: string, off: string) {
   const repetir = setInterval(function() {
      if (element.height() >= 10) {
         element.waypoint({
            handler: function () {
               element.addClass(animation);
            },
            offset: off /*'bottom-in-view'*/
         });
         clearInterval(repetir);
      }
   }, 200);
}
