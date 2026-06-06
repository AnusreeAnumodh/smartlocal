import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { SessionService } from '../services/session.service';
import { UserRole } from '../../models/user-session.model';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const expectedRoles = (route.data['roles'] as UserRole[] | undefined) ?? [];
    const currentRole = this.sessionService.currentRole;

    if (expectedRoles.includes(currentRole)) {
      return true;
    }

    return this.router.parseUrl('/dashboard');
  }
}
