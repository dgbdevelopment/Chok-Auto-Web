import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { MecanicaComponent } from './components/mecanica/mecanica.component';
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChapaComponent } from './components/chapa/chapa.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PoliticaComponent } from './components/politica/politica.component';


const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'servicios/diagnosis', component: DiagnosisComponent },
   { path: 'servicios/mecanica', component: MecanicaComponent },
   { path: 'servicios/chapa-y-pintura', component: ChapaComponent},
   { path: 'aseguradoras', component: AseguradorasComponent },
   { path: 'contacto', component: ContactComponent },
   { path: 'galeria', component: GalleryComponent },
   { path: 'politica-de-privacidad', component: PoliticaComponent },
   { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
