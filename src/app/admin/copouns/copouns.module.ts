import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopounsRoutingModule } from './copouns-routing.module';
import { CopounsComponent } from './copouns.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CopounsComponent],
  imports: [
    CommonModule,
    CopounsRoutingModule,
    SharedModule
  ]
})
export class CopounsModule { }
