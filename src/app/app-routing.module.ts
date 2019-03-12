import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './truck-owner/login/login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NewAccountComponent } from './truck-owner/new-account/new-account.component';
import { ViewComponent } from './user/view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: ViewComponent },
  { path: 'create', component: NewAccountComponent },
  { path: 'view', component: ViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
