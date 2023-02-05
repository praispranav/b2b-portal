import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyAcoountListComponent } from './verify-acoount-list/verify-acoount-list.component';



const routes: Routes = [
  {
      path: "",
      pathMatch: "full",
      redirectTo: "list"
  },
  {
      path: "list",
      component: VerifyAcoountListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyAccountRoutingModule { }
