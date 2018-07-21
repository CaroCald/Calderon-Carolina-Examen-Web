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
  medicamento: medicamentos[];

  class = 'page-item';

  constructor(private http: HttpClient, private router:Router, private service:ServicioApp) {
  }

  ngOnInit() {
    this.class = this.class + ' ' + 'disable';
    this.escucharCambiosBusqueda();
  }

  escucharCambiosBusqueda(){
    this.service.emitirMedicamento.subscribe((autos) => {this.medicamento= autos;
    });
  }

  seleccionar(id) {
    let url=['/transferir'];
    this.service.setIdMedicamento(id);
    this.router.navigate(url);
  }
}
