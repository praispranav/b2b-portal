import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSupplierListComponent } from './page-supplier-list/page-supplier-list.component';


const routes: Routes = [ 
  {
    path:"",
    pathMatch:"full",
    redirectTo:"myList"
  },
  {
    path:"myList",
    component:PageSupplierListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierListRoutingModule { }
