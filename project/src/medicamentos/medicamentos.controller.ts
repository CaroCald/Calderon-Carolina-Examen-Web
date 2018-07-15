import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {Medicamento, MedicamentoService} from "./medicamento.service";
import {PipesUsuarios} from "../pipes/pipes.usuarios";
import {PACIENTE_SCHEMA} from "../paciente/paciente.schema";
import { getConnection } from 'typeorm';
import { MedicamentoEntity } from './medicamento.entity';

@Controller()
export class MedicamentosController {

    constructor(private medicamentoService: MedicamentoService){

    }

  @Get('cincoMedicamentos')
  cinco(): Promise<MedicamentoEntity[]> {
    return this.medicamentoService.cargarCinco();
  }

  @Get('siguieneMedicamentos')
  cincoMas(): Promise<MedicamentoEntity[]> {
    return this.medicamentoService.cargarSiguiente();
  }

    @Get('Medicamento')
    findAll(): Promise<MedicamentoEntity[]> {
      return this.medicamentoService.cargarMedicamentos();
    }

    @Post('Medicamento')
    crearMedicamentos(
      @Body('id') id,
      @Body('gramos') gramos,
      @Body('nombre') nombre,
      @Body('composicion') composicion,
      @Body('usadoPara') usadoPara,
      @Body('fechaCaducidad')fechaCaducidad,
      @Body('numeroPastillas') numeroPastillas,
      @Body('estado') estado,
      @Body('urlMedicamento') urlMedicamento,
      @Body('pacienteId') pacienteId,
      @Res() res, @Req() req){
        this.medicamentoService.crearMedicamento(new Medicamento(id, gramos, composicion, usadoPara, fechaCaducidad, numeroPastillas, estado, urlMedicamento, pacienteId));
      const userRepository = getConnection().getRepository(MedicamentoEntity);
      const paciente = userRepository.create(req.body);
      return userRepository.save(paciente);

    }


    @Get('Medicamento/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const validarId= (parametros.id);
        if(validarId!=null){
            const medicamento=this.medicamentoService.obtenerUno(parametros.id);
            return res.send(medicamento);
        }
        else
        {
            return res.send({mensaje: 'ID no encontrado'})
        }

    }

    @Put('Medicamento/:id')
    editarUno(@Body(new PipesUsuarios(PACIENTE_SCHEMA)) bodyParams, @Res() res, @Param () parametro){
        const respuesta=this.medicamentoService.editarUno(parametro.id, bodyParams.gramos,  bodyParams.nombre,
            bodyParams.composicion, bodyParams.usadoPara, bodyParams.fechaCaducidad, bodyParams.numeroPastillas, bodyParams.pacienteId);
        return res.send(respuesta);
    }

}