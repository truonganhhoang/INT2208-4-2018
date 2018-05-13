import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.getLoggedInStatus()) {
        return true;
      }
      return this.authService.checkLoginStatus().pipe(map(res => {
        if (res.status) {
          this.authService.setLoggedInStatus(true);
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }));
  }
}
