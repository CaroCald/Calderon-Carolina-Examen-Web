import {Component, Input, OnInit} from '@angular/core';
import {medicamentos} from "../medicamento/medicamento.servicio";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-card-medicamento',
  templateUrl: './card-medicamento.component.html',
  styleUrls: ['./card-medicamento.component.css']
})
export class CardMedicamentoComponent implements OnInit {

  @Input()nombre;
  @Input()urlImagen;
  @Input()usadoPara;
  medicamento:medicamentos[];

  constructor(private http: HttpClient) { }

  ngOnInit() {


  }


}
