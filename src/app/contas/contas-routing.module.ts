import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasFormComponent } from './contas-form/contas-form.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: 'contas', component: LayoutComponent, children: [
    {path: 'form', component: ContasFormComponent},
    {path: '', redirectTo: '/contas/form', pathMatch: 'full' }

  ]}, 

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
