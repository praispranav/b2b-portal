import { PageAddTradeShowComponent } from './page-add-trade-show/page-add-trade-show.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"add-trade-show"
  },
  {
    path:"add-trade-show",
    component:PageAddTradeShowComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTradeshowRoutingModule { }
