import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';


export const usersRoutes: Routes = [
  {path:'', redirectTo:'all', pathMatch:'full'},
  {path:'all', component: AllUsersComponent},
  {path:'new', component:EditUserComponent},
  {path:'edit/:id', component:EditUserComponent},
  {path:'verify/:id', component:VerifyUserComponent}
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
