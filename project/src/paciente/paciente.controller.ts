import { Body, Controller, Get, Param, Post, Put, Query, Req, Res, UsePipes } from '@nestjs/common';
import { Paciente, PacienteService } from './paciente.service';
import { getConnection, Like } from 'typeorm';
import { PacienteEntity } from './paciente.entity';

@Controller()
export class PacienteController {
  constructor(private _pacienteService: PacienteService) {
  }

  @Get('buscar/:nombre/:salto/:tomar')
  buscar(@Param() param): Promise<PacienteEntity[]> {
    return this._pacienteService.busquedaPaciente(param.nombre, param.salto, param.tomar);
  }
  @Get('pruebaPaciente/:nombre/:salto/:tomar')
  probar(@Param() param): Promise<PacienteEntity[]> {
    return this._pacienteService.prueba(param.nombre, param.salto, param.tomar);
  }

  @Get('Paciente')
  findAll(): Promise<PacienteEntity[]> {
    return this._pacienteService.llenar();
  }

  @Post('Paciente')
  crearPacientes(@Body('id') id,
                 @Body('nombre') nombre,
                 @Body('apellido') apellido,
                 @Body('edad') edad,
                 @Body('fecha') fecha,
                 @Body('hijos') hijos,
                 @Body('tieneSeguro') tieneSeguro,
                 @Body('urlPaciente') urlPaciente,
                 @Body('pacienteIdId') pacienteId,
                 @Res() res, @Req() req) {
    const userRepository = getConnection().getRepository(PacienteEntity);
    const paciente = userRepository.create(req.body);
    return userRepository.save(paciente);
  }


}