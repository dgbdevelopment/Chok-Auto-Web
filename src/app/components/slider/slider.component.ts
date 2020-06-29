import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import $ from 'jquery';
declare const $: $;

@Component({
   selector: 'app-slider',
   templateUrl: './slider.component.html',
   styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit, AfterViewInit {

   // We need to install bxslider: npm i -S bxslider

   @Input() images: Array<string>;
   @Input() numeroImagen: number;

   public slider;

   constructor() { }

   ngOnInit() {
   }

   async ngAfterViewInit() {

      const slider = await $('.slider').bxSlider({
         auto: true,
         mode: 'fade',
         speed: 1000,
         easing: 'ease',
         pager: false,
         pause: 5000,
         autoHover: true,
         startSlide: 0,
         adaptiveHeight: true
      });

      if (this.numeroImagen !== 0) {
         slider.goToSlide(this.numeroImagen);
      }
      // Estilos CSS
      if (window.location.href.includes('galeria')) {
         $('.bx-wrapper').css({ 'top': '0', 'bottom': '0', 'left': '0', 'right': '0' });
         $('.bx-wrapper img').css({ 'max-height': '99vh', 'max-width': '99vw' });
      }
      $('.bx-wrapper, .bx-viewport').css({ 'border-radius': '5px' });
      $('.bx-wrapper').css({ 'background': 'transparent', 'border': '5px solid transparent' });
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
      $('.bx-wrapper img').css({ 'margin': 'auto' });

   }

}
