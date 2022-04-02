import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PageProductAddComponent } from './page-product-add/page-product-add.component';
import { PageProductEditComponent } from './page-product-edit/page-product-edit.component';
import { PageProductListComponent } from './page-product-list/page-product-list.component';
import { PageProductViewComponent } from './page-product-view/page-product-view.component';


@NgModule({
  declarations: [
    PageProductAddComponent,
    PageProductEditComponent,
    PageProductListComponent,
    PageProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
