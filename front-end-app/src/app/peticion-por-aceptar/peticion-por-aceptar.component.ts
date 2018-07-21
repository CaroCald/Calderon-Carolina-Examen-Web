import { Component, OnInit } from '@angular/core';
import {Paciente} from "../paciente/paciente.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {ServicioApp} from "../Servicios/servicio.app";
import {HttpClient} from "@angular/common/http";
import {medicamentos} from "../medicamento/medicamento.servicio";
@Component({
  selector: 'app-peticion-por-aceptar',
  templateUrl: './peticion-por-aceptar.component.html',
  styleUrls: ['./peticion-por-aceptar.component.css']
})
export class PeticionPorAceptarComponent implements OnInit {

  constructor(private http: HttpClient, private _router: Router,
              private service:ServicioApp,  private cookieService: CookieService) { }
  medicamento:medicamentos[]=[];

  detalleMedicamento={
    nombre:'',
    usadoPara:'',
    url:''
  };
  ngOnInit() {
    this.http.get<medicamentos[]>('http://localhost:3000/Medicamento').subscribe((data: medicamentos[]) => {
      this.detalleMedicamento.nombre =data[this.service.idMedicamentos].nombre;
      this.detalleMedicamento.url =data[this.service.idMedicamentos].urlMedicamento;
      this.detalleMedicamento.usadoPara =data[this.service.idMedicamentos].usadoPara;

    });
    this.http.get<Paciente[]>('http://localhost:3000/join').subscribe((data: Paciente[]) => {
      for(let i=0; i<data[this.service.idUsuario].medicamentoId.length; i++){
        if(this.service.estadoMedicamento==true){
          this.medicamento[i]=data[this.service.idUsuario].medicamentoId[i]
        }
      }
    });
  }

}
