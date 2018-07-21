import { Component, OnInit } from '@angular/core';
import {Paciente, PacienteServiceApp} from "./paciente.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../usuario/usuario.service";
import {ServicioApp} from "../Servicios/servicio.app";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  paciente: Paciente[];
  class='page-item';
  class2='page-item';
  arregloPaciente:Paciente[]=[];
  constructor(private http: HttpClient, private pacienteService:PacienteServiceApp,
              private service:ServicioApp) {
  }

  ngOnInit() {
    this.cargar();
    this.class=this.class+' disabled';
    this.escucharCambiosBusqueda();
    console.log('pacienteeee '+this.paciente);
  }


  escucharCambiosBusqueda(){
    this.service.emitirPaciente.subscribe((paciente:Paciente[]) => {
      this.paciente=paciente;
    });
  }
  cargar() {

    this.escucharCambiosBusqueda();
    this.class=this.class+' disabled';
    this.class2='page-item';
  }

  cargarMas() {
    /*this.http.get<Paciente[]>('http://localhost:3000/dosaciente').subscribe((data: Paciente[]) => {
      this.paciente = data;
    });*/

    this.class=this.class2;
    this.class2=this.class+' disabled'
  }
  retomarBusqueda(parametro){
    this.pacienteService.buscar(parametro).subscribe((data:Paciente[])=>{
      this.paciente=data;
    })
  }

  seleccionar() {

  }
}
