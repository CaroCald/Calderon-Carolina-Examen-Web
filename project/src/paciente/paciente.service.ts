import { Injectable } from '@nestjs/common';
import { PacienteEntity } from './paciente.entity';
import { getConnection, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../Usuario/usuario.entity';

@Injectable()
export class PacienteService {

  arregloPacientes: Paciente[] = [];

  constructor(@InjectRepository(PacienteEntity)
              private readonly photoRepository: Repository<PacienteEntity>) {

  }

  async busquedaPaciente(parametro, salto, tomar): Promise<PacienteEntity[]> {
    return await getConnection().getRepository(PacienteEntity)
      .createQueryBuilder("paciente").where({
        nombre: Like('%' + parametro + '%')
      })
      .skip(salto).take(tomar)
      .getMany();
  }


  async llenar(): Promise<PacienteEntity[]> {
    return await this.photoRepository.find();
  }k87u

  async prueba(parametro, saltar, tomar): Promise<PacienteEntity[]> {
    return await this.photoRepository.find(
      {
        relations: ["medicamentoId"] ,
        where:{
          nombre: Like('%' + parametro + '%')
        },
        skip: saltar, take:tomar
      }
    );
  }


  async  join(): Promise<PacienteEntity[]>{
    return await this.photoRepository.find(
      {
        join: {
          alias: "paciente",
          leftJoinAndSelect: {
            medicamentoId: "paciente.medicamentoId",
            pacienteId: "paciente.pacienteId",
          }
        }
      }
    );
  }

}

export class Paciente {


  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public edad: number,
    public fecha: string,
    public hijos: number,
    public tieneSeguro: any,
    public urlPaciente: string,
    public pacienteId: number,
  ) {


  }
}