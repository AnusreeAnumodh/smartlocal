import { Component, OnDestroy, NgZone } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ToastService, ToastMessage } from './toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast-container">
      <div
        *ngFor="let toast of toasts"
        class="toast-message"
        [class.toast-success]="toast.type === 'success'"
        [class.toast-error]="toast.type === 'error'"
        [class.toast-info]="toast.type === 'info'"
      >
        {{ toast.text }}
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 400px;
      pointer-events: none;
    }
    .toast-message {
      padding: 0.75rem 1.25rem;
      border-radius: 14px;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      animation: slide-in 280ms ease both;
      border: 1px solid rgba(255,255,255,0.2);
      color: #fff;
    }
    .toast-success { background: #16a34a; }
    .toast-error { background: #dc2626; }
    .toast-info { background: #2563eb; }
    @keyframes slide-in {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `]
})
export class ToastComponent implements OnDestroy {
  toasts: ToastMessage[] = [];
  private sub: Subscription;
  private timers: Subscription[] = [];

  constructor(private toastService: ToastService, private zone: NgZone) {
    this.sub = this.toastService.toasts$.subscribe((msg) => {
      this.zone.run(() => {
        this.toasts = [...this.toasts, msg];
        const t = timer(5000).subscribe(() => {
          this.zone.run(() => {
            this.toasts = this.toasts.filter((t) => t.id !== msg.id);
          });
        });
        this.timers.push(t);
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.timers.forEach((t) => t.unsubscribe());
  }
}
