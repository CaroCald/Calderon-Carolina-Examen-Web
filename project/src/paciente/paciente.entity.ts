import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { MedicamentoEntity } from '../medicamentos/medicamento.entity';
import { UsuarioEntity } from '../Usuario/usuario.entity';
@Entity('paciente')
export class PacienteEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column({length: 500})
  nombre: string;

  @Column({length: 500})
  apellido: string;

  @Column()
  edad: number;

  @Column({length: 500})
  fecha: string;

  @Column()
  hijos: number;

  @Column({length: 10})
  tieneSeguro: string;

  @Column({length: 500})
  urlPaciente: string;

  @OneToMany(type => MedicamentoEntity, med=>med.paciente)

  medicamentoId:MedicamentoEntity[];

  @ManyToOne(type => UsuarioEntity, pacienteId=>pacienteId.userPaciente)
  pacienteId:PacienteEntity;

}