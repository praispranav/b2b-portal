import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchSelectProductTypeComponent } from './components/search-select-product-type/search-select-product-type.component';
import { PageProductAddComponent } from "./page-product-add/page-product-add.component";
import { PageProductListComponent } from "./page-product-list/page-product-list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "product-add",
  },
  {
    path: "product-add",
    component: PageProductAddComponent
  },
  {
    path: "product-list",
    component: PageProductListComponent
  },
  {
    path: "product-map",
    component: SearchSelectProductTypeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
