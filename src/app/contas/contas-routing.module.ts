import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasFormComponent } from './contas-form/contas-form.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';
import { ContasListComponent } from './contas-list/contas-list.component';

const routes: Routes = [
  {path: 'contas', component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      {path: 'form', component: ContasFormComponent},
      {path: 'lista', component: ContasListComponent},
      {path: '', redirectTo: '/contas/form', pathMatch: 'full' }

  ]}, 

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
