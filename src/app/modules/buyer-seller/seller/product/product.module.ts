import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ProductRoutingModule } from "./product-routing.module";

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

import { FormBeginAddingProductsComponent } from './components/form-begin-adding-products/form-begin-adding-products.component';
import { FormProductDetailsComponent } from './components/form-product-details/form-product-details.component';
import { FormProductInformationComponent } from './components/form-product-information/form-product-information.component';
import { FormShippingDetailsComponent } from './components/form-shipping-details/form-shipping-details.component';
import { FormTradeInformationComponent } from './components/form-trade-information/form-trade-information.component';
import { PageProductAddComponent } from "./page-product-add/page-product-add.component";
import { PageProductListComponent } from "./page-product-list/page-product-list.component";
import { SearchSelectProductTypeComponent } from './components/search-select-product-type/search-select-product-type.component';
import { RequestedRfqComponent } from './requested-rfq/requested-rfq.component';
import { ReceivedRfqComponent } from './received-rfq/received-rfq.component';


@NgModule({
  declarations: [
    FormBeginAddingProductsComponent,
    FormProductDetailsComponent,
    FormProductInformationComponent,
    FormShippingDetailsComponent,
    FormTradeInformationComponent,
    PageProductAddComponent,
    PageProductListComponent,
    SearchSelectProductTypeComponent,
    RequestedRfqComponent,
    ReceivedRfqComponent,
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
export class ProductModule { }
