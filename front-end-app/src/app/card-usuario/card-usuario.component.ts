import { Component, OnInit } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { User } from '../usuario/usuario.service';
import { Usuario } from '../../../../project/src/Usuario/usuario.service';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {


  usuario:User[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3000/usuario').subscribe((data: User[]) => {
      this.usuario = data;
    });
    }


  seleccionar(){

  }

}
