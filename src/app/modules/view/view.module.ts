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
import { pgSliderModule } from "../../@pages/components/slider/slider.module";
import { ViewRoutingModule } from "./view-routing.module";
import { BannerImgWidgetComponent } from "./components/banner-img-widget/banner-img-widget.component";
import { ButtonFiveWidgetComponent } from "./components/button-five-widget/button-five-widget.component";
import { ButtonFourWidgetComponent } from "./components/button-four-widget/button-four-widget.component";
import { ButtonThreeWidgetComponent } from "./components/button-three-widget/button-three-widget.component";
import { ButtonTileWidgetComponent } from "./components/button-tile-widget/button-tile-widget.component";
import { ButtonTwoWidgetComponent } from "./components/button-two-widget/button-two-widget.component";
import { CompFooter1Component } from "./components/comp-footer1/comp-footer1.component";
import { CompFooter2Component } from "./components/comp-footer2/comp-footer2.component";
import { CompFooter3Component } from "./components/comp-footer3/comp-footer3.component";
import { CompHeader1Component } from "./components/comp-header1/comp-header1.component";
import { CompHeader2Component } from "./components/comp-header2/comp-header2.component";
import { CompHeader3Component } from "./components/comp-header3/comp-header3.component";
import { CompHeader4Component } from "./components/comp-header4/comp-header4.component";
import { CompSellerCatalogueHeaderComponent } from "./components/comp-seller-catalogue-header/comp-seller-catalogue-header.component";
import { PageProductSearchProductsComponent } from "./components/page-product-search-products/page-product-search-products.component";
import { PageProductSearchSupplierComponent } from "./components/page-product-search-supplier/page-product-search-supplier.component";
import { PageProductSearchSupplierCategoriesComponent } from "./components/page-product-search-supplier-categories/page-product-search-supplier-categories.component";
import { PageProductSearchSupplierListComponent } from "./components/page-product-search-supplier-list/page-product-search-supplier-list.component";
import { PageSellerCatalogueProfileMenuComponent } from "./components/page-seller-catalogue-profile-menu/page-seller-catalogue-profile-menu.component";
import { ProductSearchCardComponent } from "./components/product-search-card/product-search-card.component";
import { ProductSearchCardListComponent } from "./components/product-search-card-list/product-search-card-list.component";
import { ProductSearchCategoriesComponent } from "./components/product-search-categories/product-search-categories.component";
import { ProductSearchFilterComponent } from "./components/product-search-filter/product-search-filter.component";
import { PageAboutUsComponent } from "./page-about-us/page-about-us.component";
import { PageActiveAccountComponent } from './page-active-account/page-active-account.component';
import { PageAskSupportForServicePartnerComponent } from './page-ask-support-for-service-partner/page-ask-support-for-service-partner.component';
import { PageBlogComponent } from "./page-blog/page-blog.component";
import { PageBuyComponent } from "./page-buy/page-buy.component";
import { PageContactUsComponent } from "./page-contact-us/page-contact-us.component";
import { PageCreateAccountSupportComponent } from "./page-create-account-support/page-create-account-support.component";
import { PageError404Component } from "./page-error404/page-error404.component";
import { PageError500Component } from "./page-error500/page-error500.component";
import { PageFaqComponent } from "./page-faq/page-faq.component";
import { PageHomeComponent } from "./page-home/page-home.component";
import { PageInspectionServiceComponent } from "./page-inspection-service/page-inspection-service.component";
import { PageJoinNowForFreeComponent } from "./page-join-now-for-free/page-join-now-for-free.component";
import { PageLogisticSolutionsComponent } from "./page-logistic-solutions/page-logistic-solutions.component";
import { PageNewsAndUpdateComponent } from "./page-news-and-update/page-news-and-update.component";
import { PageProductSearchComponent } from "./page-product-search/page-product-search.component";
import { PageProductViewComponent } from "./page-product-view/page-product-view.component";
import { PageSellComponent } from "./page-sell/page-sell.component";
import { PageSellerCatalogueContactComponent } from "./page-seller-catalogue-contact/page-seller-catalogue-contact.component";
import { PageSellerCatalogueHomeComponent } from "./page-seller-catalogue-home/page-seller-catalogue-home.component";
import { PageSellerCatalogueManageGuideComponent } from './page-seller-catalogue-manage-guide/page-seller-catalogue-manage-guide.component';
import { PageSellerCatalogueProductComponent } from "./page-seller-catalogue-product/page-seller-catalogue-product.component";
import { PageSellerCatalogueProfileComponent } from "./page-seller-catalogue-profile/page-seller-catalogue-profile.component";
import { PageSellerDocumentWeConsiderComponent } from './page-seller-document-we-consider/page-seller-document-we-consider.component';
import { PageSellerReportCheckComponent } from "./page-seller-report-check/page-seller-report-check.component";
import { PageSupplierBackgroundSearchComponent } from "./page-supplier-background-search/page-supplier-background-search.component";
import { PageSupplierReportComponent } from "./page-supplier-report/page-supplier-report.component";
import { PageSupportComponent } from "./page-support/page-support.component";
import { PageTeamsComponent } from './page-teams/page-teams.component';
import { PageTermsComponent } from "./page-terms/page-terms.component";
import { PageTermsAndConditionComponent } from "./page-terms-and-condition/page-terms-and-condition.component";
import { PageTermsOfUseComponent } from "./page-terms-of-use/page-terms-of-use.component";
import { PageTradeShowComponent } from "./page-trade-show/page-trade-show.component";
import { PageProductViewDetailsComponent } from './components/page-product-view-details/page-product-view-details.component';
import { PageProductViewMessageSupplierComponent } from './components/page-product-view-message-supplier/page-product-view-message-supplier.component';
import { pgCollapseModule } from "../../@pages/components/collapse";

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
    PageProductSearchProductsComponent,
    PageProductSearchSupplierComponent,
    PageProductSearchSupplierCategoriesComponent,
    PageProductSearchSupplierListComponent,
    PageSellerCatalogueProfileMenuComponent,
    ProductSearchCardComponent,
    ProductSearchCardListComponent,
    ProductSearchCategoriesComponent,
    ProductSearchFilterComponent,
    PageAboutUsComponent,
    PageActiveAccountComponent,
    PageAskSupportForServicePartnerComponent,
    PageBlogComponent,
    PageBuyComponent,
    PageContactUsComponent,
    PageCreateAccountSupportComponent,
    PageError404Component,
    PageError500Component,
    PageFaqComponent,
    PageHomeComponent,
    PageInspectionServiceComponent,
    PageJoinNowForFreeComponent,
    PageLogisticSolutionsComponent,
    PageNewsAndUpdateComponent,
    PageProductSearchComponent,
    PageProductViewComponent,
    PageSellComponent,
    PageSellerCatalogueContactComponent,
    PageSellerCatalogueHomeComponent,
    PageSellerCatalogueManageGuideComponent,
    PageSellerCatalogueProductComponent,
    PageSellerCatalogueProfileComponent,
    PageSellerDocumentWeConsiderComponent,
    PageSellerReportCheckComponent,
    PageSupplierBackgroundSearchComponent,
    PageSupplierReportComponent,
    PageSupportComponent,
    PageTeamsComponent,
    PageTermsComponent,
    PageTermsAndConditionComponent,
    PageTermsOfUseComponent,
    PageTradeShowComponent,
    PageProductViewDetailsComponent,
    PageProductViewMessageSupplierComponent,
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
    pgSliderModule,
    ViewRoutingModule,
    pgCollapseModule.forRoot(),
  ],
})
export class ViewModule {}
