import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/models/product.models';
import { ProductsService } from 'src/app/core/services/products.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  public showBtn:boolean = false
  public product:Product = {
      id:0,
      name:'',
      price:'',
      description:'', 
      stars: 0,
      image:''
  };

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params["id"];
      this.productsService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    });
  }

  public fillForm(product:Product) {
      this.product = {...product};
  }

}
