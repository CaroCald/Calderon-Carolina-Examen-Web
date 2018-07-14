import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Usuario, UsuarioService } from './usuario.service';
import { PacienteEntity } from '../paciente/paciente.entity';
import { getConnection, getRepository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Controller()
export class UsuarioController {
  constructor(private _usuarioService: UsuarioService) {
  }

  @Get('usuario')
  async mostrarDatos(@Res() response){
    this._usuarioService.listartodo(response);
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