import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestForVerificationComponent } from './request-for-verification/request-for-verification.component';
import { RequestedSupplierComponent } from './requested-supplier/requested-supplier.component';


const routes: Routes = [
  {
      path: "",
      pathMatch: "full",
      redirectTo: "request"
  },
  {
    path: "request",
    component:RequestedSupplierComponent 
},
  {
      path: "send-request",
      component:RequestForVerificationComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierCatalogueRequestRoutingModule { }
