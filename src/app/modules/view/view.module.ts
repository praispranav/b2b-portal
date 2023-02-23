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
import { IsotopeModule } from 'ngx-isotope';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageActiveAccountComponent } from './page-active-account/page-active-account.component';
import { PageAskSupportForServicePartnerComponent } from './page-ask-support-for-service-partner/page-ask-support-for-service-partner.component';
import { PageBeABartnersComponent } from './page-be-a-bartners/page-be-a-bartners.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PageBuyComponent } from './page-buy/page-buy.component';
import { PageBuyingHelpComponent } from './page-buying-help/page-buying-help.component';
import { PageContactSalesComponent } from './page-contact-sales/page-contact-sales.component';
import { PageContactUsComponent } from './page-contact-us/page-contact-us.component';
import { PageCreateAccountSupportComponent } from './page-create-account-support/page-create-account-support.component';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';
import { PageFaqComponent } from './page-faq/page-faq.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageHomeRequestForQuotationComponent } from './page-home-request-for-quotation/page-home-request-for-quotation.component';
import { PageHomeTradeFairComponent } from './page-home-trade-fair/page-home-trade-fair.component';
import { PageInspectionServiceComponent } from './page-inspection-service/page-inspection-service.component';
import { PageJoinNowForFreeComponent } from './page-join-now-for-free/page-join-now-for-free.component';
import { PageLogisticSolutionsComponent } from './page-logistic-solutions/page-logistic-solutions.component';
import { PageNewsAndUpdateComponent } from './page-news-and-update/page-news-and-update.component';
import { PageOverStockComponent } from './page-over-stock/page-over-stock.component';
import { PagePoliciesNRulesComponent } from './page-policies-n-rules/page-policies-n-rules.component';
import { PageProductSearchComponent } from './page-product-search/page-product-search.component';
import { PageProductViewComponent } from './page-product-view/page-product-view.component';
import { PageSellComponent } from './page-sell/page-sell.component';
import { PageSellerCatalogueContactComponent } from './page-seller-catalogue-contact/page-seller-catalogue-contact.component';
import { PageSellerCatalogueHomeComponent } from './page-seller-catalogue-home/page-seller-catalogue-home.component';
import { PageSellerCatalogueManageGuideComponent } from './page-seller-catalogue-manage-guide/page-seller-catalogue-manage-guide.component';
import { PageSellerCatalogueProductComponent } from './page-seller-catalogue-product/page-seller-catalogue-product.component';
import { PageSellerCatalogueProfileComponent } from './page-seller-catalogue-profile/page-seller-catalogue-profile.component';
import { PageSellerDocumentWeConsiderComponent } from './page-seller-document-we-consider/page-seller-document-we-consider.component';
import { PageSellerReportCheckComponent } from './page-seller-report-check/page-seller-report-check.component';
import { PageSitemapComponent } from './page-sitemap/page-sitemap.component';
import { PageSupplierBackgroundSearchComponent } from './page-supplier-background-search/page-supplier-background-search.component';
import { PageSupplierReportComponent } from './page-supplier-report/page-supplier-report.component';
import { PageSupportComponent } from './page-support/page-support.component';
import { PageTeamsComponent } from './page-teams/page-teams.component';
import { PageTermsComponent } from './page-terms/page-terms.component';
import { PageTermsAndConditionComponent } from './page-terms-and-condition/page-terms-and-condition.component';
import { PageTermsOfUseComponent } from './page-terms-of-use/page-terms-of-use.component';
import { PageTradeShowComponent } from './page-trade-show/page-trade-show.component';
import { ViewRoutingModule } from "./view-routing.module";
import { CatalogueSellerCompanyDetailsComponent } from './components/catalogue-seller-company-details/catalogue-seller-company-details.component';
import { pgCardSocialModule } from "../../@pages/components/card-social/card-social.module";
import { CatalogueMenubarComponent } from './components/catalogue-menubar/catalogue-menubar.component';
import { SellerCatalogueHomeProductComponent } from './seller-catalogue-home-product/seller-catalogue-home-product.component';
import { SellerAboutComponent } from './seller-about/seller-about.component';
import { CatalogueProductCardHomeComponent } from './components/catalogue-product-card-home/catalogue-product-card-home.component';
import { CatalogueProductSearchHomeComponent } from './components/catalogue-product-search-home/catalogue-product-search-home.component';
import { CatalogueProductComponent } from './components/catalogue-product/catalogue-product.component';
import { SellerSearchComponent } from './seller-search/seller-search.component';
import { PageHomeRfqFormTwoComponent } from './page-home-rfq-form-two/page-home-rfq-form-two.component';
import { SupplierProductSearchCategoryComponent } from './components/supplier-product-search-category/supplier-product-search-category.component';
import { PageNoProductFoundComponent } from './page-no-product-found/page-no-product-found.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { ShortlistedProductsComponent } from './components/shortlisted-products/shortlisted-products.component';
import { SendEnquiryFormComponent } from './send-enquiry-form/send-enquiry-form.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PageNoSupplierFoundComponent } from './page-no-supplier-found/page-no-supplier-found.component';
import { PageNoProductAddedComponent } from './page-no-product-added/page-no-product-added.component';
import { PageViewCategoryStructureComponent } from './page-view-category-structure/page-view-category-structure.component';
import { ContactForCatalogueComponent } from './contact-for-catalogue/contact-for-catalogue.component';
import { ThankyouPageConfirmSupplierForCatalogingComponent } from './thankyou-page-confirm-supplier-for-cataloging/thankyou-page-confirm-supplier-for-cataloging.component';
import { VerifyAssociateComponent } from './verify-associate/verify-associate.component';
import { VerifyAgentComponent } from "./verify-agent/verify-agent.component";


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
    ProductViewMessageSupplierComponent,
    PageAboutUsComponent,
    PageActiveAccountComponent,
    PageAskSupportForServicePartnerComponent,
    PageBeABartnersComponent,
    PageBlogComponent,
    PageBuyComponent,
    PageBuyingHelpComponent,
    PageContactSalesComponent,
    PageContactUsComponent,
    PageCreateAccountSupportComponent,
    PageError404Component,
    PageError500Component,
    PageFaqComponent,
    PageHomeComponent,
    PageHomeRequestForQuotationComponent,
    PageHomeTradeFairComponent,
    PageInspectionServiceComponent,
    PageJoinNowForFreeComponent,
    PageLogisticSolutionsComponent,
    PageNewsAndUpdateComponent,
    PageOverStockComponent,
    PagePoliciesNRulesComponent,
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
    PageSitemapComponent,
    PageSupplierBackgroundSearchComponent,
    PageSupplierReportComponent,
    PageSupportComponent,
    PageTeamsComponent,
    PageTermsComponent,
    PageTermsAndConditionComponent,
    PageTermsOfUseComponent,
    PageTradeShowComponent,
    CatalogueSellerCompanyDetailsComponent,
    CatalogueMenubarComponent,
    SellerCatalogueHomeProductComponent,
    SellerAboutComponent,
    CatalogueProductCardHomeComponent,
    CatalogueProductSearchHomeComponent,
    CatalogueProductComponent,
    SellerSearchComponent,
    PageHomeRfqFormTwoComponent,
    SupplierProductSearchCategoryComponent,
    ProductSearchCardListComponent,
    PageNoProductFoundComponent,
    ViewBlogComponent,
    ShortlistedProductsComponent,
    SendEnquiryFormComponent,
    PageNoSupplierFoundComponent,
    PageNoProductAddedComponent,
    PageViewCategoryStructureComponent,
    ContactForCatalogueComponent,
    ThankyouPageConfirmSupplierForCatalogingComponent,
    VerifyAssociateComponent,
    VerifyAgentComponent
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
    IsotopeModule,
    pgCardSocialModule,
    
    pgSelectfx,
    pgSelectModule,
    pgUploadModule,
    pgSliderModule,
    pgCollapseModule.forRoot(),
    ViewRoutingModule,CarouselModule,
  ],
})
export class ViewModule { }
