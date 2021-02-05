import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module'
import { AttributeRatingComponent } from '../attribute-rating/attribute-rating.component';

@NgModule({
   declarations: [
      ProductListComponent,
      ConvertToSpacesPipe,
      ProductDetailComponent,
      AttributeRatingComponent
   ],
   imports: [
      RouterModule.forChild([
         { path: 'products', component: ProductListComponent },
         {
            path: 'products/:id', component: ProductDetailComponent
         },
      ]),
      SharedModule,
   ]
})
export class ProductModule { }
