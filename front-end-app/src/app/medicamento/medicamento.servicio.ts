import { Injectable } from '@angular/core';
import { Paciente } from '../paciente/paciente.service';

@Injectable()
export class MedicamentoServicio {

}
export interface medicamentos{
  id: number,
   gramos: number,
   nombre: string,
   composicion: number,
   usadoPara: string,
   fechaCaducidad: string,
   numeroPastillas: number,
   urlMedicamento: any,
   paciente: number,
  estado,
  medicamentoPeticionId;number;
  medicamentoId:medicamentos;
  pacienteId:Paciente;
}
