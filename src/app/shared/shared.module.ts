import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './Star/star.component'
import { SpinnerComponent } from './Spinner/spinner.component';
import { RatingPercentagePipe } from './pipes/rating-percentage.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
   declarations: [
      StarComponent,
      SpinnerComponent,
      RatingPercentagePipe,
      StarRatingComponent
   ],
   imports: [
      CommonModule,
   ],
   exports: [
      StarComponent,
      CommonModule,
      FormsModule,
      SpinnerComponent,
      RatingPercentagePipe,
      StarRatingComponent
   ]
})
export class SharedModule { }
