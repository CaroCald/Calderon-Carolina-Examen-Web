import { Component, OnInit } from '@angular/core';
import {Paciente, PacienteServiceApp} from "./paciente.service";
import {HttpClient} from "@angular/common/http";
import {ServicioApp} from "../Servicios/servicio.app";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  paciente: Paciente[]=[];
  class='page-item';
  class2='page-item';
  arregloPaciente:Paciente[]=[];
  constructor(private http: HttpClient, private pacienteService:PacienteServiceApp,
              private service:ServicioApp) {
  }

  ngOnInit() {
    this.class=this.class+' disabled';
    this.escucharCambiosBusqueda();
  }


  escucharCambiosBusqueda(){
    this.service.emitirPaciente.subscribe((paciente:Paciente[]) => {
      this.service.agregarPacientes(paciente);
      this.paciente=paciente.slice(0,2);
    });
  }
  cargar() {
    this.paciente=this.service.paciente.slice(0,2);
    this.class=this.class+' disabled';
    this.class2='page-item';
  }

  cargarMas() {
    this.paciente=this.service.paciente.slice(2,4);
    this.class=this.class2;
    this.class2=this.class+' disabled'
  }

}
