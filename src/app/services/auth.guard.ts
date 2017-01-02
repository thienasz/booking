import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router:Router) {
    }

    canActivate() {
        //not done. security
        let user = localStorage.getItem('currentUser');
        if (user) {
            return true;
        }

        // If not, they redirect them to the login page
        return false;
    }
}