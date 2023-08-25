import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Agendamento } from '../agendamento/agendamento';
import { AgendamentoResponse } from '../agendamento/agendamento-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  apiURL: string = environment.apiURL;
  constructor(private http: HttpClient) { }

  SalvarAgendamento(agendamento: Agendamento): Observable<AgendamentoResponse>{
    return this.http.post<Agendamento>(`${this.apiURL}/api/agendamento`,agendamento);
  }

  BuscarAgendamentos(): Observable<any>{
    return this.http.get(`${this.apiURL}/api/agendamento`).pipe();
  }
}
