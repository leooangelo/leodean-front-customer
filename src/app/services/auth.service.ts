import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../login/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }


  AutenticarUsuario(usuario: Usuario){
    return this.http.post(`${this.apiURL}/api/login`, usuario,{
      responseType: 'text'
    });
  }

}
