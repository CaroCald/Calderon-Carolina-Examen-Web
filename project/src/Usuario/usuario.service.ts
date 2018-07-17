import { Injectable, Req } from '@nestjs/common';
import { createConnection, getConnection, getRepository, Like, Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PacienteEntity } from '../paciente/paciente.entity';

@Injectable()
export class UsuarioService {


  arregloUsuario: Usuario[] = [];


  constructor(@InjectRepository(UsuarioEntity)
              private readonly photoRepository: Repository<UsuarioEntity>) {

  }

  async busquedaSkip(parametro, salto, tomar): Promise<UsuarioEntity[]> {
    return await getConnection().getRepository(UsuarioEntity)
      .createQueryBuilder("usuario").where({
        nombreUsuario: Like('%' + parametro + '%')
      })
      .skip(salto).take(tomar)
      .getMany();
  }

  async busquedaUser(parametro): Promise<UsuarioEntity[]> {
    return await this.photoRepository.find({nombreUsuario: Like('%' + parametro + '%'),
    });
  }
   async findAll( correo): Promise<UsuarioEntity[]> {
    return await getConnection().getRepository(UsuarioEntity)
      .createQueryBuilder("usuario").where({
        correo: correo
      }).getMany()

  }


  async insertar(@Req() req) {
    const usuarioPeliculas = getConnection().getRepository(UsuarioEntity).create(req.body);
    return getConnection().getRepository(UsuarioEntity).save(usuarioPeliculas);
  }

}

export class Usuario {
  constructor(
    public id: number,
    public nombreUsuario: string,
    public urlUsuario: any,
    public correo: any,
  ) {
  }
}

