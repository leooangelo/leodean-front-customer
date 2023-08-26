import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Agendamento } from '../agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { AgendamentoResponse } from '../agendamento-response';
import { Taxa, taxas } from '../taxas';
import * as moment from 'moment';
import { ClientesService } from 'src/app/services/clientes.service';
import { ContaResponse } from 'src/app/contas/conta-response';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})

export class AgendamentoFormComponent implements OnInit {

  agendamentoRequest: Agendamento;
  agendamentoResponse: AgendamentoResponse;
  sucess : boolean = false;
  errors: any = [];
  taxas: Taxa[] = taxas;
  contasLista: any;
  agencia_destino: any;
  conta_destino: any;
  constructor(private clienteService: ClientesService,
     private agendamentoService: AgendamentoService) {
    this.agendamentoRequest = new Agendamento();
    this.agendamentoResponse = new AgendamentoResponse();
  }

  ngOnInit(): void {
    this.getContas();
  }


  onSubmit(){
    const bodyRequest = this.buildBodyAgendamento(this.agendamentoRequest, this.agencia_destino, this.conta_destino);
    this.agendamentoService.SalvarAgendamento(bodyRequest).subscribe(data =>{
      this.sucess = true;
      this.errors = [];
      this.agendamentoResponse = data;
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

  getContas(){
    this.clienteService.BuscarContas().subscribe(res =>{
      this.errors = [];
      this.contasLista = res.data;
    }, errorResponse =>{
      this.sucess = false;
      this.errors = errorResponse.error.erros;
    })
  }
  

  buildBodyAgendamento(agendamento : Agendamento, agenciaDestino : any, contaDestino: any){
    const age = new Agendamento();

    age.data_agendamento = agendamento.data_agendamento;
    age.data_transacao = agendamento.data_transacao;
    age.tipo_transacao = agendamento.tipo_transacao;
    const valortratado = agendamento.valor.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace(',', '.');
    age.valor = parseFloat(valortratado);

    const contaDestinoObj = new ContaResponse();
    contaDestinoObj.agencia = agenciaDestino;
    contaDestinoObj.numero_conta = contaDestino;

    age.conta_destino = contaDestinoObj;
    const contaOrigem = new ContaResponse();
    contaOrigem.agencia= agendamento.conta_origem?.agencia?.toString();
    contaOrigem.numero_conta= agendamento.conta_origem?.numero_conta;

    age.conta_origem= contaOrigem;

    return age;
  }

  TipoTransferenciaSelecionada(event: any){
    this.agendamentoRequest.tipo_transacao = event.target.value;
  }

  contaSelecionada(event: any){
    const contas = this.contasLista;
    const idContaSelecionada = parseInt(event.target.value);

    for(const conta of contas){
      if(idContaSelecionada === conta.id){
        this.agendamentoRequest.conta_origem = conta;
      }
    }
  }
}
