import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BookingComponent} from "./booking/booking.component";
import { AuthGuard } from './services/auth.guard';
import {LoginComponent} from "./auth/login/login.component";
import {LogoutComponent} from "./auth/logout/logout.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookingComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
