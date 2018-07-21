import { Component, OnInit } from '@angular/core';
import {User, UsuarioService} from "../usuario/usuario.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ServicioApp} from "../Servicios/servicio.app";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
mostrar=false;
usuario:User[];
variable='';
url='';

  constructor(private http: HttpClient, private _router: Router, private _usuarioService:ServicioApp ) { }

  ngOnInit() {
    this.escucharCambiosHome();
  }

  escucharCambiosHome() {
    this._usuarioService.emitircambioAuto.subscribe((variable:User) => {this.variable= variable.nombreUsuario;
    this.url=variable.urlUsuario});
    }




}
