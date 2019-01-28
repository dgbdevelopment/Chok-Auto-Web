import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnimationService } from '../../services/animation.service';
import $ from 'jquery';
declare var $: $;

@Component({
   selector: 'app-chapa',
   templateUrl: './chapa.component.html',
   styleUrls: ['./chapa.component.sass']
})
export class ChapaComponent implements OnInit, AfterViewInit {

   constructor(
      private animator: AnimationService
   ) { }

   ngOnInit() {
      window.scrollTo({ top: 0 });
   }

   ngAfterViewInit() {
      this.animator.animar($('.anim-in'), 'fadeIn', '80%');
      this.animator.animar($('.anim-right'), 'fadeInRight', '80%');
      this.animator.animar($('.anim-left'), 'fadeInLeft', '80%');
      this.animator.animar($('.anim-up'), 'fadeInUp', '80%');
      this.animator.animar($('.anim-down'), 'fadeInDown', '80%');

   }

}
