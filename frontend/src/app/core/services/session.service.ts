import { Injectable } from '@angular/core';
import { storage } from '../../utilities/storage.util';
import { ApprovalStatus, UserRole, UserSession } from '../../models/user-session.model';

const TOKEN_KEY = 'smartlocal_auth_token';
const SESSION_KEY = 'smartlocal_user_session';

@Injectable({ providedIn: 'root' })
export class SessionService {
  get token(): string | null {
    return storage.getItem(TOKEN_KEY);
  }

  get session(): UserSession | null {
    const raw = storage.getItem(SESSION_KEY);

    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as UserSession;
    } catch {
      return null;
    }
  }

  get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  get currentRole(): UserRole {
    return this.session?.user.role ?? 'guest';
  }

  get approvalStatus(): ApprovalStatus {
    return this.session?.user.approvalStatus ?? 'approved';
  }

  hasRole(...roles: UserRole[]): boolean {
    return roles.includes(this.currentRole);
  }

  get isSuperAdmin(): boolean {
    return this.hasRole('super_admin');
  }

  get isAdmin(): boolean {
    return this.hasRole('admin', 'super_admin');
  }

  get isProvider(): boolean {
    return this.hasRole('provider');
  }

  get isStandardUser(): boolean {
    return this.hasRole('user', 'guest', 'visitor');
  }

  setSession(session: UserSession): void {
    storage.setItem(SESSION_KEY, JSON.stringify(session));
    storage.setItem(TOKEN_KEY, session.token);
  }

  setToken(token: string): void {
    storage.setItem(TOKEN_KEY, token);
  }

  clearToken(): void {
    storage.removeItem(TOKEN_KEY);
    storage.removeItem(SESSION_KEY);
  }
}
