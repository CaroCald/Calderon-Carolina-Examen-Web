import { Component, OnInit } from '@angular/core';
import {Paciente} from "../paciente/paciente.service";
import {medicamentos} from "../medicamento/medicamento.servicio";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {ServicioApp} from "../Servicios/servicio.app";
import {HttpClient} from "@angular/common/http";
import {User} from "../usuario/usuario.service";

@Component({
  selector: 'app-peticion-en-espera',
  templateUrl: './peticion-en-espera.component.html',
  styleUrls: ['./peticion-en-espera.component.css']
})
export class PeticionEnEsperaComponent implements OnInit {

  //medicamento:medicamentos[]=[];
  usuario:User;
  detalleUsuariio={
    nombre:'',
    url:''
  };
  detalleMedicamento={
    nombre:'',
    usadoPara:'',
    url:''
  };
  constructor(private http: HttpClient, private _router: Router,
              private service:ServicioApp,  private cookieService: CookieService) { }

  ngOnInit() {
    this.http.get<medicamentos[]>('http://localhost:3000/Medicamento').subscribe((data: medicamentos[]) => {
      this.detalleMedicamento.nombre =data[this.service.idMedicamentos].nombre;
      this.detalleMedicamento.url =data[this.service.idMedicamentos].urlMedicamento;
      this.detalleMedicamento.usadoPara =data[this.service.idMedicamentos].usadoPara;

    });
    this.http.get<Paciente[]>('http://localhost:3000/join').subscribe((data: Paciente[]) => {
      for(let i=0; i<data[this.service.idUsuario].medicamentoId.length; i++){
        /*if(this.service.estadoMedicamento==true){
          this.medicamento[i]=data[this.service.idUsuario].medicamentoId[i]
        }*/
        console.log(this.service.estadoMedicamento);
      }
    });
    this.http.get<User[]>('http://localhost:3000/usuario').subscribe((data: User[]) => {
      this.detalleUsuariio.nombre=data[this.service.idUsuario-1].nombreUsuario;
      this.detalleUsuariio.url=data[this.service.idUsuario-1].urlUsuario;
    });
  }

}
