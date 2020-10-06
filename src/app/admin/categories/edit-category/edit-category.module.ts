import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCategoryRoutingModule } from './edit-category-routing.module';
import { EditCategoryComponent } from './edit-category.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EditCategoryComponent],
  imports: [
    CommonModule,
    EditCategoryRoutingModule,
    SharedModule
  ]
})
export class EditCategoryModule { }
