import { Injectable } from '@angular/core';
import { User } from '../usuario/usuario.service';
import { medicamentos } from '../medicamento/medicamento.servicio';

@Injectable()
export  class PeticionService {

}
export interface Peticion{
  id: number,
  estado:boolean,
  userPeticion:User[],
  medPeticion:medicamentos[]
}
