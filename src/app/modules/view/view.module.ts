import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pgCardModule } from '../../@pages/components/card/card.module';

import { ViewRoutingModule } from './view-routing.module';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageContactUsComponent } from './page-contact-us/page-contact-us.component';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';
import { PagePartnerComponent } from './page-partner/page-partner.component';
import { PageSellerCatalogueHomeComponent } from './page-seller-catalogue-home/page-seller-catalogue-home.component';
import { PageSellerCatalogueProductComponent } from './page-seller-catalogue-product/page-seller-catalogue-product.component';
import { PageSellerCatalogueProfileComponent } from './page-seller-catalogue-profile/page-seller-catalogue-profile.component';
import { PageSellerCatalogueContactComponent } from './page-seller-catalogue-contact/page-seller-catalogue-contact.component';
import { PageSupportComponent } from './page-support/page-support.component';
import { PageTermsAndConditionComponent } from './page-terms-and-condition/page-terms-and-condition.component';
import { PageTermsOfUseComponent } from './page-terms-of-use/page-terms-of-use.component';
import { BannerImgWidgetComponent } from './components/banner-img-widget/banner-img-widget.component';
import { CompSellerCatalogueHeaderComponent } from './components/comp-seller-catalogue-header/comp-seller-catalogue-header.component';

@NgModule({
  declarations: [
    PageAboutUsComponent,
    PageContactUsComponent,
    PageError404Component,
    PageError500Component,
    PagePartnerComponent,
    PageSellerCatalogueHomeComponent,
    PageSellerCatalogueProductComponent,
    PageSellerCatalogueProfileComponent,
    PageSellerCatalogueContactComponent,
    PageSupportComponent,
    PageTermsAndConditionComponent,
    PageTermsOfUseComponent,
    BannerImgWidgetComponent,
    CompSellerCatalogueHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    pgCardModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
