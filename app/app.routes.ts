import { Routes } from '@angular/router';
import { HomeComponent } from  './components/home/home.component';
import { MainServicioComponent } from  './components/mainServicio/mainServicio.component';
import { Configuration } from  './shared/app.configuration';
import { ServicioDetailsComponent } from './components/servicioDetails/servicioDetails.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'servicio', component: MainServicioComponent },
  { path: 'servicio/:servicioId', component: ServicioDetailsComponent }
];