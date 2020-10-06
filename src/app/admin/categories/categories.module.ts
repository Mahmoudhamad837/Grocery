import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditCategoryModule } from './edit-category/edit-category.module';
import { AllCategoriesModule } from './all-categories/all-categories.module';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    EditCategoryModule,
    AllCategoriesModule
  ]
})
export class CategoriesModule { }
