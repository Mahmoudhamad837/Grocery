import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCategoriesRoutingModule } from './all-categories-routing.module';
import { AllCategoriesComponent } from './all-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {OrderListModule} from 'primeng/orderlist';


@NgModule({
  declarations: [AllCategoriesComponent],
  imports: [
    CommonModule,
    AllCategoriesRoutingModule,
    SharedModule,
    OrderListModule
  ]
})
export class AllCategoriesModule { }
