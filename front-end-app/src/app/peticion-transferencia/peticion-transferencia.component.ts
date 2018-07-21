import { Component, OnInit } from '@angular/core';
import {User} from "../usuario/usuario.service";
import {medicamentos} from "../medicamento/medicamento.servicio";
import {Paciente} from "../paciente/paciente.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ServicioApp} from "../Servicios/servicio.app";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticion-transferencia.component.html',
  styleUrls: ['./peticion-transferencia.component.css']
})
export class PeticionTransferenciaComponent implements OnInit {

  usuario:User[]=[];
  medicamento:medicamentos[]=[];
  paciente: Paciente[]=[];

  constructor(private http: HttpClient, private _router: Router,
              private service:ServicioApp,  private cookieService: CookieService) { }

  detalleUsuario={
    nombre:'',
    url:''
  };
  detalleMedicamento={
    nombre:'',
    ur:'',
    usuadoPara:''
  };
  ngOnInit() {
  this.cargarDatos();
  }

  cargarDatos(){
    this.detalleUsuario.nombre = this.cookieService.get('user');
    this.detalleUsuario.url = this.cookieService.get('url');

    this.http.get<medicamentos[]>('http://localhost:3000/Medicamento').subscribe((data: medicamentos[]) => {
      this.detalleMedicamento.nombre =data[this.service.idMedicamentos].nombre;
      this.detalleMedicamento.ur =data[this.service.idMedicamentos].urlMedicamento;
      this.detalleMedicamento.usuadoPara =data[this.service.idMedicamentos].usadoPara;

    });
    this.http.get<Paciente[]>('http://localhost:3000/join').subscribe((data: Paciente[]) => {
      for(let i=0; i<data[this.service.idUsuario].medicamentoId.length; i++){
        this.medicamento[i]=data[this.service.idUsuario].medicamentoId[i]
      }
    });
  }
  seleccionar(indice){
    let url=['/perfil'];
    this._router.navigate(url);
  }
}
