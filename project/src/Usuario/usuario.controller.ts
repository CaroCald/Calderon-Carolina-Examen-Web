import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Usuario, UsuarioService } from './usuario.service';
import { getConnection, getRepository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { PacienteEntity } from '../paciente/paciente.entity';

@Controller()
export class UsuarioController {
  constructor(private _usuarioService: UsuarioService) {

  }

  @Get('usuario/:correo')
  findAll(@Param() param): Promise<UsuarioEntity[]> {
    return this._usuarioService.findAll( param.correo);
  }


  @Get('buscaruser/:nombreUsuario')
  buscar(@Param() param): Promise<UsuarioEntity[]> {
    return this._usuarioService.busquedaUser(param.nombreUsuario);
  }
  @Get('usuario')
  todo(@Param() param): Promise<UsuarioEntity[]> {
    return this._usuarioService.llenar();
  }
  @Get('hijos/:id')
  hijos(@Param() param): Promise<PacienteEntity[]> {
    return this._usuarioService.join(param.id)
  }
  @Get('prueba/:nombreUsuario/:salto/:tomar')
  prueba(@Param() param): Promise<UsuarioEntity[]> {
    return this._usuarioService.prueba(param.nombreUsuario, param.salto, param.tomar);
  }

  @Get('buscarskip/:nombreUsuario/:salto/:tomar')
  buscarSkip(@Param() param): Promise<UsuarioEntity[]> {
    return this._usuarioService.busquedaSkip(param.nombreUsuario, param.salto, param.tomar);
  }

  @Post('usuario')
  mostrar(@Body('id') id,
          @Body('nombreUsuario') nombreUsuario,
          @Body('urlUsuario') urlUsuario, @Req() req) {
    const userRepository = getConnection().getRepository(UsuarioEntity);
    const usuarioPeliculas = userRepository.create(req.body);
    return userRepository.save(usuarioPeliculas);
  }
}