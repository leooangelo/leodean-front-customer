import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';
import { AgendamentoListComponent } from './agendamento-list/agendamento-list.component';

const routes: Routes = [
  {path: 'agendamento', component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      {path: 'form', component: AgendamentoFormComponent},
      {path: 'lista', component: AgendamentoListComponent},
      {path: '', redirectTo: '/agendamento/form', pathMatch: 'full' }

  ]}, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoRoutingModule { }
