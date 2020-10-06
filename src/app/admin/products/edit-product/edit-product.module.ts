import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductRoutingModule } from './edit-product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditProductComponent } from './edit-product.component';


@NgModule({
  declarations: [
    EditProductComponent
  ],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    SharedModule
  ]
})
export class EditProductModule { }
