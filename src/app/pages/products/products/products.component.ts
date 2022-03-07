import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/services/models/product.models';

type productView = 'grid-view' | 'list-view'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = []
  public productsCount:number = 0
  public loader:boolean = true
  public loadingImage:string = '../../../../assets/loader.gif'

  public listBtnImg:string = '../../../../assets/list.png'
  public gridBtnImg:string = '../../../../assets/grid.png'

  public gridOrList:productView = 'grid-view'
  public filterProducts: string = ''


  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  public getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products
      this.productsCount = products.length
      this.loader = false
    });
  }


  public changeView(value:productView) {
    if(this.gridOrList === 'list-view') {
      this.gridOrList = value
    }
    if(this.gridOrList === 'grid-view') {
      this.gridOrList = value
    }
  }

}
