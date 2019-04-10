import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from '../app-routing.module';
import { AgmCoreModule } from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import { MarkerManager } from '@agm/core';


@NgModule({
  declarations: [ViewComponent, MapComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AgmCoreModule
  ],
  exports: [MapComponent],
  providers: [MarkerManager, GoogleMapsAPIWrapper]
})
export class UserModule { }
