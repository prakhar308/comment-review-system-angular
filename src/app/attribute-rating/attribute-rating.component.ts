import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'attribute-rating',
  templateUrl: './attribute-rating.component.html',
  styleUrls: ['./attribute-rating.component.scss']
})
export class AttributeRatingComponent implements OnInit {

  @Input() rating: number;
  @Input() name: string;
  strokeOffset: number;

  constructor() { }

  ngOnInit(): void {
    this.strokeOffset = (188.2 - (188.2 * this.rating) / 5);
  }

}
