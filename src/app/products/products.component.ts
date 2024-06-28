import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/api/products/product.service";
import {ProductRepresentation} from "../service/api/models/product-representation";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: ProductRepresentation[] = [];
  constructor(
    private service : ProductService

  ){

  }

  ngOnInit(): void {
    this.service.getAllProductWithLimit()
      .subscribe({
        next:(result: ProductRepresentation[]): void =>{
          this.products = result;
        }
      });
  }

}
