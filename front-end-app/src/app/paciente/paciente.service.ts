import { Injectable } from '@angular/core';

@Injectable()
export class PacienteServiceApp {

}
export interface Paciente {
  id: number,
   nombre:string,
   apellido:string,
   edad:number,
 fecha: string,
   hijos: number,
   tieneSeguro: any,
 urlPaciente: string,
   pacienteId: number
}
