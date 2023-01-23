import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MqrListComponent } from './mqr-list/mqr-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'mqr-list',
    pathMatch: 'full',
  },
  {
    path: 'mqr-list',
    component: MqrListComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerMqrRoutingModule { }
