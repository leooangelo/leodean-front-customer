import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from './login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  nome: string = '';
  telefone: string = '';
  cpf: string = '';
  cadastrando: boolean = false;
  mensagem: string ='';
  sucess : boolean = false;
  errors: any = [];
  isLogin: boolean = true;
  formLogin: FormGroup
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder  ) {

  }
  ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  onSubmit(){
    this.authService.AutenticarUsuario(this.buildBodyAuthUsuario(this.formLogin.value)).subscribe(response =>{
      this.sucess = true;
      this.errors = [];
      localStorage.setItem('access_token',response);
      this.router.navigate(['/home'])
    }, errorResponse =>{
        this.sucess = false;
        this.errors = errorResponse.error.erros;
    });
  }

  buildBodyAuthUsuario(form: any): Usuario{
    const usuario = new Usuario();
    usuario.email = form.email;
    usuario.password = form.password;
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
