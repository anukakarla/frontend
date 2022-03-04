import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "navbar", component: NavbarComponent },
  { path: "login", component: LoginFormComponent },
  { path: "addcarDetails", component: AdddetailsComponent },
  { path: "getallcars", component: CarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
