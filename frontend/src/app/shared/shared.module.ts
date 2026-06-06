import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageShellComponent } from './components/page-shell/page-shell.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [PageShellComponent, StarRatingComponent, CapitalizePipe],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, RouterModule, PageShellComponent, StarRatingComponent, CapitalizePipe]
})
export class SharedModule {}
