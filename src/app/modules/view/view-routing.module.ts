import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAboutUsComponent } from "./page-about-us/page-about-us.component";
import { PageBlogComponent } from "./page-blog/page-blog.component";
import { PageContactUsComponent } from "./page-contact-us/page-contact-us.component";
import { PageError404Component } from "./page-error404/page-error404.component";
import { PageError500Component } from "./page-error500/page-error500.component";
import { PageHomeComponent } from "./page-home/page-home.component";
import { PageInspectionServiceComponent } from "./page-inspection-service/page-inspection-service.component";
import { PageLogisticSolutionsComponent } from "./page-logistic-solutions/page-logistic-solutions.component";
import { PageNewsAndUpdateComponent } from "./page-news-and-update/page-news-and-update.component";
import { PagePartnerComponent } from "./page-partner/page-partner.component";
import { PageProductSearchComponent } from "./page-product-search/page-product-search.component";
import { PageProductViewComponent } from "./page-product-view/page-product-view.component";
import { PageSellerCatalogueContactComponent } from "./page-seller-catalogue-contact/page-seller-catalogue-contact.component";
import { PageSellerCatalogueHomeComponent } from "./page-seller-catalogue-home/page-seller-catalogue-home.component";
import { PageSellerCatalogueProductComponent } from "./page-seller-catalogue-product/page-seller-catalogue-product.component";
import { PageSellerCatalogueProfileComponent } from "./page-seller-catalogue-profile/page-seller-catalogue-profile.component";
import { PageSupplierBackgroundSearchComponent } from "./page-supplier-background-search/page-supplier-background-search.component";
import { PageSupplierReportComponent } from "./page-supplier-report/page-supplier-report.component";
import { PageSupportComponent } from "./page-support/page-support.component";
import { PageTermsComponent } from "./page-terms/page-terms.component";
import { PageTermsAndConditionComponent } from "./page-terms-and-condition/page-terms-and-condition.component";
import { PageTermsOfUseComponent } from "./page-terms-of-use/page-terms-of-use.component";
import { PageTradeShowComponent } from "./page-trade-show/page-trade-show.component";

const routes: Routes = [
  {
    path: "about-us",
    component: PageAboutUsComponent,
  },
  {
    path: "blog",
    component: PageBlogComponent,
  },
  {
    path: "contact-us",
    component: PageContactUsComponent,
  },
  {
    path: "error-404",
    component: PageError500Component,
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
    path: "rfq",
    component: PageRfqComponent,
  },
  {
    path: "sell",
    component: PageSellComponent,
  },
  {
    path: "home",
    component: PageHomeComponent,
  },
  {
    path: "inspection-service",
    component: PageInspectionServiceComponent,
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
    path: "partner",
    component: PagePartnerComponent,
  },
  {
    path: "product-search",
    component: PageProductSearchComponent,
  },
  {
    path: "product-view",
    component: PageProductViewComponent,
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
    path: "seller-catalogue-product",
    component: PageSellerCatalogueProductComponent,
  },
  {
    path: "seller-catalogue-profile",
    component: PageSellerCatalogueProfileComponent,
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
    path: "support",
    component: PageSupportComponent,
  },
  {
    path: "terms",
    component: PageSupportComponent,
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
    path: "**",
    redirectTo: "error-404",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule { }
