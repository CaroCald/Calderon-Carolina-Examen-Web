import { Component, OnInit } from '@angular/core';
import {Paciente} from "../paciente/paciente.service";
import {Router} from "@angular/router";
import {medicamentos} from "../medicamento/medicamento.servicio";
import {CookieService} from "ngx-cookie-service";
import {ServicioApp} from "../Servicios/servicio.app";
import {HttpClient} from "@angular/common/http";
import {User} from "../usuario/usuario.service";

@Component({
  selector: 'app-peticion-transferencia-dos',
  templateUrl: './peticion-transferencia-dos.component.html',
  styleUrls: ['./peticion-transferencia-dos.component.css']
})
export class PeticionTransferenciaDosComponent implements OnInit {
  usuario:User;
  medicamento:medicamentos[]=[];
  paciente: Paciente[];
  constructor(private http: HttpClient, private _router: Router, private service:ServicioApp, ) { }

  detalleUsuario={
    nombre:'',
    url:''
  };
  detallePaciente={
    nombre:'',
    apellido:'',
    edad:'',
    url:''
  };

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){
    this.http.get<User[]>('http://localhost:3000/usuario').subscribe((data: User[]) => {
      this.detalleUsuario.nombre=data[this.service.idUsuario-1].nombreUsuario;
      this.detalleUsuario.url=data[this.service.idUsuario-1].urlUsuario;
    });
    this.http.get<Paciente[]>('http://localhost:3000/Paciente').subscribe((data: Paciente[]) => {
      this.detallePaciente.nombre = data[this.service.idUsuario].nombre;
      this.detallePaciente.apellido = data[this.service.idUsuario].apellido;
      this.detallePaciente.url = data[this.service.idUsuario].urlPaciente;
    });
    this.http.get<Paciente[]>('http://localhost:3000/join').subscribe((data: Paciente[]) => {
      for(let i=0; i<data[this.service.idUsuario].medicamentoId.length; i++){
        this.medicamento[i]=data[this.service.idUsuario].medicamentoId[i]
      }
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
