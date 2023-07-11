import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientesComponent],
  exports:[
    ClientesComponent
  ]
})
export class ClientesModule { }
