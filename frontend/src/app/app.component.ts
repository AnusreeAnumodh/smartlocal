import { Component } from '@angular/core';
import { SessionService } from './core/services/session.service';
import { AuthService } from './features/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private sessionService: SessionService,
    private authService: AuthService
  ) {}

  get isAuthenticated(): boolean {
    return this.sessionService.isAuthenticated;
  }

  get currentUserName(): string {
    return this.sessionService.session?.user.fullName ?? 'Guest';
  }

  get currentUserRole(): string {
    return this.sessionService.session?.user.role ?? 'visitor';
  }

  get showSessionCopy(): boolean {
    return this.isAuthenticated && this.currentUserRole !== 'guest';
  }

  logout(): void {
    this.authService.logout();
  }
}
