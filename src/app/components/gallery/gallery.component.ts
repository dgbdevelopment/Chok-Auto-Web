import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AnimationService } from "../../services/animation.service";
import $ from "jquery";
declare var $: $;

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.sass"],
})
export class GalleryComponent implements OnInit, AfterViewInit {
  public imagenes: Array<any>;
  public numeroImagenes = 93;
  public currentImage: string;
  public contador: number;

  constructor(private animator: AnimationService) {}

  ngOnInit() {
    window.scrollTo({ top: 0 });

    this.imagenes = [];

    for (let i = 0; i < this.numeroImagenes; i++) {
      if (i < 9) {
        this.imagenes.push("../../../assets/img/galeria/0" + (i + 1) + ".jpeg");
      } else {
        this.imagenes.push("../../../assets/img/galeria/" + (i + 1) + ".jpeg");
      }
    }
  }

  async ngAfterViewInit() {
    this.animator.animar($(".anim-12"), "", "90%", 3);
    this.animator.animar($(".anim-in"), "fadeIn", "80%");
    this.animator.animar($(".anim-right"), "fadeInRight", "80%");
    this.animator.animar($(".anim-left"), "fadeInLeft", "80%");
    this.animator.animar($(".anim-up"), "fadeInUp", "80%");
    this.animator.animar($(".anim-down"), "fadeInDown", "80%");

    $(".btn-cerrar").click(function () {
      $("#modal").hide();
    });

    $("#modal").hide();
  }

  abreModal(i: number) {
    this.contador = i;
    this.currentImage = this.imagenes[i];
    $("#modal").show();
  }

  change(valor: number) {
    if (this.contador + valor < 0) {
      this.currentImage = this.imagenes[this.numeroImagenes - 1];
      this.contador = this.numeroImagenes - 1;
    } else if (this.contador + valor >= this.numeroImagenes) {
      this.currentImage = this.imagenes[0];
      this.contador = 0;
    } else {
      this.currentImage = this.imagenes[this.contador + valor];
      this.contador += valor;
    }
  }
}
