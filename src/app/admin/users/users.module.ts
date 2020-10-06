import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AllUsersModule } from './all-users/all-users.module';
import { EditUserModule } from './edit-user/edit-user.module';
import { VerifyUserModule } from './verify-user/verify-user.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AllUsersModule,
    EditUserModule,
    VerifyUserModule
  ]
})
export class UsersModule { }
