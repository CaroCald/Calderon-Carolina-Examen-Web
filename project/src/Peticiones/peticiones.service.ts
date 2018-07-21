import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../Usuario/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { PeticionesEntity } from './peticiones.entity';

@Injectable()
export class PeticionesService{
  constructor(@InjectRepository(PeticionesEntity)
              private readonly peticionRepository: Repository<PeticionesEntity>) {

  }
  async prueba(saltar, tomar): Promise<PeticionesEntity[]> {
    return await this.peticionRepository.find(
      {
        relations: ["userPeticion" ] ,
        skip: saltar, take:tomar
      }
    );
  }
  async llenarTodoPeticion(): Promise<PeticionesEntity[]> {
    return await this.peticionRepository.find();
  }
}
export class Peticiones {
  constructor(
    public id: number,
    public estado: boolean,
  ) {
  }
}