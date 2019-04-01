import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckerDataService } from './trucker-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ TruckerDataService ]
})
export class DataModule { }
