import {Injectable} from '@angular/core';
import {User} from "../usuario/usuario.service";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {medicamentos} from "../medicamento/medicamento.servicio";

@Injectable()
export class PacienteServiceApp {
  constructor(private http: HttpClient) {

  }

  buscar(parametro): Observable<Paciente[]> {
    return this.http.get<Paciente[]>('http://localhost:3000/buscar/' + parametro);
  }

  cargar(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>('http://localhost:3000/siguientePaciente');
  }

}

export interface Paciente {
  id: number,
  nombre: string,
  apellido: string,
  edad: number,
  fecha: string,
  hijos: number,
  tieneSeguro: any,
  urlPaciente: string,
  pacienteId: Paciente[];
  medicamentoId:medicamentos[];

}

