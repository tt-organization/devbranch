import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckerDataService } from './trucker-data.service';
import { PasswordValidatorDirective } from './password-validator.directive';

@NgModule({
  declarations: [PasswordValidatorDirective],
  imports: [
    CommonModule
  ],
  providers: [ TruckerDataService ]
})
export class DataModule { }
