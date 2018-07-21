import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/index";
import {Paciente} from "../paciente/paciente.service";
import {medicamentos} from "../medicamento/medicamento.servicio";

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient, private _router: Router){

  }
  usuario:User[];
  buscar(parametro, salto, tomar):Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/prueba/'+parametro+'/'+salto+'/'+tomar);
  }
  buscarMedicamento(parametro, salto, tomar):Observable<Paciente[]>{

    let url='http://localhost:3000/pruebaPaciente/'+parametro+'/'+salto+'/'+tomar;
    console.log(url);
    return this.http.get<Paciente[]>(url);
  }

}
export interface User{
  id: number,
  nombreUsuario:string,
  urlUsuario:any,
  correo: any;
  userPaciente:Paciente[]
}
