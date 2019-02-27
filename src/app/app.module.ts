import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
<<<<<<< HEAD
import { HomeScreenComponent } from './home-screen/home-screen.component';
=======
import { LandingComponent } from './landing/landing.component';
>>>>>>> aabd6ccad6313cb2319575d43b88f15e8d0f4e11

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
<<<<<<< HEAD
    HomeScreenComponent
=======
    LandingComponent
>>>>>>> aabd6ccad6313cb2319575d43b88f15e8d0f4e11
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
