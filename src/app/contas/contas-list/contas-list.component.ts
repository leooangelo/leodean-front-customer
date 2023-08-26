import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ContaRequest } from '../conta';
import { ContaResponse } from '../conta-response';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.css']
})

export class ContasListComponent implements  OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = [
    'id', 'agencia', 'numero_conta'];
  dataSource: MatTableDataSource<any>;
  contasLista: any;
  sucess : boolean = false;
  errors: any = [];
  size: number = 10;
  page: number = 0;
  totalSize: number = 0;
  constructor(private clienteService: ClientesService,
    private router: Router){}
 
  ngOnInit(): void {
    this.getContas();
  }


  getContas(){
    this.clienteService.BuscarContas().subscribe(res =>{
      this.sucess = true;
      this.errors = [];
      this.contasLista = res.data
      this.totalSize = res.data.length;
      this.dataSource = new MatTableDataSource(res.data);
    }, errorResponse =>{
      this.sucess = false;
      this.errors = errorResponse.error.erros;
    })
  }
  
  novoCadastroConta(){
    this.router.navigate(['contas/form']);
  }

  public handlePage(e: any) {
    this.size=e.pageSize;
    this.page =e.pageIndex;
  }

}
