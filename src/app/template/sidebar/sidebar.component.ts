import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string = '';
  constructor(
    private router: Router,
    private authSerivce: AuthService 
  ) { }

  ngOnInit() : void{
    this.usuarioLogado = this.authSerivce.getUsuarioAutenticado();
  }

  Logout(){
    this.authSerivce.Logout();
    this.router.navigate((['/login']));
  }
}
