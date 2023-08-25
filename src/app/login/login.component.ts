import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nome: string = '';
  telefone: string = '';
  cpf: string = '';
  email: string = '';
  password: string = '';
  cadastrando: boolean = false;
  mensagem: string ='';
  sucess : boolean = false;
  errors: any = [];
  isLogin: boolean = true;
  constructor(
    private router: Router,
    private authService: AuthService  ) {

  }

  onSubmit(){
    debugger
    this.authService.AutenticarUsuario(this.buildBodyAuthUsuario()).subscribe(response =>{
      debugger
      this.sucess = true;
      this.errors = [];
      console.log(response);
      //const access_token = JSON.stringify(response);
      console.log(response);
      localStorage.setItem('access_token',response);
      this.router.navigate(['/home'])
    }, errorResponse =>{
        console.log(errorResponse)
        this.sucess = false;
        this.errors = errorResponse.error.erros;
    });
  }

  buildBodyAuthUsuario(): Usuario{
    const usuario = new Usuario();
    usuario.email = this.email;
    usuario.password = this.password;
    return usuario;
  }

  preparaCadastrar(event: any){
    event.preventDefault();
    this.cadastrando = true;
    this.isLogin = false;
  }

  cancelarCadastro(){
    this.cadastrando = false;
    this.isLogin = true;
  }
}
