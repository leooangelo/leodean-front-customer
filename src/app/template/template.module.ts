import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent,SidebarComponent,FooterComponent],
  
  exports:[NavbarComponent, SidebarComponent,FooterComponent]
})
export class TemplateModule { }
