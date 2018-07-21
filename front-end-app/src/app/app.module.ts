import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardUsuarioComponent } from './card-usuario/card-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RouterModule } from '@angular/router';
import { RUTAS_APP } from './app.routes';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardPacienteComponent } from './card-paciente/card-paciente.component';
import { CardMedicamentoComponent } from './card-medicamento/card-medicamento.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PeticionTransferenciaComponent } from './peticion-transferencia/peticion-transferencia.component';
import { SeleccionTransferenciaComponent } from './seleccion-transferencia/seleccion-transferencia.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PacienteServiceApp } from './paciente/paciente.service';
import { UsuarioService } from './usuario/usuario.service';
import {ServicioApp} from "./Servicios/servicio.app";
import { CookieService } from 'ngx-cookie-service';
import { PeticionEnEsperaComponent } from './peticion-en-espera/peticion-en-espera.component';
import { PeticionPorAceptarComponent } from './peticion-por-aceptar/peticion-por-aceptar.component';
import { PeticionTransferenciaDosComponent } from './peticion-transferencia-dos/peticion-transferencia-dos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardUsuarioComponent,
    UsuarioComponent,
    LoginComponent,
    CardPacienteComponent,
    CardMedicamentoComponent,
    MedicamentoComponent,
    PacienteComponent,
    PeticionTransferenciaComponent,
    SeleccionTransferenciaComponent,
    PerfilComponent,
    PeticionEnEsperaComponent,
    PeticionPorAceptarComponent,
    PeticionTransferenciaDosComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [PacienteServiceApp, UsuarioService, ServicioApp, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
