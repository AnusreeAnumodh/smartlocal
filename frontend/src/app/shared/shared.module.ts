import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageShellComponent } from './components/page-shell/page-shell.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [PageShellComponent, CapitalizePipe],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, RouterModule, PageShellComponent, CapitalizePipe]
})
export class SharedModule {}
