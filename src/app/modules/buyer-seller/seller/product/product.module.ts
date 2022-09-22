import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ProductRoutingModule } from "./product-routing.module";

// Pages Components by ace
import { pgSelectModule } from '../../../../@pages/components/select/select.module';
import { pgTagModule } from '../../../../@pages/components/tag/tag.module';
import { pgTimePickerModule } from '../../../../@pages/components/time-picker/timepicker.module';
import { pgTabsModule } from '../../../../@pages/components/tabs/tabs.module';
import { pgSelectfx } from '../../../../@pages/components/cs-select/select.module';
import { pgDatePickerModule } from '../../../../@pages/components/datepicker/datepicker.module';
import { pgUploadModule } from '../../../../@pages/components/upload/upload.module'; 
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../@pages/components/shared.module';
import { QuillModule } from 'ngx-quill';

import { FormProductDetailsComponent } from './components/form-product-details/form-product-details.component';
import { FormProductInformationComponent } from './components/form-product-information/form-product-information.component';
import { FormTradeInformationComponent } from './components/form-trade-information/form-trade-information.component';
import { FormShippingDetailsComponent } from './components/form-shipping-details/form-shipping-details.component';
import { PageProductAddComponent } from "./page-product-add/page-product-add.component";
import { PageProductListComponent } from "./page-product-list/page-product-list.component";
import { PageProductViewComponent } from "./page-product-view/page-product-view.component";
import { FormBeginAddingProductsComponent } from './components/form-begin-adding-products/form-begin-adding-products.component';
import { FormFindYourProductComponent } from './components/form-find-your-product/form-find-your-product.component';


@NgModule({
  declarations: [
    FormProductDetailsComponent,
    FormProductInformationComponent,
    FormTradeInformationComponent,
    FormShippingDetailsComponent,
    PageProductAddComponent,
    PageProductListComponent,
    PageProductViewComponent,
    FormBeginAddingProductsComponent,
    FormFindYourProductComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    pgSelectModule,
    pgTagModule,
    pgTimePickerModule,
    pgTabsModule,
    pgSelectfx,
    pgDatePickerModule,
    pgUploadModule,
    NgxDatatableModule,
    SharedModule,
    QuillModule.forRoot()
  ],
})
export class ProductModule {}
