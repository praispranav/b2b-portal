import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestedCatelogingComponent } from './requested-cateloging/requested-cateloging.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"requested-cateloging"
  },
  {
    path:"requested-cateloging",
    component:RequestedCatelogingComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatelogingRoutingModule { }
