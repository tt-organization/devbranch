import { TruckModule } from './truck/truck.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Truck } from './truck/truck';
import { TruckOwnerModule } from './truck-owner/truck-owner.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavComponent } from './nav/nav.component';
import { AgmCoreModule } from '@agm/core';
import { JwtModule } from '@auth0/angular-jwt';
import { jwtTokenGetter } from './data/jwt.service';
import { PasswordValidatorDirective } from './data/password-validator.directive';
import {GoogleMapsAPIWrapper} from '@agm/core';
import { MarkerManager } from '@agm/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavComponent,
    PasswordValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TruckOwnerModule,
    UserModule,
    TruckModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbquhLC8XjOT_-5V_5Wd-js_nT7n3YzKs'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [Truck, GoogleMapsAPIWrapper, MarkerManager, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
