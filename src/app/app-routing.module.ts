import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { MecanicaComponent } from './components/mecanica/mecanica.component';
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';



const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'servicios/diagnosis', component: DiagnosisComponent },
   { path: 'servicios/mecanica', component: MecanicaComponent },
   { path: 'aseguradoras', component: AseguradorasComponent },
   { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
