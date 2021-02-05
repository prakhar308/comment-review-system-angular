import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

import { IProduct } from './product.model'
import { IProductDetail } from './product-detail/product-detail.model';

@Injectable({
   providedIn: 'root',
})
export class ProductService {

   private productUrl = 'https://kibo-hackathon.herokuapp.com/rating/get_product/'

   constructor(private http: HttpClient) { }

   getProducts(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.productUrl)
         .pipe(
            // tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
         );
   }

   getProduct(id: string): Observable<IProductDetail> {
      return this.http.get<IProductDetail>(`${this.productUrl}?product_id=${id}`)
         .pipe(
            catchError(this.handleError)
         )
   }

   private handleError(err: HttpErrorResponse) {
      return throwError("Error: " + err.message)
   }

}