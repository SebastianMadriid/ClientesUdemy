import { Component, OnInit } from '@angular/core';
import { Cliente } from './Cliente';
import { ClienteService } from '../../Servicios/clientes.service';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor( private clienteService: ClienteService ) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      data => this.clientes = data);
  }

}
