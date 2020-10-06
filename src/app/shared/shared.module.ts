import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';



const Modules = [
  CommonModule,
  PasswordModule,
  InputTextModule,
  FormsModule,
  ButtonModule,
  SidebarModule,
  BrowserAnimationsModule,
  DropdownModule,
  ToolbarModule,
  SplitButtonModule,
  TableModule,
  ToastModule,
  DialogModule
];

@NgModule({
  declarations: [],
  imports: [
    Modules
  ],
  exports:[
    Modules
  ]
})
export class SharedModule { }
