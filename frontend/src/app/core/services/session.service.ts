import { Injectable } from '@angular/core';
import { storage } from '../../utilities/storage.util';

const TOKEN_KEY = 'smartlocal_auth_token';

@Injectable({ providedIn: 'root' })
export class SessionService {
  get token(): string | null {
    return storage.getItem(TOKEN_KEY);
  }

  get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  setToken(token: string): void {
    storage.setItem(TOKEN_KEY, token);
  }

  clearToken(): void {
    storage.removeItem(TOKEN_KEY);
  }
}
