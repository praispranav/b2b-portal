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
import { Footer1Component } from './components/footer1/footer1.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { Header1Component } from './components/header1/header1.component';
import { Header2Component } from './components/header2/header2.component';
import { Header3Component } from './components/header3/header3.component';
import { Header4Component } from './components/header4/header4.component';
import { HomeAvailableProductCustomizationComponent } from './components/home-available-product-customization/home-available-product-customization.component';
import { HomeCategoriesComponent } from './components/home-categories/home-categories.component';
import { HomeFlashDealsComponent } from './components/home-flash-deals/home-flash-deals.component';
import { HomeTopSellingCategoriesComponent } from './components/home-top-selling-categories/home-top-selling-categories.component';
import { HomeTradeFairComponent } from './components/home-trade-fair/home-trade-fair.component';
import { ProductSearchCardComponent } from './components/product-search-card/product-search-card.component';
import { ProductSearchCardListComponent } from './components/product-search-card-list/product-search-card-list.component';
import { ProductSearchCategoriesComponent } from './components/product-search-categories/product-search-categories.component';
import { ProductSearchFilterComponent } from './components/product-search-filter/product-search-filter.component';
import { ProductSearchProductsComponent } from './components/product-search-products/product-search-products.component';
import { ProductSearchSupplierComponent } from './components/product-search-supplier/product-search-supplier.component';
import { ProductSearchSupplierCategoriesComponent } from './components/product-search-supplier-categories/product-search-supplier-categories.component';
import { ProductSearchSupplierListComponent } from './components/product-search-supplier-list/product-search-supplier-list.component';
import { ProductViewDetailsComponent } from './components/product-view-details/product-view-details.component';
import { ProductViewMessageSupplierComponent } from './components/product-view-message-supplier/product-view-message-supplier.component';
import { ViewRoutingModule } from "./view-routing.module";

@NgModule({
  declarations: [
    BannerImgWidgetComponent,
    ButtonFiveWidgetComponent,
    ButtonFourWidgetComponent,
    ButtonThreeWidgetComponent,
    ButtonTileWidgetComponent,
    ButtonTwoWidgetComponent,
    Footer1Component,
    Footer2Component,
    Header1Component,
    Header2Component,
    Header3Component,
    Header4Component,
    HomeAvailableProductCustomizationComponent,
    HomeCategoriesComponent,
    HomeFlashDealsComponent,
    HomeTopSellingCategoriesComponent,
    HomeTradeFairComponent,
    ProductSearchCardComponent,
    ProductSearchCardListComponent,
    ProductSearchCategoriesComponent,
    ProductSearchFilterComponent,
    ProductSearchProductsComponent,
    ProductSearchSupplierComponent,
    ProductSearchSupplierCategoriesComponent,
    ProductSearchSupplierListComponent,
    ProductViewDetailsComponent,
    ProductViewMessageSupplierComponent
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
