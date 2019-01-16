import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnimationService } from '../../services/animation.service';
import $ from 'jquery';
declare const $: $;



@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.sass'],
   providers: [AnimationService]
})
export class HomeComponent implements OnInit, AfterViewInit {

   constructor(
      private animator: AnimationService
   ) {

   }

   ngOnInit() {
   }

   ngAfterViewInit() {

      this.animator.animar($('.anim-in'), 'fadeIn', 'bottom-in-view');
      this.animator.animar($('.anim-right'), 'fadeInRight', '80%');
      this.animator.animar($('.anim-left'), 'fadeInLeft', '80%');
      this.animator.animar($('.anim-up'), 'fadeInUp', '80%');
      this.animator.animar($('.anim-down'), 'fadeInDown', '80%');
   }
}
