import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationService } from '../../services/animation.service';

import $ from 'jquery';
declare const $: $;

@Component({
   selector: 'app-diagnosis',
   templateUrl: './diagnosis.component.html',
   styleUrls: ['./diagnosis.component.sass'],
   providers: [AnimationService]
})
export class DiagnosisComponent implements OnInit, AfterViewInit {

   public marcas: Array<any>;
   public diagnosis: Array<any>;
   // private fragment: string;

   constructor(
      /*private route: ActivatedRoute*/
      private animator: AnimationService
   ) { }

   ngOnInit() {
      window.scrollTo({top: 0});
      // this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
      const nombres = ['Abarth', 'Alfa Romeo', 'Aston Martin', 'Audi',
         'Bentley', 'Bmw', 'Cadillac', 'Chevrolet', 'Chrysler',
         'Citroen', 'Dacia', 'Daewoo', 'Daihatsu', 'Dodge', 'Ferrari',
         'Fiat', 'Ford', 'Galloper', 'Honda', 'Iveco', 'Jaguar',
         'Jeep', 'Kia', 'Lada', 'Lancia', 'Land Rover', 'Lexus',
         'Lotus', 'Maserati', 'Mazda', 'Mercedes Benz',
         'MG', 'Mini', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot',
         'Porsche', 'Renault', 'Rolls Royce', 'Rover', 'Saab',
         'Santana Motor', 'Seat', 'Skoda', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tata', 'Toyota', 'Volkswagen', 'Volvo'];
      this.marcas = [];
      nombres.map((nombre, index) => {
         const marca = { nombre: nombre, url: nombre.replace(' ', '-') + '.png' };
         this.marcas.push(marca);
      });

      const description = ['Localización de averías', 'Apagado de inspecciones', 'Frenos', 'Dirección', 'Suspensión',
      'Transmisión', 'Airbag', 'Climatizador', 'Cuadro de mandos', 'Aparcamiento asistido'];
      this.diagnosis = [];
      description.map((desc, index) => {
         const diag = { description: desc, url: desc.replace(' ', '-').replace(' ', '-').replace('ó', 'o').replace('í', 'i') + '.png' };
         this.diagnosis.push(diag);
      });
   }

   ngAfterViewInit() {
      // try {
      //    document.querySelector('#' + this.fragment).scrollIntoView();
      // } catch (e) { console.log(e); }
      this.animator.animar($('.anim-12'), '', '90%', 3);
      this.animator.animar($('.anim-10'), '', '90%', 5, 'Big');
      this.animator.animar($('.anim-in'), 'fadeIn', 'bottom-in-view');
      this.animator.animar($('.anim-right'), 'fadeInRight', '80%');
      this.animator.animar($('.anim-left'), 'fadeInLeft', '80%');
      this.animator.animar($('.anim-up'), 'fadeInUp', '80%');
      this.animator.animar($('.anim-down'), 'fadeInDown', '80%');
   }
}
