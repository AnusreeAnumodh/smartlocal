import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './core/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private sessionService: SessionService, private router: Router) {}

  get isAuthenticated(): boolean {
    return this.sessionService.isAuthenticated;
  }

  logout(): void {
    this.sessionService.clearToken();
    this.router.navigate(['/auth/login']);
  }
}
