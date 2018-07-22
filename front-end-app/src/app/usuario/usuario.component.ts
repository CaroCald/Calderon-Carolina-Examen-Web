import {Component, OnInit} from '@angular/core';
import {User, UsuarioService} from "./usuario.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Paciente, PacienteServiceApp} from "../paciente/paciente.service";
import {ServicioApp} from "../Servicios/servicio.app";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  constructor(private http: HttpClient, private _router: Router, private usuarioService: UsuarioService, private pacienteService: PacienteServiceApp, private service: ServicioApp) {
  }

  usuario: User[];
  paciente: Paciente[]=[];
  nombre;
  mostrarComponentes = false;
  class = 'page-item';
  class2 = 'page-item';
  param;

  ngOnInit() {
    this.class = this.class + ' disabled'
  }


  primero(parametro) {
    this.usuarioService.buscar(parametro, 0, 4).subscribe((data: User[]) => {
      this.usuario = data;
    });
    this.class = this.class + ' disabled';
    this.class2 = 'page-item';
  }

  retomarBusqueda(parametro) {
    this.mostrarComponentes = true;
    this.usuarioService.buscar(parametro, 0, 4).subscribe((data: User[]) => {
      this.usuario = data;
      for(let i=0; i<data.map(datos=>datos.userPaciente).length; i++){
        this.service.cambiarBusqueda(data.map(datos=>datos.userPaciente)[i]);
        }
      let nombreUser=data.map(datos=>datos.userPaciente)[0].map(si=>si.nombre)[0];
      console.log(nombreUser);
      this.usuarioService.buscarMedicamento(nombreUser,0,4).subscribe((data:Paciente[])=>{
        for(let i=0; i<data.map(datos=>datos.medicamentoId).length; i++){
          this.service.cambiarMedicamento(data.map(datos=>datos.medicamentoId)[i]);
        }
      });

    });
  }


  seleccionar(indice) {
    let url = ['/seleccion'];
    this._router.navigate(url);
    this.service.setIdUsuario(indice);
  }

  mostrar(parametro) {

    this.usuarioService.buscar(parametro, 5, 4).subscribe((data: User[]) => {
      this.usuario = data;
    });
    this.class = this.class2;
    this.class2 = this.class + ' disabled'
  }

}
