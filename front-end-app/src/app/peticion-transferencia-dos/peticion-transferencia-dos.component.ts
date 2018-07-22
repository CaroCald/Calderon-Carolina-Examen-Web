import { Component, OnInit } from '@angular/core';
import {Paciente} from "../paciente/paciente.service";
import {Router} from "@angular/router";
import {medicamentos} from "../medicamento/medicamento.servicio";
import {CookieService} from "ngx-cookie-service";
import {ServicioApp} from "../Servicios/servicio.app";
import {HttpClient} from "@angular/common/http";
import {User} from "../usuario/usuario.service";
import { Peticion } from '../peticion-transferencia/peticion.service';
import { d } from '@angular/core/src/render3';

@Component({
  selector: 'app-peticion-transferencia-dos',
  templateUrl: './peticion-transferencia-dos.component.html',
  styleUrls: ['./peticion-transferencia-dos.component.css']
})
export class PeticionTransferenciaDosComponent implements OnInit {
  usuario:User;
  medicamento:medicamentos[]=[];
  paciente: Paciente[];
  peticion:Peticion[];
  constructor(private http: HttpClient, private _router: Router, private service:ServicioApp, ) { }

  detalleUsuario={
    nombre:'',
    url:''
  };

  detalleMedicamento={
    nombreMed:'',
    usado:'',
    url:''
  };

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){
    this.http.get<Peticion[]>('http://localhost:3000/peticiones/0/2').subscribe((data: Peticion[]) => {
      this.peticion=data;
      this.detalleUsuario.nombre=data[0].userPeticion[0].nombreUsuario;
      this.detalleUsuario.url=data[0].userPeticion[0].urlUsuario;
      this.medicamento=data.map(value => value.medPeticion)[0];
      this.detalleMedicamento.nombreMed=data[0].medPeticion[0].nombre;
      this.detalleMedicamento.url=data[0].medPeticion[0].urlMedicamento;
      this.detalleMedicamento.usado=data[0].medPeticion[0].usadoPara;


    });


  }

  cargarMas(){
    this.http.get<Peticion[]>('http://localhost:3000/peticiones/0/4').subscribe((data: Peticion[]) => {
      this.peticion=data;
      this.detalleUsuario.nombre=data[0].userPeticion[0].nombreUsuario;
      this.detalleUsuario.url=data[0].userPeticion[0].urlUsuario;
      this.medicamento=data.map(value => value.medPeticion)[0];
      this.detalleMedicamento.nombreMed=data[1].medPeticion[1].nombre;
      this.detalleMedicamento.url=data[1].medPeticion[1].urlMedicamento;
      this.detalleMedicamento.usado=data[1].medPeticion[1].usadoPara;


    });
  }
  seleccionar(indice, estado){
    let url=['/transferir'];
    estado=true;
    this.service.setEstado(estado);
    this.service.setIdMedicamento(indice);
    this._router.navigate(url);
  }

}
