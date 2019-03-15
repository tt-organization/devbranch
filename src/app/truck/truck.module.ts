import { TruckComponent } from './truck.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';

@NgModule({
  declarations: [TruckDetailComponent, TruckComponent],
  imports: [
    CommonModule
  ]
})
export class TruckModuleModule { }
