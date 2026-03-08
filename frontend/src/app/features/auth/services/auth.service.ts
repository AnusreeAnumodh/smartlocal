import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../core/services/session.service';
import { LoginRequest } from '../models/login-request.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private sessionService: SessionService, private router: Router) {}

  login(payload: LoginRequest): void {
    if (!payload.email || !payload.password) return;

    // Placeholder token flow; replace with API login response.
    this.sessionService.setToken('demo-auth-token');
    this.router.navigate(['/dashboard']);
  }
}
