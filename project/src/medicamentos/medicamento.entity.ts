import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PacienteEntity } from '../paciente/paciente.entity';

@Entity('medicamento')
export class MedicamentoEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  gramos: number;

  @Column({length: 500})
  nombre: string;

  @Column()
  composicion: number;

  @Column({length: 500})
  usadoPara: string;

  @Column({length: 100})
  fechaCaducidad: string;

  @Column()
  numeroPastillas: number;

  @Column()
  estado: boolean;

  @Column({length: 500})
  urlMedicamento: string;

  @ManyToOne(type => PacienteEntity,
    paciente=>paciente.medicamentoId)

  paciente:PacienteEntity;

}