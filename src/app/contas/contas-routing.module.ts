import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasFormComponent } from './contas-form/contas-form.component';

const routes: Routes = [
  {path: 'conta-form', component: ContasFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
