import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditProductModule } from './edit-product/edit-product.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { AllProductsModule } from './all-products/all-products.module';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    EditProductModule,
    ProductDetailsModule,
    AllProductsModule
  ]
})
export class ProductsModule { }
