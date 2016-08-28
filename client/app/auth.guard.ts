import { Injectable } from '@angular/core';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    
    if (this.auth.isLoggedIn()) {
    
      // move to separate guard if list goes on
      if (state.url === '/new' && !this.auth.isAdmin()) {
        return false;
      }
      
      return true;
    }

    this.router.navigate(['login']);
  }
}