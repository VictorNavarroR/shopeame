import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/services/models/product.models';
import { ProductsService } from 'src/app/core/services/products.service'
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() public product?: Product;
  @Output() public newProduct = new EventEmitter<Product>();

  public createProductForm?: FormGroup;
  public idEditProduct: string = '';

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const productId = params["id"];
      this.idEditProduct = productId;
      this.productsService.getProductById(productId).subscribe((product) => {
        this.product = product;
       
        this.createForm()

      });
    });
    
    this.createForm()
  
    this.createProductForm?.valueChanges.subscribe( val => {
      this.newProduct.emit(val)
  })

  }


  public createForm() {
    this.createProductForm = new FormGroup({
      name: new FormControl(this.product?.name || '', Validators.required),
      price: new FormControl(this.product?.price || '', [
        Validators.required,
        Validators.maxLength(5),
      ]),
      stars: new FormControl(this.product?.stars || '', [
        Validators.required,
        Validators.maxLength(5),
      ]),
      description: new FormControl(this.product?.description || ''),
      image: new FormControl(this.product?.image || '', Validators.required),
      
    });
  }

  public crearProducto(event: Event): void {
  
    this.route.params.subscribe((params) => {
      const productId = params["id"];

      if(productId) {
        this.productsService
        .editProduct(productId, this.createProductForm?.value)
        .subscribe(() => {
          this.router.navigate(['/products']);
        });
      } else {
        this.productsService
        .createProduct(this.createProductForm?.value)
        .subscribe(() => {
          this.router.navigate(['/products']);
        });
      }

      this.createProductForm?.reset();
    });

  }
  

}
