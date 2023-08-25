import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.css']
})
export class AgendamentoListComponent implements OnInit{

  agendamentosLista: any;
  sucess : boolean = false;
  errors: any = [];

  constructor(private agendamentoService: AgendamentoService,
    private router: Router){}

    ngOnInit(): void {
      this.getAgendamentos();
    }
  
    getAgendamentos() {
    this.agendamentoService.BuscarAgendamentos().subscribe(res =>{
       this.sucess = true;
       this.errors = [];
       this.buildBodyResponse(res.data.content);
       this.agendamentosLista = res.data.content

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

    buildBodyResponse(agendamentosLista: any){
        for(let agendamento of agendamentosLista ){
          agendamento.data_agendamento = agendamento.data_agendamento
        }
    }

  novoCadastroAgendamento(){
    this.router.navigate(['agendamento/form']);
  }

}
