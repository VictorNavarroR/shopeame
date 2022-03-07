import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductFormComponent } from 'src/app/shared/product-form/product-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    ProductComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RatingModule
  ],
  exports: [
    ProductComponent,
    ProductFormComponent
  ]
})
export class SharedModule { }
