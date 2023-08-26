import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit{

  cliente: Cliente;
  sucess : boolean = false;
  errors: any = [];
  constructor(
    private router: Router,
    private clienteService: ClientesService){
    this.cliente = new Cliente();
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.clienteService.SalvarCadastro(this.cliente).subscribe(data =>{
      this.sucess = true;
      this.errors = [];
      this.cliente = data;
      this.router.navigate(['/login'])
    }, errorResponse =>{
      if(errorResponse.error.codigo != undefined ){
        this.sucess = false;
        const listError = [];
        listError.push(errorResponse.error)
        this.errors = listError;

      }
      else{
        this.sucess = false;
        this.errors = errorResponse.error.erros;
      }
    })
  }

}
