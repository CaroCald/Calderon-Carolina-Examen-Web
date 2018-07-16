import { Injectable, Req } from '@nestjs/common';
import { createConnection, getConnection, Like, Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {


  arregloUsuario: Usuario[] = [];


  constructor(@InjectRepository(UsuarioEntity)
              private readonly photoRepository: Repository<UsuarioEntity>) {

  }

  async findAll(): Promise<UsuarioEntity[]> {
    return await this.photoRepository.find();
  }

  async traerCinco(nombre): Promise<UsuarioEntity[]> {
    return await this.photoRepository.find({
      relations: ["userPaciente"],
      skip: 0, take: 4,
    }
  );

  }
  async traerSiguientes(): Promise<UsuarioEntity[]> {
    return await this.photoRepository.find({ relations: ["userPaciente"],
      skip: 5, take: 4 });
  }

  crearUser(usuario: Usuario): Usuario[] {
    this.arregloUsuario.push(usuario);
    return this.arregloUsuario;
  }

  async conexion() {
    return await getConnection().getRepository(UsuarioEntity).find();
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

