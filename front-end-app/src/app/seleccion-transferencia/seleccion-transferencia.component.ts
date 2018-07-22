import { Component, OnInit } from '@angular/core';
import {medicamentos} from "../medicamento/medicamento.servicio";
import {User, UsuarioService} from "../usuario/usuario.service";
import {Paciente} from "../paciente/paciente.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ServicioApp} from "../Servicios/servicio.app";

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css']
})
export class SeleccionTransferenciaComponent implements OnInit {
  usuario:User;
  medicamento:medicamentos[]=[];
  paciente: Paciente[];
  medicamentoArreglo;
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
