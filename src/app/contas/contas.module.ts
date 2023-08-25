import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasRoutingModule } from './contas-routing.module';
import { ContasFormComponent } from './contas-form/contas-form.component';
import { ContasListComponent } from './contas-list/contas-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ContasFormComponent,
    ContasListComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ContasFormComponent,
    ContasListComponent
  ]
})
export class ContasModule { }
