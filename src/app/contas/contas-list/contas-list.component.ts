import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ContaRequest } from '../conta';
import { ContaResponse } from '../conta-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.css']
})
export class ContasListComponent implements  OnInit {

  contasLista: any;
  sucess : boolean = false;
  errors: any = [];
  
  constructor(private clienteService: ClientesService,
    private router: Router){}
 
  ngOnInit(): void {
    this.getContas();
  }


  getContas(){
    this.clienteService.BuscarContas().subscribe(res =>{
     debugger;
     console.log(res.data)
      this.sucess = true;
      this.errors = [];
      this.contasLista = res.data
      console.log( this.contasLista )
    }, errorResponse =>{
      this.sucess = false;
      this.errors = errorResponse.error.erros;
    })
  }
  
  novoCadastroConta(){
    this.router.navigate(['contas/form']);
  }
}
