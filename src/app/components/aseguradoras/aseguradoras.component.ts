import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

import $ from 'jquery';
declare const $: $;

@Component({
   selector: 'app-aseguradoras',
   templateUrl: './aseguradoras.component.html',
   styleUrls: ['./aseguradoras.component.sass'],
   providers: [AnimationService]
})
export class AseguradorasComponent implements OnInit, AfterViewInit {

   public aseguradoras: Array<any>;

   constructor(
      private animator: AnimationService
   ) { }

   ngOnInit() {
      window.scrollTo({top: 0});
      this.aseguradoras = [
         {url: 'Pelayo.png', nombre: 'Pelayo'},
         {url: 'Generali.png', nombre: 'Generali'},
         {url: 'Mutua-Madrilena.png', nombre: 'Mutua Madrileña'},
         {url: 'Mapfre.png', nombre: 'Mapfre'},
         {url: 'Allianz.png', nombre: 'Allianz'},
         {url: 'Zurich.png', nombre: 'Zurich'},
         {url: 'Helvetia.png', nombre: 'Helvetia'},
         {url: 'Catalana-Occidente.png', nombre: 'Catalana Occidente'},
         {url: 'Axa.png', nombre: 'Axa'},
         {url: 'Linea-Directa.png', nombre: 'Línea Directa'},
         {url: 'Caser.png', nombre: 'Caser Seguros'},
         {url: 'Direct-Seguros.png', nombre: 'Direct Seguros'},
         {url: 'Fenix-Directo.png', nombre: 'Fénix Directo'},
         {url: 'Fiatc.png', nombre: 'Fiatc'},
         {url: 'Genesis.png', nombre: 'Génesis Seguros'},
         {url: 'Plus-Ultra.png', nombre: 'Plus Ultra'},
         {url: 'Ges-Seguros.png', nombre: 'Ges Seguros'},
         {url: 'Liberty.png', nombre: 'Liberty Seguros'},
         {url: 'Reale.png', nombre: 'Reale Seguros'},
         {url: 'Segurcaixa-Adeslas.png', nombre: 'Segurcaixa Adeslas'},
         {url: 'Seguros-Bilbao.png', nombre: 'Seguros Bilbao'},
         {url: 'Verti.png', nombre: 'Verti'},
         {url: 'Fidelidade.png', nombre: 'Fidelidade'},
         {url: 'Balumba.png', nombre: 'Balumba'}
      ];
   }

   ngAfterViewInit() {
      this.animator.animar($('.anim-12'), '', '90%', 3);
      this.animator.animar($('.anim-in'), 'fadeIn', 'bottom-in-view');
      this.animator.animar($('.anim-right'), 'fadeInRight', '80%');
      this.animator.animar($('.anim-left'), 'fadeInLeft', '80%');
   }

}
