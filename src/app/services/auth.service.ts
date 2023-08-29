import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../login/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }


  AutenticarUsuario(usuario: Usuario){
    return this.http.post(`${this.apiURL}/api/login`, usuario,{
      responseType: 'text'
    });
  }

  Logout(){
    localStorage.removeItem('access_token');
  }

  getUsuarioAutenticado(){
    const token = localStorage.getItem('access_token');
    if(token){
      const email = this.jwtHelper.decodeToken(token).sub;
      return email;
    }else{
      return null;
    }
  }
  
  obterToken(){
    const token = localStorage.getItem('access_token');
    if(token){
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean{
    const token = localStorage.getItem('access_token');
    if(token){
       const expired  = this.jwtHelper.isTokenExpired(token);
       return !expired;
    }
    return false;
  }
}
