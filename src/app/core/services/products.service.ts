import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/services/models/product.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get(`${environment.baseApiUrl}products`) as Observable<Product[]>;
  }

  public createProduct(product: Product): Observable<Product> {
    return this.httpClient.post(`${environment.baseApiUrl}products`, product) as Observable<Product>;
  }

  public getProductById(id: string): Observable<Product> {
    return this.httpClient.get(`${environment.baseApiUrl}products/${id}`) as Observable<Product>;
  }

  // public createProduct(product: Product): Observable<Product> {
  //   return this.httpClient.post(`${environment.baseApiUrl}products`, product) as Observable<Product>;
  // }

  public editProduct(id: string, product: Product): Observable<Product> {
    return this.httpClient.put(`${environment.baseApiUrl}products/${id}`, product) as Observable<Product>;
  }

  // public deleteProduct(id: string): Observable<Product> {
  //   return this.httpClient.delete(`${environment.baseApiUrl}products/${id}`) as Observable<Product>;
  // }

}
