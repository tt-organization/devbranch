import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from '../app-routing.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [ViewComponent, MapComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AgmCoreModule
  ]
})
export class UserModule { }
