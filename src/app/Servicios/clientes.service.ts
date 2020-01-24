import { Injectable } from '@angular/core';
import { Cliente } from '../../app/components/clientes/Cliente';
import { Observable, of } from 'rxjs';


@Injectable()
export class ClienteService {

  clientes: Cliente[] = [

    // objetos en formato json
    { id: 1, nombre: 'Sebastian', apellido: 'Martinez', email: 'sebastian@gmail.com', fecha: '2017-1-3'},
    { id: 2, nombre: 'Juan pablo', apellido: 'Mariaca', email: 'mariaca@hotmail.com', fecha: '2019-10-23'},
    { id: 3, nombre: 'David', apellido: 'Zabaleta', email: 'zaba.david@sofka.com', fecha: '2020-8-8'},

  ];

  getClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }
  constructor() {}
}
