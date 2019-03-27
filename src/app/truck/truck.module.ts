import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule } from '../data/data.module';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { MenuComponent } from './menu/menu.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [TruckDetailComponent, MenuComponent],
  imports: [
    CommonModule,
    UserModule,
    DataModule
  ],
  exports: [
    TruckDetailComponent
  ]
})
export class TruckModule { }
