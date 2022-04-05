import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminFooterComponent } from './layout-components/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './layout-components/admin-header/admin-header.component';
import { BuyerFooterComponent } from './layout-components/buyer-footer/buyer-footer.component';
import { BuyerHeaderComponent } from './layout-components/buyer-header/buyer-header.component';
import { SellerFooterComponent } from './layout-components/seller-footer/seller-footer.component';
import { SellerHeaderComponent } from './layout-components/seller-header/seller-header.component';
import { AdminLayoutComponent } from './layout-structures/admin-layout/admin-layout.component';
import { BuyerLayoutComponent } from './layout-structures/buyer-layout/buyer-layout.component';
import { SellerLayoutComponent } from './layout-structures/seller-layout/seller-layout.component';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    AdminFooterComponent,
    AdminHeaderComponent,
    BuyerFooterComponent,
    BuyerHeaderComponent,
    SellerFooterComponent,
    SellerHeaderComponent,
    AdminLayoutComponent,
    BuyerLayoutComponent,
    SellerLayoutComponent,
  ],
  exports: [
    AdminLayoutComponent,
    BuyerLayoutComponent,
    SellerLayoutComponent,
  ],
})
export class LayoutModule {}
