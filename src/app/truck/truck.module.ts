import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { MenuComponent } from './menu/menu.component';
import { UserModule } from '../user/user.module';
import { TruckComponent } from './truck.component';

@NgModule({
  declarations: [TruckDetailComponent, MenuComponent, TruckComponent],
  imports: [
    CommonModule,
    UserModule
  ]
})
export class TruckModule { }
