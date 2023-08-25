import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';
import { AgendamentoListComponent } from './agendamento-list/agendamento-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AgendamentoFormComponent,
    AgendamentoListComponent
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    AgendamentoFormComponent,
    AgendamentoListComponent
  ]
})
export class AgendamentoModule { }
