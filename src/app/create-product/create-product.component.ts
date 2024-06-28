import { Component } from '@angular/core';
import {ProductRepresentation} from "../service/api/models/product-representation";
import {ProductService} from "../service/api/products/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  product: ProductRepresentation = {};

  constructor(
    private service : ProductService,
    private router : Router
  ) {
  }
  saveProduct() {
    this.service.createProduct(this.product)
      .subscribe({
        next:(result:ProductRepresentation): void => {
          this.router.navigate(['products']);
        }
      })
  }
}
