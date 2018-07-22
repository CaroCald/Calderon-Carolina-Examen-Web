import {EventEmitter, Injectable} from "@angular/core";
import {Paciente} from "../paciente/paciente.service";
import {medicamentos} from "../medicamento/medicamento.servicio";
import {User} from "../usuario/usuario.service";

@Injectable()
export class ServicioApp {
  mostrar;
  idUsuario;
  usuario: User;
  idMedicamentos;
  estadoMedicamento: boolean;
  mostrarPaciente: Paciente[];
  mostrarMedicamento;
  emitircambioAuto: EventEmitter<User> = new EventEmitter();
  emitirPaciente: EventEmitter<Paciente[]> = new EventEmitter();
  emitirMedicamento: EventEmitter<medicamentos[]> = new EventEmitter();
  paciente:Paciente[];
  estadoPeticion:boolean;

  setIdUsuario(id) {
    this.idUsuario = id;
  }

  agregarPacientes(paciente){
   this.paciente=paciente;
  }


  setUsuario(user: User) {
    this.usuario = user;
  }

  setEstado(estado){
    this.estadoMedicamento=estado
  }
  setEstadoPeticion(estado){
    this.estadoPeticion=estado
  }
  setIdMedicamento(id){
    this.idMedicamentos=id;
  }


  emitirCambio(cambioAuto:User){
    this.mostrar=cambioAuto;
    this.emitircambioAuto.emit(cambioAuto);
  }
  cambiarBusqueda(busqueda:Paciente[]){
    this.mostrarPaciente=busqueda;
    this.emitirPaciente.emit(busqueda);
  }
  cambiarMedicamento(buscar: medicamentos[]){
    this.mostrarMedicamento=buscar;
    this.emitirMedicamento.emit(buscar);
  }
}
