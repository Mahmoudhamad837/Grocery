import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCategoryComponent } from './edit-category.component';


const routes: Routes = [
  {path:'new', component:EditCategoryComponent},
  {path:'edit/:id', component:EditCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCategoryRoutingModule { }
