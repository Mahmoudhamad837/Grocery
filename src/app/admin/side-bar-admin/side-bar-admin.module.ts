import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarAdminRoutingModule } from './side-bar-admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarAdminRoutingModule,
    SharedModule
  ]
})
export class SideBarAdminModule { }
