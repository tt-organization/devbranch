import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, AccountComponent],
  imports: [
    CommonModule
  ]
})
export class TruckOwnerModule { }
