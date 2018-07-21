import { Component, OnInit } from '@angular/core';
import {User} from "../usuario/usuario.service";
import {HttpClient} from "@angular/common/http";
import {medicamentos} from "../medicamento/medicamento.servicio";
import {Paciente} from "../paciente/paciente.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  detalleUsuario = {
    nombre: '',
    url: ''
  };
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit() {
    this.detalleUsuario.nombre = this.cookieService.get('user');
    this.detalleUsuario.url = this.cookieService.get('url');
  }

}
