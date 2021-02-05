import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './Star/star.component'
import { SpinnerComponent } from './Spinner/spinner.component';

@NgModule({
   declarations: [
      StarComponent,
      SpinnerComponent
   ],
   imports: [
      CommonModule,
   ],
   exports: [
      StarComponent,
      CommonModule,
      FormsModule,
      SpinnerComponent
   ]
})
export class SharedModule { }
