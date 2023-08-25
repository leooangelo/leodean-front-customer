import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContaRequest } from '../contas/conta';
import { ContaResponse } from '../contas/conta-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURL;
  constructor(private http: HttpClient) { }

  SalvarCadastro(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiURL}/api/customer`,cliente);
  }

  SalvarConta(conta: ContaRequest): Observable<ContaResponse>{
    return this.http.post<ContaRequest>(`${this.apiURL}/api/account`,conta);
  }

  BuscarContas(): Observable<any>{
    return this.http.get(`${this.apiURL}/api/account`).pipe();
  }

}
