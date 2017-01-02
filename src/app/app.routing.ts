import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {BookingComponent} from "./booking/booking.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./auth/login/login.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Route[] = [
    {
        path: '',
        component: BookingComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes, {
        useHash: true
    }
);
