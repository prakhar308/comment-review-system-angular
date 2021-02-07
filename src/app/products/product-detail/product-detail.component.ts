import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { ProductService } from '../product.service'
import { IReviewRequest } from '../../reviews/review-request.model';
import { IProductDetail } from './product-detail.model';
import { ReviewService } from 'src/app/reviews/review.service';
import { ToastrService } from 'src/app/shared/toastr.service';
import { $ } from 'protractor';

@Component({
   templateUrl: './product-detail.component.html',
   styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
   pageTitle: string = 'Product Detail'
   product: IProductDetail;
   review: IReviewRequest;
   productId: string;
   addingReview: boolean = false;

   constructor(private route: ActivatedRoute,
               private productService: ProductService,
               private reviewService: ReviewService,
               private toastrService: ToastrService) { }

   ngOnInit(): void {
      this.review = {
         comment: "",
         user_name: "",
         email: "",
         rating: null,
         product_id: this.route.snapshot.paramMap.get('id')
      };
      this.productId = this.route.snapshot.paramMap.get('id');
      this.pageTitle += `: ${this.productId}`;
      
      // get product from api using id
      this.productService.getProduct(this.productId).subscribe({
         next: product => this.product = product,
      })
   }

   onRatingClicked(rating: number) {
      this.review.rating = rating;
   }

   onReviewSubmit() {
      this.addingReview = true;
      this.reviewService
         .addReview(this.review)
         .subscribe(
            () => { 
               this.addingReview = false;
               // show success message
               this.toastrService.success("Added Review successfully")
               // dismiss modal
               // refresh
               this.productService.getProduct(this.productId).subscribe({
                  next: product => this.product = product,
               })
               // clear modal
               this.clearModal();
            },
            (error) => { 
               this.addingReview = false;
               // show error message
               this.toastrService.error(error);
            } 
         )
   }

   clearModal() {
      this.review = {
         comment: "",
         user_name: "",
         email: "",
         rating: null,
         product_id: this.route.snapshot.paramMap.get('id')
      };
   }

}
