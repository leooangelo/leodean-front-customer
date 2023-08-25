import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { AgendamentoResponse } from '../agendamento-response';

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
  constructor( private agendamentoService: AgendamentoService) {
    this.agendamentoRequest = new Agendamento();
    this.agendamentoResponse = new AgendamentoResponse();
  }

  ngOnInit(): void {
  }


  onSubmit(){
    debugger
    console.log(this.agendamentoRequest);
    this.agendamentoService.SalvarAgendamento(this.agendamentoRequest).subscribe(data =>{
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
        console.log(errorResponse)
        this.sucess = false;
        this.errors = errorResponse.error.erros;
      }
    })
  }

}
