import { Component, OnInit } from '@angular/core'
import { IProduct } from '../product'
import { ProductService } from '../product.service';

@Component({
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   pageTitle = 'Product List';
   imageWidth = 50;
   imageMargin = 2;
   errorMessage: string;
   products: IProduct[];

   constructor(private productService: ProductService) {}

   ngOnInit(): void {
      this.productService.getProducts().subscribe({
         next: products => {
            this.products = products;
         },
         error: err => this.errorMessage = err,
      })
   }

   onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
   }
}