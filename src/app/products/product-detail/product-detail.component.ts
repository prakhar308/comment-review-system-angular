import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { IProduct } from '../product.model'
import { ProductService } from '../product.service'
import { IProductDetail } from './product-detail.model';

@Component({
   templateUrl: './product-detail.component.html',
   styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
   pageTitle: string = 'Product Detail'
   product: IProductDetail;

   constructor(private route: ActivatedRoute,
               private router: Router,
               private productService: ProductService) { }

   ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('id');
      this.pageTitle += `: ${id}`;
      // get product from api using id
      this.productService.getProduct(id).subscribe({
         next: product => this.product = product,
      })
   }

   onBack(): void {
      this.router.navigate(['/products']);
   }

}
