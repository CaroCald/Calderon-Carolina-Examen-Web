import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PacienteEntity } from '../paciente/paciente.entity';
import { UsuarioEntity } from '../Usuario/usuario.entity';
import { PeticionesEntity } from '../Peticiones/peticiones.entity';

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

  @OneToMany(type => PeticionesEntity, userPaciente=>userPaciente.peticion)
  medicamentoPeticion:PeticionesEntity[];

}