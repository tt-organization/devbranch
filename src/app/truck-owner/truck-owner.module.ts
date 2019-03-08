import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [LoginComponent, AccountComponent],
  imports: [
    CommonModule
  ]
})
export class TruckOwnerModule { }
