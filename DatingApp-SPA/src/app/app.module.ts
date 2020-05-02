import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

import { AuthService } from './_services/auth.service';
import { ErrorInterceptor, ErrorInterceptorProvider } from './_services/error.interceptor';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
   ],
   // tslint:disable-next-line: object-literal-sort-keys
   bootstrap: [
      AppComponent,
   ],
})
export class AppModule { }
