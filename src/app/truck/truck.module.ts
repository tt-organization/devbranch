import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { MenuComponent } from './menu/menu.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [TruckDetailComponent, MenuComponent],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    TruckDetailComponent
  ]
})
export class TruckModule { }
