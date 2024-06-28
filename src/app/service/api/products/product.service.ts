import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductRepresentation} from "../models/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = 'https://fakestoreapi.com/';

  constructor(
    private http: HttpClient
  ) { }

  getAllProductWithLimit(limit:number=5): Observable<any>{
    const productUrl: string = `${this.baseUrl }products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productUrl);
  }
  createProduct(product: ProductRepresentation):Observable<ProductRepresentation> {
    const productsUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);

  }
}

