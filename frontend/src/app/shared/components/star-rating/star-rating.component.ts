import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Input() max = 5;
  @Input() interactive = false;
  @Input() showValue = true;
  @Input() reviewCount: number | null = null;
  @Output() ratingChange = new EventEmitter<number>();

  get stars(): number[] {
    return Array.from({ length: this.max }, (_, index) => index);
  }

  get displayRating(): string {
    return this.rating.toFixed(1);
  }

  get reviewLabel(): string {
    if (this.reviewCount == null) {
      return '';
    }

    return `${this.reviewCount} review${this.reviewCount === 1 ? '' : 's'}`;
  }

  fillWidth(index: number): string {
    const fill = Math.max(0, Math.min(1, this.rating - index));
    return `${fill * 100}%`;
  }

  setRating(value: number): void {
    if (!this.interactive) {
      return;
    }

    this.ratingChange.emit(value);
  }
}
