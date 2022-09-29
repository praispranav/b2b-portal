import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule { }



// {
//   path: "trade-fair",
//   component: PageHomeTradeFairComponent,
// },
// {
//   path: "about-us",
//   component: PageAboutUsComponent,
// },
// {
//   path: "active-account",
//   component: PageActiveAccountComponent,
// },
// {
//   path: "ask-support-for-service-partner",
//   component: PageAskSupportForServicePartnerComponent,
// },
// {
//   path: "blog",
//   component: PageBlogComponent,
// },
// {
//   path: "buy",
//   component: PageBuyComponent,
// },
// {
//   path: "buy-help",
//   component: PageBuyingHelpComponent,
// },
// {
//   path: "contact-us",
//   component: PageContactUsComponent,
// },
// {
//   path: "create-account-support",
//   component: PageCreateAccountSupportComponent,
// },
// {
//   path: "error-404",
//   component: PageError500Component,
// },
// {
//   path: "error-500",
//   component: PageError500Component,
// },
// {
//   path: "faq",
//   component: PageFaqComponent,
// },
// {
//   path: "home",
//   component: PageHomeComponent,
// },
// {
//   path: "inspection-service",
//   component: PageInspectionServiceComponent,
// },
// {
//   path: "join-now-for-free",
//   component: PageJoinNowForFreeComponent,
// },
// {
//   path: "logistic-solutions",
//   component: PageLogisticSolutionsComponent,
// },
// {
//   path: "news-and-update",
//   component: PageNewsAndUpdateComponent,
// },
// {
//   path: "product-search",
//   component: PageProductSearchComponent,
// },
// {
//   path: "product-view",
//   component: PageProductViewComponent,
// },
// {
//   path: "sell",
//   component: PageSellComponent,
// },
// {
//   path: "seller-catalogue-contact",
//   component: PageSellerCatalogueContactComponent,
// },
// {
//   path: "seller-catalogue-home",
//   component: PageSellerCatalogueHomeComponent,
// },
// {
//   path: "seller-catalogue-manage-guide",
//   component: PageSellerCatalogueManageGuideComponent,
// },
// {
//   path: "seller-catalogue-product",
//   component: PageSellerCatalogueProductComponent,
// },
// {
//   path: "seller-catalogue-profile",
//   component: PageSellerCatalogueProfileComponent,
// },
// {
//   path: "seller-document-we-consider",
//   component: PageSellerDocumentWeConsiderComponent,
// },
// {
//   path: "seller-report-check",
//   component: PageSellerReportCheckComponent,
// },
// {
//   path: "supplier-background-search",
//   component: PageSupplierBackgroundSearchComponent,
// },
// {
//   path: "supplier-report",
//   component: PageSupplierReportComponent,
// },
// {
//   path: "support",
//   component: PageSupportComponent,
// },
// {
//   path: "teams",
//   component: PageTeamsComponent,
// },
// {
//   path: "terms",
//   component: PageTermsComponent,
// },
// {
//   path: "terms-and-condition",
//   component: PageTermsAndConditionComponent,
// },
// {
//   path: "terms-of-use",
//   component: PageTermsOfUseComponent,
// },
// {
//   path: "trade-show",
//   component: PageTradeShowComponent,
// },

// {
//   path: "**",
//   redirectTo: "error-404",
// },