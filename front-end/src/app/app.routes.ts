import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';
export const RUTAS_APP: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: LoginComponent
  }
];
