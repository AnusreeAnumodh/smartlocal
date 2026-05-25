import { Component } from '@angular/core';
import { SessionService } from './core/services/session.service';
import { AuthService } from './features/auth/services/auth.service';
import { APP_META } from './shared/config/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly appMeta = APP_META;

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

  get showHeader(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.authService.logout();
  }
}
