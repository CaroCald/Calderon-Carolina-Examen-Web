import { Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes } from '@nestjs/common';
import { Paciente, PacienteService } from './paciente.service';
import { getConnection } from 'typeorm';
import { PacienteEntity } from './paciente.entity';

@Controller()
export class PacienteController {
  constructor(private _pacienteService: PacienteService) {
  }

  @Get('cincoPaciente')
  traercinco(): Promise<PacienteEntity[]> {
    return this._pacienteService.taercinco();
  }
  @Get('siguientePaciente')
  traersi(): Promise<PacienteEntity[]> {
    return this._pacienteService.taeSiguiente();
  }

  @Get('dosaciente')
  traerdos(): Promise<PacienteEntity[]> {
    return this._pacienteService.taerDos();
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

  @Get('Paciente/:id')
  obtenerUno(@Res() res, @Req() req, @Param() parametros) {
    const existeParametro = parametros.id;
    if (existeParametro != null) {
      const paciente = this._pacienteService.obtenerUno(parametros.id);
      return res.send(paciente);
    } else {
      return res.send({ mensaje: 'Id de paciente no encontrado' });
    }
  }

  @Put('Paciente/:id')
  editarUno(@Body() bodyParams, @Res() res, @Param() parametro) {
    const respuesta = this._pacienteService.editarUno(parametro.id, bodyParams.nombre, bodyParams.apellido, bodyParams.fecha, bodyParams.hijos, bodyParams.seguro);
    return res.send(respuesta);
  }

}