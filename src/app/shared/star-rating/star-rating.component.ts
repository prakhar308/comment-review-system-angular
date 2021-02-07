import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  selectedRating: number = 0;
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.selectedRating = this.rating;
  }

  ngOnChanges() {
    this.selectedRating = this.rating;
  }

  onRatingClicked(rating: number) {
    this.selectedRating = rating;
    this.ratingClicked.emit(rating);
  }

}
