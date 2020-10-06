import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { DriversComponent } from './drivers/drivers.component';
import { CopounsComponent } from './copouns/copouns.component';
import { routes } from './products/products-routing.module';
import { categoryRoutes } from './categories/categories-routing.module';
import { usersRoutes } from './users/users-routing.module';


export const adminRoutes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'products', component:ProductsComponent, children:routes},
  {path:'categories', component:CategoriesComponent, children:categoryRoutes},
  {path:'orders', component:OrdersComponent},
  {path:'users', component:UsersComponent, children:usersRoutes},
  {path:'drivers', component:DriversComponent},
  {path:'copouns', component:CopounsComponent},
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
