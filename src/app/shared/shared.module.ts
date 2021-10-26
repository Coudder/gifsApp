import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent //exportamos el componente que usaremos en el appcompment y poderlo usar fuera de este modulo
  ]
})
export class SharedModule { }
