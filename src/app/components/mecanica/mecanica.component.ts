import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AnimationService } from "../../services/animation.service";
import $ from "jquery";
declare const $: $;

@Component({
  selector: "app-mecanica",
  templateUrl: "./mecanica.component.html",
  styleUrls: ["./mecanica.component.sass"],
  providers: [AnimationService],
})
export class MecanicaComponent implements OnInit, AfterViewInit {
  public servicios: Array<any>;

  constructor(private animator: AnimationService) {}

  ngOnInit() {
    window.scrollTo({ top: 0 });

    this.servicios = [
      {
        nombre: "Localización de averías",
        img: "Localizacion-de-averias.png",
      },
      {
        nombre: "Aceite lubricante",
        img: "Apagado-de-inspecciones.png",
      },
      {
        nombre: "Filtros",
        img: "Filtros.png",
      },
      {
        nombre: "Pre-ITV",
        img: "Pre-ITV.png",
      },
      {
        nombre: "Frenos",
        img: "Frenos.png",
      },
      {
        nombre: "Carga y arranque",
        img: "Carga-y-arranque.png",
      },
      {
        nombre: "Distribución",
        img: "Distribucion.png",
      },
      {
        nombre: "Dirección",
        img: "Direccion.png",
      },
      {
        nombre: "Suspensión",
        img: "Suspension.png",
      },
      {
        nombre: "Transmisión",
        img: "Transmision.png",
      },
      {
        nombre: "Turbo",
        img: "Turbo.png",
      },
      {
        nombre: "Aire Acondicionado",
        img: "Climatizador.png",
      },
    ];
  }

  ngAfterViewInit() {
    this.animator.animar($(".anim-12"), "", "90%", 3);
    this.animator.animar($(".anim-10"), "", "90%", 5, "Big");
    this.animator.animar($(".anim-in"), "fadeIn", "bottom-in-view");
    this.animator.animar($(".anim-right"), "fadeInRight", "80%");
    this.animator.animar($(".anim-left"), "fadeInLeft", "80%");
    this.animator.animar($(".anim-up"), "fadeInUp", "80%");
    this.animator.animar($(".anim-down"), "fadeInDown", "80%");
  }
}
