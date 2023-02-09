import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

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
import { SellerAboutComponent } from "./seller-about/seller-about.component";
import { CatalogueSellerCompanyDetailsComponent } from "./components/catalogue-seller-company-details/catalogue-seller-company-details.component";
import { SellerSearchComponent } from "./seller-search/seller-search.component";
import { PageHomeRfqFormTwoComponent } from "./page-home-rfq-form-two/page-home-rfq-form-two.component";
import { PageNoProductFoundComponent } from "./page-no-product-found/page-no-product-found.component";
import { ViewBlogComponent } from "./view-blog/view-blog.component";
import { SendEnquiryFormComponent } from "./send-enquiry-form/send-enquiry-form.component";
import { PageNoSupplierFoundComponent } from "./page-no-supplier-found/page-no-supplier-found.component";
import { PageNoProductAddedComponent } from "./page-no-product-added/page-no-product-added.component";
import { PageViewCategoryStructureComponent } from "./page-view-category-structure/page-view-category-structure.component";
import { ContactForCatalogueComponent } from "./contact-for-catalogue/contact-for-catalogue.component";
import { ThankyouPageConfirmSupplierForCatalogingComponent } from "./thankyou-page-confirm-supplier-for-cataloging/thankyou-page-confirm-supplier-for-cataloging.component";
import { VerifyAssociateComponent } from "./verify-associate/verify-associate.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "",
  },
  {
    path: "about-us",
    component: PageAboutUsComponent,
  },
  {
    path: "active-account",
    component: PageActiveAccountComponent,
  },
  {
    path: "ask-support-for-service-partner",
    component: PageAskSupportForServicePartnerComponent,
  },
  {
    path: "be-a-bartners",
    component: PageBeABartnersComponent,
  },
  {
    path: "blog",
    component: PageBlogComponent,
  },
  {
    path: "blog-view/:_id",
    component: ViewBlogComponent,
  },
  {
    path: "buy",
    component: PageBuyComponent,
  },
  {
    path: "buy-help",
    component: PageBuyingHelpComponent,
  },
  {
    path: "contact-sales",
    component: PageContactSalesComponent,
  },
  {
    path: "no-supplier",
    component: PageNoSupplierFoundComponent,
  },
  {
    path: "no-product-added",
    component: PageNoProductAddedComponent,
  },
  {
    path: "contact-us",
    component: PageContactUsComponent,
  },
  {
    path: "create-account-support",
    component: PageCreateAccountSupportComponent,
  },
  {
    path: "error-404",
    component: PageError404Component,
  },
  {
    path: "error-500",
    component: PageError500Component,
  },
  {
    path: "faq",
    component: PageFaqComponent,
  },
  {
    path: "home",
    component: PageHomeComponent,
  },
  {
    path: "request-for-quotation",
    component:PageHomeRfqFormTwoComponent,
  },

  {
    path: "trade-fair",
    component: PageHomeTradeFairComponent,
  },
  {
    path: "inspection-service",
    component: PageInspectionServiceComponent,
  },
  {
    path: "join-now-for-free",
    component: PageJoinNowForFreeComponent,
  },
  {
    path: "logistic-solutions",
    component: PageLogisticSolutionsComponent,
  },
  {
    path: "news-and-update",
    component: PageNewsAndUpdateComponent,
  },
  {
    path: "over-stock",
    component: PageOverStockComponent,
  },
  {
    path: "policies-n-rules",
    component: PagePoliciesNRulesComponent,
  },
  {
    path: "product-search",
    component: PageProductSearchComponent,
  },
  {
    path: "product-search-enquiry",
    component: SendEnquiryFormComponent,
  },
  {
    path: "product-view",
    component: PageProductViewComponent,
  },
  {
    path: "sell",
    component: PageSellComponent,
  },
  {
    path: "no-product",
    component: PageNoProductFoundComponent,
  },
  
  {
    path: "seller-catalogue-contact",
    component: PageSellerCatalogueContactComponent,
  },
  {
    path: "seller-catalogue-home",
    component: PageSellerCatalogueHomeComponent,
  },
  {
    path: "seller-catalogue-manage-guide",
    component: PageSellerCatalogueManageGuideComponent,
  },
  {
    path: "seller-catalogue-product",
    component: PageSellerCatalogueProductComponent,
  },
  {
    path: "seller-catalogue-profile",
    component: PageSellerCatalogueProfileComponent,
  },
  {
  path: "seller-catalogue-profile-details",
  component: CatalogueSellerCompanyDetailsComponent,
},
  {
    path: "seller-document-we-consider",
    component: PageSellerDocumentWeConsiderComponent,
  },
  {
    path: "catalogue-seller-about",
    component: SellerAboutComponent,
  },
  {
    path: "seller-report-check",
    component: PageSellerReportCheckComponent,
  },
  {
    path: "seller-search",
    component: SellerSearchComponent,
  },
  {
    path: "sitemap",
    component: PageSitemapComponent,
  },
  {
    path: "supplier-background-search",
    component: PageSupplierBackgroundSearchComponent,
  },
  {
    path: "supplier-report",
    component: PageSupplierReportComponent,
  },
  {
    path: "confirm-cataloging",
    component: ThankyouPageConfirmSupplierForCatalogingComponent,
  },
  {
    path: "cataloging",
    component: ContactForCatalogueComponent,
  },

  {
    path: "support",
    component: PageSupportComponent,
  },
  {
    path: "teams",
    component: PageTeamsComponent,
  },
  {
    path: "terms",
    component: PageTermsComponent,
  },
  {
    path: "terms-and-condition",
    component: PageTermsAndConditionComponent,
  },
  {
    path: "terms-of-use",
    component: PageTermsOfUseComponent,
  },
  {
    path: "trade-show",
    component: PageTradeShowComponent,
  },
  {
    path: "view-category-structure",
    component: PageViewCategoryStructureComponent
  },
  {
    path: "verify-Associate",
    component: VerifyAssociateComponent
  },
  {
    path: "**",
    redirectTo: "error-404",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule { }