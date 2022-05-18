import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { ViewRoutingModule } from "./view-routing.module";
import { pgCardModule } from "../../@pages/components/card/card.module";
import { NvD3Module } from "ngx-nvd3";

import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { BannerImgWidgetComponent } from "./components/banner-img-widget/banner-img-widget.component";
import { CompSellerCatalogueHeaderComponent } from "./components/comp-seller-catalogue-header/comp-seller-catalogue-header.component";
import { PageAboutUsComponent } from "./page-about-us/page-about-us.component";
import { PageContactUsComponent } from "./page-contact-us/page-contact-us.component";
import { PageError404Component } from "./page-error404/page-error404.component";
import { PageError500Component } from "./page-error500/page-error500.component";
import { pgTagModule } from "../../@pages/components/tag/tag.module";
import { PageFaqComponent } from './page-faq/page-faq.component';
import { PageHomeComponent } from "./page-home/page-home.component";
import { PageJoinNowForFreeComponent } from './page-join-now-for-free/page-join-now-for-free.component';
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
import { ButtonTileWidgetComponent } from './components/button-tile-widget/button-tile-widget.component';
import { ButtonTwoWidgetComponent } from './components/button-two-widget/button-two-widget.component';
import { ButtonThreeWidgetComponent } from './components/button-three-widget/button-three-widget.component';
import { ButtonFourWidgetComponent } from './components/button-four-widget/button-four-widget.component';
import { ButtonFiveWidgetComponent } from './components/button-five-widget/button-five-widget.component';
import { PageSellerCatalogueProfileMenuComponent } from './components/page-seller-catalogue-profile-menu/page-seller-catalogue-profile-menu.component';
import { pgTabsModule } from "../../@pages/components/tabs/tabs.module";





@NgModule({
  declarations: [
    BannerImgWidgetComponent,
    CompSellerCatalogueHeaderComponent,
    PageAboutUsComponent,
    PageContactUsComponent,
    PageError404Component,
    PageError500Component,
    PageFaqComponent,
    PageHomeComponent,
    PageJoinNowForFreeComponent,
    PagePartnerComponent,
    PageProductListComponent,
    PageProductViewComponent,
    PageSellerCatalogueHomeComponent,
    PageSellerCatalogueProductComponent,
    PageSellerCatalogueProfileComponent,
    PageSellerCatalogueContactComponent,
    PageSupportComponent,
    PageTermsAndConditionComponent,
    PageTermsOfUseComponent,
    ButtonTileWidgetComponent,
    ButtonTwoWidgetComponent,
    ButtonThreeWidgetComponent,
    ButtonFourWidgetComponent,
    ButtonFiveWidgetComponent,
    PageSellerCatalogueProfileMenuComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    pgCardModule,
    ViewRoutingModule,
    NvD3Module,
    SwiperModule,
    pgTabsModule,
    pgTagModule,

  ],
})
export class ViewModule { }
