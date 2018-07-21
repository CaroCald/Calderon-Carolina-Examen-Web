import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { PacienteEntity } from '../paciente/paciente.entity';
import { PeticionesEntity } from '../Peticiones/peticiones.entity';
@Entity('usuario')
export class UsuarioEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 500 })
  nombreUsuario: string;

  @Column({ length: 500 })
  correo: string;

  @Column({ length: 500 })
  urlUsuario: string;

  @OneToMany(type => PacienteEntity, userPaciente=>userPaciente.pacienteId)
  userPaciente:PacienteEntity[];

  @ManyToOne(type => PeticionesEntity, peticionId=>peticionId.userPeticion)
  peticion:PeticionesEntity;

}