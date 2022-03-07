import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from 'src/app/shared/product/shared.module';
import { FilterProductPipe } from 'src/app/core/filter-products.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
