import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({ name: 'percentageRating' })
export class RatingPercentagePipe implements PipeTransform {

    transform(rating: number): number {
        if (rating <= 5) {
            const decimal = rating / 5;
            return decimal * 100;
        }
        return 0;
    }
}