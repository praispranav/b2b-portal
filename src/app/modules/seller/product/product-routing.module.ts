import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageProductAddComponent } from "./page-product-add/page-product-add.component";
import { PageProductEditComponent } from "./page-product-edit/page-product-edit.component";
import { PageProductListComponent } from "./page-product-list/page-product-list.component";
import { PageProductViewComponent } from "./page-product-view/page-product-view.component";

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
    path: "product-edit",
    component: PageProductEditComponent
  },
  {
    path: "product-list",
    component: PageProductListComponent
  },
  {
    path: "product-view",
    component: PageProductViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
