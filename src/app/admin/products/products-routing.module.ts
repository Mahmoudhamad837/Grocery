import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {path:'', redirectTo:'all', pathMatch:'full'},
  {path:'new', component:EditProductComponent},
  {path:'edit/:id', component:EditProductComponent},
  {path:'details', component:ProductDetailsComponent},
  {path:'all', component:AllProductsComponent}
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
