import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ProviderUserAuthService } from '../providers/auth/provider-user-auth.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private providerUserAuthService: ProviderUserAuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.providerUserAuthService.currentUserValue) {
      const userRole = this.providerUserAuthService.currentUserValue.role;
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this.router.navigateByUrl('/user-auth');
        return false;
      }
      return true;
    }

    this.router.navigateByUrl('/user-auth');
    return false;
  }
}