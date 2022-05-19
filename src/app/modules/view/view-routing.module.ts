import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAboutUsComponent } from "./page-about-us/page-about-us.component";
import { PageContactUsComponent } from "./page-contact-us/page-contact-us.component";
import { PageError404Component } from "./page-error404/page-error404.component";
import { PageError500Component } from "./page-error500/page-error500.component";
import { PageHomeComponent } from "./page-home/page-home.component";
import { PagePartnerComponent } from "./page-partner/page-partner.component";
import { PageProductListComponent } from "./page-product-list/page-product-list.component";
import { PageProductViewComponent } from "./page-product-view/page-product-view.component";
import { PageSellerCatalogueHomeComponent } from "./page-seller-catalogue-home/page-seller-catalogue-home.component";
import { PageSellerCatalogueProductComponent } from "./page-seller-catalogue-product/page-seller-catalogue-product.component";
import { PageSellerCatalogueProfileComponent } from "./page-seller-catalogue-profile/page-seller-catalogue-profile.component";
import { PageSellerCatalogueContactComponent } from "./page-seller-catalogue-contact/page-seller-catalogue-contact.component";
import { PageSupportComponent } from "./page-support/page-support.component";
import { PageTermsAndConditionComponent } from "./page-terms-and-condition/page-terms-and-condition.component";
import { PageTermsOfUseComponent } from "./page-terms-of-use/page-terms-of-use.component";
import { PageJoinNowForFreeComponent } from "./page-join-now-for-free/page-join-now-for-free.component";
import { PageFaqComponent } from "./page-faq/page-faq.component";
import { PageSellerReportCheckComponent } from "./page-seller-report-check/page-seller-report-check.component";
import { PageBuyComponent } from "./page-buy/page-buy.component";
import { PageRfqComponent } from "./page-rfq/page-rfq.component";
import { PageSellComponent } from "./page-sell/page-sell.component";

const routes: Routes = [
  {
    path: "about-us",
    component: PageAboutUsComponent,
  },
  {
    path: "contact-us",
    component: PageError500Component,
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
    path: "buy",
    component: PageBuyComponent,
  },
  {
    path: "join-now",
    component: PageJoinNowForFreeComponent,
  },
  {
    path: "partner",
    component: PagePartnerComponent,
  },
  {
    path: "product-list",
    component: PageProductListComponent,
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
    path: "seller-report-check",
    component: PageSellerReportCheckComponent,
  },
  {
    path: "support",
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
    path: "**",
    redirectTo: "error-404",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule { }
