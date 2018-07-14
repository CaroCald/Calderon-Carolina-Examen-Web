import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CardUsuarioComponent } from './card-usuario/card-usuario.component';
import { CardPacienteComponent } from './card-paciente/card-paciente.component';
import { CardMedicamentoComponent } from './card-medicamento/card-medicamento.component';
import { UserComponent } from './user/user.component';
import { PacienteComponent } from './paciente/paciente.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RUTAS_APP } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CardUsuarioComponent,
    CardPacienteComponent,
    CardMedicamentoComponent,
    UserComponent,
    PacienteComponent,
    MedicamentoComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
