import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { MedicamentoEntity } from './medicamento.entity';

@Injectable()
export class MedicamentoService {
  arregloMedicamento: Medicamento[] = [];

  crearMedicamento(medicamento: Medicamento): Medicamento[] {
    this.arregloMedicamento.push(medicamento);
    return this.arregloMedicamento;
  }

  async listartodo(response) {
    let conex2= await getConnection().getRepository(MedicamentoEntity).find( { relations: ["paciente"] });
    let idTomado;
    conex2.map(dato=>{
      idTomado=dato.paciente
    });
    let conex = await getConnection().getRepository(MedicamentoEntity).find();
    conex.map(data => {
        this.crearMedicamento(new Medicamento(data.id, data.gramos, data.nombre,
          Number(data.composicion), data.usadoPara, data.fechaCaducidad, data.numeroPastillas,
          data.urlMedicamento, idTomado));
      },
    );
    return response.send(this.arregloMedicamento);
  }

  obtenerUno(id) {

    return this.arregloMedicamento[id];
  }


  editarUno(id, gramosAingerir, nombre, composicion, usadoPara, fechaCaducidad, numeroPastillas, pacienteID) {
    let arregloU = this.obtenerUno(id);
    arregloU.gramos = gramosAingerir;
    arregloU.nombre = nombre;
    arregloU.composicion = composicion;
    arregloU.usadoPara = usadoPara;
    arregloU.fechaCaducidad = fechaCaducidad;
    arregloU.numeroPastillas = numeroPastillas;
    arregloU.paciente = pacienteID;
    return arregloU;
  };


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