import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ProviderAuthService } from '../providers/provider-auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private providerAuthService: ProviderAuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.providerAuthService.currentUserValue) {
    //   const userRole = this.providerAuthService.currentUserValue.role;
    //   // if (route.data?.role && route.data?.role.indexOf(userRole) === -1) {
    //   //   this.router.navigate(["/auth/signin"]);
    //   //   return false;
    //   // }
    //   return true;
    // }

    // this.router.navigate(["/auth/signin"]);
    return true;
  }
}
