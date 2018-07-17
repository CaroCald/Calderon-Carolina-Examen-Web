import { Injectable } from '@nestjs/common';
import { getConnection, Like, Repository } from 'typeorm';
import { MedicamentoEntity } from './medicamento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PacienteEntity } from '../paciente/paciente.entity';

@Injectable()
export class MedicamentoService {
  arregloMedicamento: Medicamento[] = [];

  constructor(@InjectRepository(MedicamentoEntity)
              private readonly photoRepository: Repository<MedicamentoEntity>){

  }
  async cargarMedicamentos(): Promise<MedicamentoEntity[]> {
    return await this.photoRepository.find();
  }

  async busquedaMedicamento(parametro, salto, tomar): Promise<MedicamentoEntity[]> {
    return await getConnection().getRepository(MedicamentoEntity)
      .createQueryBuilder("medicamento").where({
        nombre: Like('%' + parametro + '%')
      })
      .skip(salto).take(tomar)
      .getMany();
  }


  crearMedicamento(medicamento: Medicamento): Medicamento[] {
    this.arregloMedicamento.push(medicamento);
    return this.arregloMedicamento;
  }


}


export class Medicamento {
  constructor(
    public id: number,
    public gramos: number,
    public nombre: string,
    public composicion: number,
    public usadoPara: string,
    public fechaCaducidad: string,
    public numeroPastillas: number,
    public urlMedicamento: any,
    public paciente: number,
  ) {
  };
}