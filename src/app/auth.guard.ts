import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard {

  constructor(private router: Router,
    private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
    
    const autheticated = this.authService.isAuthenticated();
    if(autheticated){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }
  }

}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsGuard).canActivate(next, state);
}