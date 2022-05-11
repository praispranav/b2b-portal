import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { ViewRoutingModule } from "./view-routing.module";
import { SharedModule } from "./../../@pages/components/shared.module";
import { pgCardModule } from "../../@pages/components/card/card.module";

import { BannerImgWidgetComponent } from "./components/banner-img-widget/banner-img-widget.component";
import { CompSellerCatalogueHeaderComponent } from "./components/comp-seller-catalogue-header/comp-seller-catalogue-header.component";
import { PageAboutUsComponent } from "./page-about-us/page-about-us.component";
import { PageContactUsComponent } from "./page-contact-us/page-contact-us.component";
import { PageError404Component } from "./page-error404/page-error404.component";
import { PageError500Component } from "./page-error500/page-error500.component";
import { PageHomeComponent } from "./page-home/page-home.component";
import { PageInspectionServiceComponent } from "./page-inspection-service/page-inspection-service.component";
import { PageLogisticSolutionsComponent } from "./page-logistic-solutions/page-logistic-solutions.component";
import { PagePartnerComponent } from "./page-partner/page-partner.component";
import { PageProductSearchComponent } from './page-product-search/page-product-search.component';
import { PageProductViewComponent } from "./page-product-view/page-product-view.component";
import { PageSellerCatalogueContactComponent } from "./page-seller-catalogue-contact/page-seller-catalogue-contact.component";
import { PageSellerCatalogueHomeComponent } from "./page-seller-catalogue-home/page-seller-catalogue-home.component";
import { PageSellerCatalogueProductComponent } from "./page-seller-catalogue-product/page-seller-catalogue-product.component";
import { PageSellerCatalogueProfileComponent } from "./page-seller-catalogue-profile/page-seller-catalogue-profile.component";
import { PageSupplierBackgroundSearchComponent } from "./page-supplier-background-search/page-supplier-background-search.component";
import { PageSupplierReportComponent } from "./page-supplier-report/page-supplier-report.component";
import { PageSupportComponent } from "./page-support/page-support.component";
import { PageTermsAndConditionComponent } from "./page-terms-and-condition/page-terms-and-condition.component";
import { PageTermsOfUseComponent } from "./page-terms-of-use/page-terms-of-use.component";
import { ProductSearchCategoriesComponent } from './components/product-search-categories/product-search-categories.component';
import { ProductSearchCardComponent } from './components/product-search-card/product-search-card.component';
import { ProductSearchFilterComponent } from './components/product-search-filter/product-search-filter.component';

@NgModule({
  declarations: [
    BannerImgWidgetComponent,
    CompSellerCatalogueHeaderComponent,
    PageAboutUsComponent,
    PageContactUsComponent,
    PageError404Component,
    PageError500Component,
    PageHomeComponent,
    PageInspectionServiceComponent,
    PageLogisticSolutionsComponent,
    PagePartnerComponent,
    PageProductSearchComponent,
    PageProductViewComponent,
    PageSellerCatalogueHomeComponent,
    PageSellerCatalogueProductComponent,
    PageSellerCatalogueProfileComponent,
    PageSellerCatalogueContactComponent,
    PageSupplierBackgroundSearchComponent,
    PageSupplierReportComponent,
    PageSupportComponent,
    PageTermsAndConditionComponent,
    PageTermsOfUseComponent,
    ProductSearchCategoriesComponent,
    ProductSearchCardComponent,
    ProductSearchFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ViewRoutingModule,
    SharedModule,
    pgCardModule,
  ],
})
export class ViewModule {}
