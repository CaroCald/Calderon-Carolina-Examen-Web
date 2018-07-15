import { Injectable } from '@angular/core';

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
}
