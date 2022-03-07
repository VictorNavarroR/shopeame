import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/services/models/product.models';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: Product[], filterProduct: string): Product[] {
    return products.filter(value => value.name.toLowerCase().includes(filterProduct.toLowerCase()))
  }

}
