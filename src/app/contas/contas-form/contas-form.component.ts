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
    this.getContas();
  }

  getContas(){
    this.clienteService.BuscarContas().subscribe(data =>{
      this.sucess = true;
      this.errors = [];
      this.contasLista = data;
    }, errorResponse =>{
      this.sucess = false;
      this.errors = errorResponse.error.erros;
    })
  }

  onSubmit(){
    this.clienteService.SalvarConta(this.conta).subscribe(data =>{
      this.sucess = true;
      this.errors = [];
      this.contaResponse = data;
    }, errorResponse =>{
      this.sucess = false;
      this.errors = errorResponse.error.erros;
    })
  }


}
