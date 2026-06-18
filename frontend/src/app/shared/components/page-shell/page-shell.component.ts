import { Component, Input } from '@angular/core';
import { SessionService } from '../../../core/services/session.service';
import { AuthService } from '../../../features/auth/services/auth.service';

@Component({
  selector: 'app-page-shell',
  templateUrl: './page-shell.component.html',
  styleUrl: './page-shell.component.scss'
})
export class PageShellComponent {
  @Input() title = '';
  @Input() subtitle = '';

  constructor(
    private sessionService: SessionService,
    private authService: AuthService
  ) {}

  get currentRole(): string {
    return this.sessionService.session?.user.role ?? 'guest';
  }

  get isProviderOrAdmin(): boolean {
    return this.sessionService.isProvider || this.sessionService.isAdmin;
  }

  logout(): void {
    this.authService.logout();
  }
}
