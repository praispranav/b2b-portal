import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestedSellerComponent } from './requested-seller/requested-seller.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: "list",
    component: RequestedSellerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerAgentRequestRoutingModule { }
