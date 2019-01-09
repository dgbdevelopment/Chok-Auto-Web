import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare const $: $;

@Component({
   selector: 'app-slider',
   templateUrl: './slider.component.html',
   styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit, AfterViewInit {

   // We need to install bxslider: npm i -S bxslider

   public images_url: Array<string>;

   constructor() { }

   ngOnInit() {
      this.images_url = [
         '../../../assets/img/slider/slider1.jpg',
         '../../../assets/img/slider/slider2.jpg',
         '../../../assets/img/slider/slider3.jpg',
         '../../../assets/img/slider/slider4.jpg',
         '../../../assets/img/slider/slider5.jpg'
      ];
   }

   async ngAfterViewInit() {
      await $('.slider').bxSlider({
         auto: true,
         mode: 'fade',
         speed: 1000,
         easing: 'ease-in-out',
         pager: false,
         pause: 6000,
         autoHover: true,
         startSlide: 4
      });
      // Estilos CSS
      $('.bx-wrapper, .bx-viewport').css({ 'border-radius': '5px' });
      $('.bx-wrapper').css({ 'opacity': '.9', 'border': '1px solid #ccc'/*, 'box-shadow': '0 0 5px 2px #ccc'*/ });
      $('.bx-wrapper .bx-next').css({ 'background': 'transparent' })
         .html('<i class="fas fa-angle-right"></i>');
      $('.bx-wrapper .bx-prev').css({ 'background': 'transparent' })
         .html('<i class="fas fa-angle-left"></i>');
      $('.bx-wrapper .bx-controls-direction a').css({
         'text-indent': '0px',
         'text-align': 'center',
         'line-height': '32px',
         'color': '#ccc',
         'font-size': '32px',
         'text-decoration': '!default',
         'text-shadow': '0px 0px 5px #000'
      });

   }

}
