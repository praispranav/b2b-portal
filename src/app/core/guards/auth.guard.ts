import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ProviderUserAuthService } from '../providers/auth/provider-user-auth.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private providerUserAuthService: ProviderUserAuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.providerUserAuthService.currentUserValue) {
      const role = this.providerUserAuthService.currentUserValue.role;
      if ('admin' === role) {
        this.router.navigateByUrl('/admin');
        return false;
      } else if ('agent' === role) {
        this.router.navigateByUrl('/agent');
        return false;
      } else if ('associate' === role) {
        this.router.navigateByUrl('/associate');
        return false;
      } else if ('buyer' === role) {
        this.router.navigateByUrl('/buyer');
        return false;
      } else if ('seller' === role) {
        this.router.navigateByUrl('/seller');
        return false;
      } else if ('buyer-seller' === role) {
        this.router.navigateByUrl('/buyer-seller');
      }
    }
    this.providerUserAuthService.userSignOutNoApiCall(false);
    return true;
  }
}

