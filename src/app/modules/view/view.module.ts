import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from './../../@pages/components/shared.module';
import { pgCardModule } from '../../@pages/components/card/card.module';
import { AlertModule } from 'ngx-bootstrap';
import { BannerImgWidgetComponent } from './components/banner-img-widget/banner-img-widget.component';
import { CompFooter1Component } from './components/comp-footer1/comp-footer1.component';
import { CompFooter2Component } from './components/comp-footer2/comp-footer2.component';
import { CompFooter3Component } from './components/comp-footer3/comp-footer3.component';
import { CompHeader1Component } from './components/comp-header1/comp-header1.component';
import { CompHeader2Component } from './components/comp-header2/comp-header2.component';
import { CompHeader3Component } from './components/comp-header3/comp-header3.component';
import { CompHeader4Component } from './components/comp-header4/comp-header4.component';
import { CompSellerCatalogueHeaderComponent } from './components/comp-seller-catalogue-header/comp-seller-catalogue-header.component';
import { ProductSearchCardComponent } from './components/product-search-card/product-search-card.component';
import { ProductSearchCardListComponent } from './components/product-search-card-list/product-search-card-list.component';
import { ProductSearchCategoriesComponent } from './components/product-search-categories/product-search-categories.component';
import { ProductSearchFilterComponent } from './components/product-search-filter/product-search-filter.component';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PageContactUsComponent } from './page-contact-us/page-contact-us.component';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageInspectionServiceComponent } from './page-inspection-service/page-inspection-service.component';
import { PageLogisticSolutionsComponent } from './page-logistic-solutions/page-logistic-solutions.component';
import { PageNewsAndUpdateComponent } from './page-news-and-update/page-news-and-update.component';
import { PagePartnerComponent } from './page-partner/page-partner.component';
import { PageProductSearchComponent } from './page-product-search/page-product-search.component';
import { PageProductViewComponent } from './page-product-view/page-product-view.component';
import { PageSellerCatalogueContactComponent } from './page-seller-catalogue-contact/page-seller-catalogue-contact.component';
import { PageSellerCatalogueHomeComponent } from './page-seller-catalogue-home/page-seller-catalogue-home.component';
import { PageSellerCatalogueProductComponent } from './page-seller-catalogue-product/page-seller-catalogue-product.component';
import { PageSellerCatalogueProfileComponent } from './page-seller-catalogue-profile/page-seller-catalogue-profile.component';
import { PageSupplierBackgroundSearchComponent } from './page-supplier-background-search/page-supplier-background-search.component';
import { PageSupplierReportComponent } from './page-supplier-report/page-supplier-report.component';
import { PageSupportComponent } from './page-support/page-support.component';
import { PageTermsComponent } from './page-terms/page-terms.component';
import { PageTermsAndConditionComponent } from './page-terms-and-condition/page-terms-and-condition.component';
import { PageTermsOfUseComponent } from './page-terms-of-use/page-terms-of-use.component';
import { PageTradeShowComponent } from './page-trade-show/page-trade-show.component';

@NgModule({
  declarations: [
    BannerImgWidgetComponent,
    CompFooter1Component,
    CompFooter2Component,
    CompFooter3Component,
    CompHeader1Component,
    CompHeader2Component,
    CompHeader3Component,
    CompHeader4Component,
    CompSellerCatalogueHeaderComponent,
    ProductSearchCardComponent,
    ProductSearchCardListComponent,
    ProductSearchCategoriesComponent,
    ProductSearchFilterComponent,
    PageAboutUsComponent,
    PageBlogComponent,
    PageContactUsComponent,
    PageError404Component,
    PageError500Component,
    PageHomeComponent,
    PageInspectionServiceComponent,
    PageLogisticSolutionsComponent,
    PageNewsAndUpdateComponent,
    PagePartnerComponent,
    PageProductSearchComponent,
    PageProductViewComponent,
    PageSellerCatalogueContactComponent,
    PageSellerCatalogueHomeComponent,
    PageSellerCatalogueProductComponent,
    PageSellerCatalogueProfileComponent,
    PageSupplierBackgroundSearchComponent,
    PageSupplierReportComponent,
    PageSupportComponent,
    PageTermsComponent,
    PageTermsAndConditionComponent,
    PageTermsOfUseComponent,
    PageTradeShowComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ViewRoutingModule,
    SharedModule,
    pgCardModule,
    AlertModule.forRoot(),
  ],
})
export class ViewModule {}
