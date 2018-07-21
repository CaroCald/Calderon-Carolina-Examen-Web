import { Controller, Get, Param } from '@nestjs/common';
import { PeticionesService } from './peticiones.service';
import { PeticionesEntity } from './peticiones.entity';

@Controller()
export class PeticionesController {


  constructor(private _peticion: PeticionesService) {
  }

  @Get('peticiones/:saltar/:tomar')
  busqued(@Param() param): Promise<PeticionesEntity[]> {
    return this._peticion.prueba(param.saltar, param.tomar)
  }
  @Get('peticiones')
  todo(@Param() param): Promise<PeticionesEntity[]> {
    return this._peticion.llenarTodoPeticion();
  }
}