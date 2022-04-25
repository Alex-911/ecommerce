import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignedOutGuard implements CanActivate {
  constructor(
    private authService: AuthenticatorService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.user.getSignInUserSession()?.isValid() ?? false
      ? true
      : this.router.navigateByUrl('/dashboard/home');
  }
}
