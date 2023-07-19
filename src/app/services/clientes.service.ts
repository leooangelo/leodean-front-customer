import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  Salvar(cliente: Cliente): Observable<Cliente>{
    const url = 'http://localhost:8080/api/customer';
    return this.http.post<Cliente>(url,cliente);
    
  }
  getCliente() : Cliente{
    let cliente: Cliente = new Cliente();
    cliente.nome = "Leo";
    cliente.email = "teste@gmail";
    cliente.telefone = "11916691211"
    return cliente;
  }
}
