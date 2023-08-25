import { ContaResponse } from './../conta-response';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ContaRequest } from '../conta';

@Component({
  selector: 'app-contas-form',
  templateUrl: './contas-form.component.html',
  styleUrls: ['./contas-form.component.css']
})
export class ContasFormComponent implements OnInit {

  conta: ContaRequest;
  contaResponse: ContaResponse;
  contasLista: ContaResponse[] = [];
  sucess : boolean = false;
  errors: any = [];
  constructor( private clienteService: ClientesService) {
    this.conta = new ContaRequest();
    this.contaResponse = new ContaResponse();
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.clienteService.SalvarConta(this.conta).subscribe(data =>{
      this.sucess = true;
      this.errors = [];
      this.contaResponse = data;
    }, errorResponse =>{
      if(errorResponse.error.codigo != undefined ){
        this.sucess = false;
        const listError = [];
        listError.push(errorResponse.error)
        this.errors = listError;

      }
      else{
        console.log(errorResponse)
        this.sucess = false;
        this.errors = errorResponse.error.erros;
      }
    })
  }


}
