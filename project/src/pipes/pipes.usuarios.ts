import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
@Injectable()
export class PipesUsuarios implements PipeTransform{
    constructor(private readonly schema) {}
    transform(valorPaciente: any, metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata) {
        const {error} = Joi.validate(
            valorPaciente,
            this.schema
        );
        if (error) {
            throw new PeticionInvalidaException(
                {
                        erorr: error,
                        mensaje: 'Error en paciente ',
                },
                5
            );
        }else{
            return valorPaciente;

        }


    }
}