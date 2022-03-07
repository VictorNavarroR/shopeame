import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/services/models/product.models';
import { Router } from '@angular/router';

type productView = 'grid-view' | 'list-view'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public product?: Product;
  @Input() public gridStyle!: productView;
  @Input() public showBtn?: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }
  public gotoGestion(product: Product) {
    const productID = product ? product.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate([`/gestion/${productID}`]);
  }

}
