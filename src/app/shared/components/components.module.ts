import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const sharedComponentArr = [
  NavbarComponent,
  SidebarComponent
]

@NgModule({
  declarations: sharedComponentArr,
  imports: [
    CommonModule
  ],
  exports: sharedComponentArr
})
export class ComponentsModule { }
