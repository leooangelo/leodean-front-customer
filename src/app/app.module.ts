import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './services/clientes.service';
import { ContasModule } from './contas/contas.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './token.interceptor';
import { AgendamentoService } from './services/agendamento.service';
import { AgendamentoModule } from './agendamento/agendamento.module';
@NgModule({
  declarations: [		
    AppComponent,
      HomeComponent,
      LoginComponent,
      LayoutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TemplateModule,
    HttpClientModule,
    ClientesModule,
    ContasModule,
    AgendamentoModule

  ],
  providers: [ClientesService,
  AuthService,
  AgendamentoService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
