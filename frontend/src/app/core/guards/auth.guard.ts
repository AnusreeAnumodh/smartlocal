import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    return this.sessionService.isAuthenticated ? true : this.router.parseUrl('/auth/login');
  }
}
