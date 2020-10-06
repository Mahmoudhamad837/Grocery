import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';


export const categoryRoutes: Routes = [
  {path:'', redirectTo:'all', pathMatch:'full'},
  {path:'all', component:AllCategoriesComponent},
  {path:'new', component:EditCategoryComponent},
  {path:'edit/:id', component:EditCategoryComponent}
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
