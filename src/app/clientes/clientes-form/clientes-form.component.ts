import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit{

  cliente: Cliente;

  constructor(private clienteService: ClientesService){
    this.cliente = new Cliente();
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.clienteService.Salvar(this.cliente).subscribe(data =>{
      console.log(data);
    })
  }

}
