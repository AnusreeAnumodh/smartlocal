import { Injectable } from '@angular/core';

export interface ToastMessage {
  id: number;
  text: string;
  type: 'success' | 'error' | 'info';
}

type Listener = (msg: ToastMessage) => void;

@Injectable({ providedIn: 'root' })
export class ToastService {
  private counter = 0;
  private listeners: Listener[] = [];

  onToast(fn: Listener): () => void {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  show(text: string, type: 'success' | 'error' | 'info' = 'success'): void {
    const msg: ToastMessage = { id: ++this.counter, text, type };
    this.listeners.forEach((fn) => fn(msg));
  }
}
