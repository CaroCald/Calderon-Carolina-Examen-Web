import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { UsuarioEntity } from '../Usuario/usuario.entity';
import { MedicamentoEntity } from '../medicamentos/medicamento.entity';
@Entity('peticion')
export class PeticionesEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column()
  estado: boolean;

  @OneToMany(type => UsuarioEntity, userPaciente=>userPaciente.peticion)
  userPeticion:UsuarioEntity[];

  @OneToMany(type => MedicamentoEntity, medPeticion=>medPeticion.medicamentoPeticion)
  medPeticion:MedicamentoEntity[];

  @ManyToOne(type => MedicamentoEntity, medicamentoP=>medicamentoP.medicamentoPeticion)
  peticion:MedicamentoEntity;

}