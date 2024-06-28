import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { AboutComponent } from './about/about.component';
import {ProductsComponent} from "./products/products.component";
import {CreateProductComponent} from "./create-product/create-product.component";

const routes: Routes = [
  {
    path: 'home',
    component: MyComponentComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:user',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
