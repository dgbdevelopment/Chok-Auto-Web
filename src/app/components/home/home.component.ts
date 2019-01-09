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
      $('.anim-left, .anim-right, .anim-up, .anim-down').css('opacity', '0');
      $('.anim-right').each(function() {
         animar($(this), 'fadeInRight');
      });
      $('.anim-left').each(function() {
         animar($(this), 'fadeInLeft');
      });
      $('.anim-up').each(function() {
         animar($(this), 'fadeInUp');
      });
      $('.anim-down').each(function() {
         animar($(this), 'fadeInDown');
      });
   }
}

function animar(element, animation) {
   const repetir = setInterval(function() {
      if (element.height() >= 10) {
         element.waypoint({
            handler: function () {
               element.addClass(animation);
            },
            offset: '80%' /*'bottom-in-view'*/
         });
         clearInterval(repetir);
      }
   }, 200);
}
