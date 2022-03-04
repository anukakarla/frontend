import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TinterceptorInterceptor } from './tinterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AdddetailsComponent,
    CarDetailsComponent,
    HomeComponent,
    LoginFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:TinterceptorInterceptor,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
