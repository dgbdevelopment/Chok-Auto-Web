import { Injectable } from '@angular/core';
import $ from 'jquery';
declare const $: $;

@Injectable({
   providedIn: 'root'
})
export class AnimationService {

   constructor() { }

   animar(objs: any, animation: string, offset: string, elements: number = null, big: string = '') {
      if (elements !== null && elements !== undefined) {
         objs.each(function (index) {
            animation = getAnimation(index, elements, big);
            animate($(this), animation, offset);
         });
      } else {
         objs.each(function () {
            animate($(this), animation, offset);
         });

      }
   }
}

function animate(element: $, animation: string, off: string) {
   const repetir = setInterval(function () {
      if (element.height() > 0) {
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

function getAnimation(index: number, elements: number, big: string = '') {
   if (Math.floor(index / elements) % 2 === 0) {
      return 'fadeInRight' + big;
   } else {
      return 'fadeInLeft' + big;
   }
}
