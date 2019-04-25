import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { MenuComponent } from './menu/menu.component';
import { UserModule } from '../user/user.module';
import { TruckComponent } from './truck.component';
import { AppRoutingModule } from '../app-routing.module';
import { HoursFormComponent } from './hours-form/hours-form.component';


@NgModule({
  declarations: [TruckDetailComponent, MenuComponent, TruckComponent, HoursFormComponent],
  imports: [
    CommonModule,
    UserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class TruckModule { }
