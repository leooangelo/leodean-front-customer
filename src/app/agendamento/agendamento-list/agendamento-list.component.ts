import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.css']
})
export class AgendamentoListComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = [
    'id', 'conta_origem.agencia', 'conta_origem.numero_conta', 'conta_destino.agencia' , 'conta_destino.numero_conta', 'tipo_transacao',
  'valor', 'valor_taxa','valor_total', 'data_agendamento','data_tansacao'];
  dataSource: MatTableDataSource<any>;
  agendamentosLista: any;
  sucess : boolean = false;
  errors: any = [];
  size: number = 10;
  page: number = 0;
  totalSize: number = 0;
  constructor(private agendamentoService: AgendamentoService,
    private router: Router){
    }

    ngOnInit(): void {
      this.getAgendamentos();
    }
  
    getAgendamentos() {
    this.agendamentoService.BuscarAgendamentos().subscribe(res =>{
       this.sucess = true;
       this.errors = [];
       this.buildBodyResponse(res.data.content);
       this.agendamentosLista = res.data.content
       this.totalSize = res.data.content.length;
       this.dataSource = new MatTableDataSource(this.agendamentosLista);
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

    public handlePage(e: any) {
      this.size=e.pageSize;
      this.page =e.pageIndex;
      //this.iterator();
    }

    buildBodyResponse(agendamentosLista: any){
        for(let agendamento of agendamentosLista ){
          agendamento.data_agendamento = moment(agendamento.data_agendamento).format("DD/MM/YYYY");
          agendamento.data_transacao = moment(agendamento.data_transacao).format("DD/MM/YYYY");
          agendamento.valor_total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          agendamento.valor_taxa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          agendamento.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }
    }

  novoCadastroAgendamento(){
    this.router.navigate(['agendamento/form']);
  }

}
