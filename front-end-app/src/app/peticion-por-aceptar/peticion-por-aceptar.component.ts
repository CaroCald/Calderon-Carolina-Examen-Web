import { Component, Input, OnInit } from '@angular/core';
import {Paciente} from "../paciente/paciente.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {ServicioApp} from "../Servicios/servicio.app";
import {HttpClient} from "@angular/common/http";
import {medicamentos} from "../medicamento/medicamento.servicio";
import { Peticion } from '../peticion-transferencia/peticion.service';
import { t } from '@angular/core/src/render3';
@Component({
  selector: 'app-peticion-por-aceptar',
  templateUrl: './peticion-por-aceptar.component.html',
  styleUrls: ['./peticion-por-aceptar.component.css']
})
export class PeticionPorAceptarComponent implements OnInit {

  constructor(private http: HttpClient, private _router: Router,
              private service:ServicioApp,  private cookieService: CookieService) { }
  medicamento:medicamentos[]=[];

  @Input()nombreMedicamento;
  @Input() usadoPara;
  @Input()urlMedicamento;
  @Input()nombreMedicamentoDos;
  @Input() usadoParaDos;
  @Input()urlMedicamentoDos;
  @Input() nombreUsuario;
  @Input() urlUsuario;
  acepto=true;
  ngOnInit() {

  }


  aceptar(){
  this.service.setEstadoPeticion(true);
  this.acepto=false;
  }
}
