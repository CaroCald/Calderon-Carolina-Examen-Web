import { Component, OnInit } from '@angular/core';
import {medicamentos} from "./medicamento.servicio";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ServicioApp} from "../Servicios/servicio.app";

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {
  medicamento: medicamentos[]=[];

  class = 'page-item';
  class2='page-item';
  constructor(private http: HttpClient, private router:Router, private service:ServicioApp) {
  }

  ngOnInit() {
    this.class = this.class + ' ' + 'disable';
    this.escucharCambiosBusqueda();

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
  escucharCambiosBusqueda(){
    this.service.emitirMedicamento.subscribe((medicamentos) => {
        this.medicamento= medicamentos;
    });
  }

  seleccionar(id) {
    let url=['/transferir'];
    this.service.setIdMedicamento(id);
    this.router.navigate(url);
  }
}
