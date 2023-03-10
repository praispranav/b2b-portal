// Angular Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Routing
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

// Layout Service - Required
import { pagesToggleService } from './@pages/services/toggler.service';

// Shared Layout Structures
import {
  RootLayout,
  AdminLayoutComponent,
  AgentLayoutComponent,
  AssociateLayoutComponent,
  BlankLayoutComponent,
  BuyerLayoutComponent,
  SellerLayoutComponent,
} from './@pages/layouts';
// Shared Layout Components
import { SidebarComponent } from './@pages/components/sidebar/sidebar.component';
import { QuickviewComponent } from './@pages/components/quickview/quickview.component';
import { QuickviewService } from './@pages/components/quickview/quickview.service';
import { SearchOverlayComponent } from './@pages/components/search-overlay/search-overlay.component';
import { HeaderComponent } from './@pages/components/header/header.component';
import { HorizontalMenuComponent } from './@pages/components/horizontal-menu/horizontal-menu.component';
import { SharedModule } from './@pages/components/shared.module';
import { pgListViewModule } from './@pages/components/list-view/list-view.module';
import { pgCardModule } from './@pages/components/card/card.module';
import { pgCardSocialModule } from './@pages/components/card-social/card-social.module';



// Basic Bootstrap Modules
import {
  BsDropdownModule,
  AccordionModule,
  AlertModule,
  ButtonsModule,
  CollapseModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
  TypeaheadModule,
  
} from 'ngx-bootstrap';

// Pages Globaly required Components - Optional
import { pgTabsModule } from './@pages/components/tabs/tabs.module';
import { ProgressModule } from './@pages/components/progress/progress.module';

// Thirdparty Components / Plugins - Optional
import { NvD3Module } from 'ngx-nvd3';
import { NgxEchartsModule } from 'ngx-echarts';
import { IsotopeModule } from 'ngx-isotope';
// import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { CoreModule } from './core/core.module';
import { MessageService } from './@pages/components/message/message.service';
import { MessageModule } from './@pages/components/message/message.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
// import { ProviderComponent } from './provider/provider.component';

// import {SocialService} from './social/SocialService';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

// Hammer Config Overide
// https://github.com/angular/angular/issues/10541
export class AppHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    QuickviewComponent,
    SearchOverlayComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    RootLayout,
    AdminLayoutComponent,
    AgentLayoutComponent,
    AssociateLayoutComponent,
    BlankLayoutComponent,
    BuyerLayoutComponent,
    SellerLayoutComponent,
    // ProviderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    SharedModule,
    ProgressModule,
    pgListViewModule,
    pgCardModule,
    pgCardSocialModule,
    RouterModule.forRoot(AppRoutes),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    NvD3Module,
    pgTabsModule,
    NgxEchartsModule,
    IsotopeModule,
    // NgxDnDModule,
    QuillModule.forRoot(),
    PerfectScrollbarModule,
    MessageModule,
    CoreModule,
    
  ],

  providers: [
//SocialService,
    MessageService,
    QuickviewService,
    pagesToggleService,
    
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: AppHammerConfig,
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi   : true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
