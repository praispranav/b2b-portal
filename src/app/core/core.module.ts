import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";

import { ProviderAuthService } from './providers/provider-auth.service';

import { ServiceDynamicScriptLoaderService } from './services/service-dynamic-script-loader.service';
import { ServiceRightSidebarService } from './services/service-right-sidebar.service';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthGuard,
    ProviderAuthService,
    ServiceDynamicScriptLoaderService,
    ServiceRightSidebarService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
