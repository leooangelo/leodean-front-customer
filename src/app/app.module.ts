import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './services/clientes.service';
@NgModule({
  declarations: [		
    AppComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    HttpClientModule,
    ClientesModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
