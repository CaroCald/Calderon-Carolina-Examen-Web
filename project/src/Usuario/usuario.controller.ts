import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Usuario, UsuarioService } from './usuario.service';
import { getConnection, getRepository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Controller()
export class UsuarioController {
  constructor(private _usuarioService: UsuarioService) {

  }

  @Get('cincoUsuarios')
  mostrarCinco():Promise<UsuarioEntity[]> {
    return this._usuarioService.traerCinco();
  }
  @Get('cincoSiguientes')
  mostrarSiguientes():Promise<UsuarioEntity[]> {
    return this._usuarioService.traerSiguientes();
  }
  @Get('usuario')
  findAll(): Promise<UsuarioEntity[]> {
    return this._usuarioService.findAll();
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