import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
   {path: 'clientes', component: LayoutComponent, children: [

  //   {path: 'form', component: ClientesFormComponent},
     {path: '', redirectTo: '/home', pathMatch: 'full' }

   ]}, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
