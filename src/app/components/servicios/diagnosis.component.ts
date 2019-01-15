import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';
declare const $: $;

@Component({
   selector: 'app-diagnosis',
   templateUrl: './diagnosis.component.html',
   styleUrls: ['./diagnosis.component.sass']
})
export class DiagnosisComponent implements OnInit, AfterViewInit {

   public marcas: Array<any>;
   public diagnosis: Array<any>;
   // private fragment: string;

   constructor(/*private route: ActivatedRoute*/) { }

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
      'Transmisión', 'Airbag', 'Climatizador',
      'Cuadro de mandos', 'Aparcamiento asistido'];
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

      $('.anim-12').each(function (index) {
         const animation = getAnimation(index, 3);
         animar($(this), animation, 'bottom-in-view');
      });
      $('.anim-10').each(function (index) {
         const animation = getAnimation(index, 5, 'Big');
         animar($(this), animation, 'bottom-in-view');
      });

      $('.anim-in').each(function () {
         animar($(this), 'fadeIn', 'bottom-in-view');
      });
      $('.anim-right').each(function () {
         animar($(this), 'fadeInRight', '80%');
      });
      $('.anim-left').each(function () {
         animar($(this), 'fadeInLeft', '80%');
      });
      $('.anim-up').each(function () {
         animar($(this), 'fadeInUp', '80%');
      });
      $('.anim-down').each(function () {
         animar($(this), 'fadeInDown', '80%');
      });
   }
}

function animar(element: $, animation: string, off: string) {
   const repetir = setInterval(function () {
      if (element.height() >= 10) {
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
