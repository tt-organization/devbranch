import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [ViewComponent, MapComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MapComponent
  ]
})
export class UserModule { }
