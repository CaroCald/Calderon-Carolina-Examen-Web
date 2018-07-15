import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

}
export interface User{
  id: number,
  nombreUsuario:string,
  urlUsuario:any,
  correo: any;
}
