import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsModule } from './products/products.module';
import { SideBarAdminModule } from './side-bar-admin/side-bar-admin.module';
import { SideBarAdminComponent } from './side-bar-admin/side-bar-admin.component';
import { SharedModule } from '../shared/shared.module';
import { DriversModule } from './drivers/drivers.module';
import { CopounsModule } from './copouns/copouns.module';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';


@NgModule({
  declarations: [
    AdminComponent,
    SideBarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductsModule,
    SideBarAdminModule,
    SharedModule,
    DriversModule,
    CopounsModule,
    UsersModule,
    DashboardModule,
    OrdersModule,
    CategoriesModule
  ]
})
export class AdminModule { }
