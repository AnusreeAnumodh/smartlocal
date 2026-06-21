import { Component, Input, OnDestroy, NgZone } from '@angular/core';
import { SessionService } from '../../../core/services/session.service';
import { AuthService } from '../../../features/auth/services/auth.service';
import { ToastService } from '../toast/toast.service';
import { ToastMessage } from '../toast/toast.service';

@Component({
  selector: 'app-page-shell',
  templateUrl: './page-shell.component.html',
  styleUrl: './page-shell.component.scss'
})
export class PageShellComponent implements OnDestroy {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() pendingCount = 0;

  toasts: ToastMessage[] = [];
  private cleanups: (() => void)[] = [];

  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    private toastService: ToastService,
    private zone: NgZone
  ) {
    const unsub = this.toastService.onToast((msg) => {
      this.zone.run(() => {
        this.toasts = [...this.toasts, msg];
        setTimeout(() => {
          this.zone.run(() => {
            this.toasts = this.toasts.filter((t) => t.id !== msg.id);
          });
        }, 5000);
      });
    });
    this.cleanups.push(unsub);
  }

  get currentRole(): string {
    return this.sessionService.session?.user.role ?? 'guest';
  }

  get isProviderOrAdmin(): boolean {
    return this.sessionService.isProvider || this.sessionService.isAdmin;
  }

  get isSuperAdmin(): boolean {
    return this.sessionService.isSuperAdmin;
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.cleanups.forEach((fn) => fn());
  }
}
