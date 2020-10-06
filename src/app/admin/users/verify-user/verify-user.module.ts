import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyUserRoutingModule } from './verify-user-routing.module';
import { VerifyUserComponent } from './verify-user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VerifyUserComponent
  ],
  imports: [
    CommonModule,
    VerifyUserRoutingModule,
    SharedModule
  ]
})
export class VerifyUserModule { }
