import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [LoginComponent, AccountComponent, NewAccountComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    NewAccountComponent
  ]
})
export class TruckOwnerModule { }
