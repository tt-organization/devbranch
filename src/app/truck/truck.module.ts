import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';

@NgModule({
  declarations: [TruckDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TruckDetailComponent
  ]
})
export class TruckModule { }
