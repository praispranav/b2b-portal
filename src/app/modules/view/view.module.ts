import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlertModule } from "ngx-bootstrap";
import { SwiperModule } from 'ngx-swiper-wrapper';
import { TextMaskModule } from "angular2-text-mask";
import { SharedModule } from "./../../@pages/components/shared.module";
import { pgCardModule } from "../../@pages/components/card/card.module";
import { pgSelectfx } from "./../../@pages/components/cs-select/select.module";
import { pgSelectModule } from "../../@pages/components/select/select.module";
import { pgUploadModule } from "../../@pages/components/upload/upload.module";
import { pgSliderModule } from "../../@pages/components/slider/slider.module";
import { pgCollapseModule } from "../../@pages/components/collapse";
import { BannerImgWidgetComponent } from './components/banner-img-widget/banner-img-widget.component';
import { ButtonFiveWidgetComponent } from './components/button-five-widget/button-five-widget.component';
import { ButtonFourWidgetComponent } from './components/button-four-widget/button-four-widget.component';
import { ButtonThreeWidgetComponent } from './components/button-three-widget/button-three-widget.component';
import { ButtonTileWidgetComponent } from './components/button-tile-widget/button-tile-widget.component';
import { ButtonTwoWidgetComponent } from './components/button-two-widget/button-two-widget.component';
import { CompFooter1Component } from './components/comp-footer1/comp-footer1.component';
import { CompFooter2Component } from './components/comp-footer2/comp-footer2.component';
import { CompFooter3Component } from './components/comp-footer3/comp-footer3.component';
import { CompHeader1Component } from './components/comp-header1/comp-header1.component';
import { CompHeader2Component } from './components/comp-header2/comp-header2.component';
import { CompHeader3Component } from './components/comp-header3/comp-header3.component';
import { CompHeader4Component } from './components/comp-header4/comp-header4.component';
import { CompSellerCatalogueHeaderComponent } from './components/comp-seller-catalogue-header/comp-seller-catalogue-header.component';
import { PageHomeAvailableProductCustomizationComponent } from './components/page-home-available-product-customization/page-home-available-product-customization.component';
import { PageHomeCategoriesComponent } from './components/page-home-categories/page-home-categories.component';
import { PageHomeFlashDealsComponent } from './components/page-home-flash-deals/page-home-flash-deals.component';
import { PageHomeTopSellingCategoriesComponent } from './components/page-home-top-selling-categories/page-home-top-selling-categories.component';
import { PageHomeTradeFairComponent } from './components/page-home-trade-fair/page-home-trade-fair.component';
import { PageProductSearchProductsComponent } from './components/page-product-search-products/page-product-search-products.component';
import { PageProductSearchSupplierComponent } from './components/page-product-search-supplier/page-product-search-supplier.component';
import { PageProductSearchSupplierCategoriesComponent } from './components/page-product-search-supplier-categories/page-product-search-supplier-categories.component';
import { PageProductSearchSupplierListComponent } from './components/page-product-search-supplier-list/page-product-search-supplier-list.component';
import { PageProductViewDetailsComponent } from './components/page-product-view-details/page-product-view-details.component';
import { PageProductViewMessageSupplierComponent } from './components/page-product-view-message-supplier/page-product-view-message-supplier.component';
import { PageSellerCatalogueProfileMenuComponent } from './components/page-seller-catalogue-profile-menu/page-seller-catalogue-profile-menu.component';
import { ProductSearchCardComponent } from './components/product-search-card/product-search-card.component';
import { ProductSearchCardListComponent } from './components/product-search-card-list/product-search-card-list.component';
import { ProductSearchCategoriesComponent } from './components/product-search-categories/product-search-categories.component';
import { ProductSearchFilterComponent } from './components/product-search-filter/product-search-filter.component';
import { ViewRoutingModule } from "./view-routing.module";

@NgModule({
  declarations: [
    BannerImgWidgetComponent,
    ButtonFiveWidgetComponent,
    ButtonFourWidgetComponent,
    ButtonThreeWidgetComponent,
    ButtonTileWidgetComponent,
    ButtonTwoWidgetComponent,
    CompFooter1Component,
    CompFooter2Component,
    CompFooter3Component,
    CompHeader1Component,
    CompHeader2Component,
    CompHeader3Component,
    CompHeader4Component,
    CompSellerCatalogueHeaderComponent,
    PageHomeAvailableProductCustomizationComponent,
    PageHomeCategoriesComponent,
    PageHomeFlashDealsComponent,
    PageHomeTopSellingCategoriesComponent,
    PageHomeTradeFairComponent,
    PageProductSearchProductsComponent,
    PageProductSearchSupplierComponent,
    PageProductSearchSupplierCategoriesComponent,
    PageProductSearchSupplierListComponent,
    PageProductViewDetailsComponent,
    PageProductViewMessageSupplierComponent,
    PageSellerCatalogueProfileMenuComponent,
    ProductSearchCardComponent,
    ProductSearchCardListComponent,
    ProductSearchCategoriesComponent,
    ProductSearchFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    SwiperModule,
    TextMaskModule,
    SharedModule,
    pgCardModule,
    pgSelectfx,
    pgSelectModule,
    pgUploadModule,
    pgSliderModule,
    pgCollapseModule.forRoot(),
    ViewRoutingModule
  ],
})
export class ViewModule { }
