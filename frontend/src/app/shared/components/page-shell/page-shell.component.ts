import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-shell',
  templateUrl: './page-shell.component.html',
  styleUrl: './page-shell.component.scss'
})
export class PageShellComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
