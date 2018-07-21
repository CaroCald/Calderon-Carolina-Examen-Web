import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardUsuarioComponent } from './card-usuario/card-usuario.component';
import {LoginComponent} from "./login/login.component";
import {PeticionTransferenciaComponent} from "./peticion-transferencia/peticion-transferencia.component";
import {SeleccionTransferenciaComponent} from "./seleccion-transferencia/seleccion-transferencia.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {UsuarioService} from "./usuario/usuario.service";
import {UsuarioComponent} from "./usuario/usuario.component";
import {PeticionTransferenciaDosComponent} from "./peticion-transferencia-dos/peticion-transferencia-dos.component";

export const RUTAS_APP: Routes = [


  {
    path: 'login',
    component: CardUsuarioComponent,
  },

  {
    path: 'principal',
    component: UsuarioComponent,
  },
  {
    path: 'seleccion',
      component: SeleccionTransferenciaComponent,
  },

  {
    path: 'transferirDos',
    component: PeticionTransferenciaDosComponent,
  },

  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'transferir',
    component: PeticionTransferenciaComponent,
  },

  {
    path: '**',
    component: LoginComponent
  }
];
