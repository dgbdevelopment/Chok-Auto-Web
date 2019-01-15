import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../services/animation.service';
import $ from 'jquery';
declare const $: $;


@Component({
  selector: 'app-mecanica',
  templateUrl: './mecanica.component.html',
  styleUrls: ['./mecanica.component.sass'],
  providers: [AnimationService]
})
export class MecanicaComponent implements OnInit {



  constructor(private animator: AnimationService) { }

  ngOnInit() {
   this.animator.ani($('.anim-in'), 'fadeIn', '80%');
  }

}
