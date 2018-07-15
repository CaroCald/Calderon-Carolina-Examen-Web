import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardUsuarioComponent } from './card-usuario/card-usuario.component';

export const RUTAS_APP: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'card',
    component: CardUsuarioComponent,
  },

  {
    path: '**',
    component: HomeComponent
  }
];
