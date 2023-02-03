import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBeginAddingProductsComponent } from './components/form-begin-adding-products/form-begin-adding-products.component';
import { SearchSelectProductTypeComponent } from './components/search-select-product-type/search-select-product-type.component';
import { PageProductAddComponent } from "./page-product-add/page-product-add.component";
import { PageProductListComponent } from "./page-product-list/page-product-list.component";
import { ReceivedRfqComponent } from './received-rfq/received-rfq.component';
import { RequestedRfqComponent } from './requested-rfq/requested-rfq.component';

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
    path:'form-beign-adding',
    component:FormBeginAddingProductsComponent
  },
  {
    path: "product-list",
    component: PageProductListComponent
  },
  {
    path: "product-map",
    component: SearchSelectProductTypeComponent
  },
  {
    path: "requested-rfq",
    component: RequestedRfqComponent
  },
  {
    path: "received-rfq",
    component: ReceivedRfqComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
