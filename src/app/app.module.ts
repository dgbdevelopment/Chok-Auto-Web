import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { FooterComponent } from './components/footer/footer.component';
import { MecanicaComponent } from './components/mecanica/mecanica.component';
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChapaComponent } from './components/chapa/chapa.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PoliticaComponent } from './components/politica/politica.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SliderComponent,
    DiagnosisComponent,
    FooterComponent,
    MecanicaComponent,
    AseguradorasComponent,
    ContactComponent,
    ChapaComponent,
    GalleryComponent,
    PoliticaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
