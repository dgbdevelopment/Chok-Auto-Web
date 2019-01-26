import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

import $ from 'jquery';
declare const $: $;


@Component({
   selector: 'app-contact',
   templateUrl: './contact.component.html',
   styleUrls: ['./contact.component.sass'],
   providers: [AnimationService]
})
export class ContactComponent implements OnInit, AfterViewInit {

   public fields: any;

   constructor(
      private animator: AnimationService
   ) { }

   ngOnInit() {

      window.scrollTo({ top: 0 });

      this.fields = {
         name: '',
         email: '',
         text: ''
      };
   }

   ngAfterViewInit() {
      this.animator.animar($('.anim-in'), 'fadeIn', 'bottom-in-view');
      this.animator.animar($('.anim-down'), 'fadeInDown', '80%');
      this.animator.animar($('.anim-up'), 'fadeInUp', '80%');
      this.animator.animar($('.anim-right'), 'fadeInRight', '80%');
      this.animator.animar($('.anim-left'), 'fadeInLeft', '80%');

   }

   onSubmit(form) {
      console.log(this.fields);
      $('#form-container').animate({'opacity': '0'}, 750, function() {
         // $(this).parent().css('min-height', $(this).parent().height());
         $(this).hide();
         $('#result').show().animate({'opacity': '1'}, 750);
      });
   }

}
