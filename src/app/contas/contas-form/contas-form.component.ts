import { ContaResponse } from './../conta-response';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ContaRequest } from '../conta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  contaForm: FormGroup;
  constructor( private clienteService: ClientesService,
    private formBuilder: FormBuilder) {
    this.conta = new ContaRequest();
    this.contaResponse = new ContaResponse();
  }
  ngOnInit(): void {

    this.contaForm = this.formBuilder.group({
      agencia:['',[Validators.required, Validators.maxLength, Validators.minLength]],
      conta: ['',[Validators.required, Validators.maxLength, Validators.minLength]]
    })
  }

  onSubmit(){
    this.clienteService.SalvarConta(this.contaForm.value).subscribe(data =>{
      this.sucess = true;
      this.errors = [];
      this.contaResponse = data;
      setTimeout(() => {
        window.location.reload();
     }, 2000);
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
