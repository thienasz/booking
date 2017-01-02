import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {UserService} from "../../services/user.service";
import {AuthGuard} from "../../services/auth.guard";

const styles   = require('./login.component.css');
const template = require('./login.component.html');

@Component({
  selector: 'login',
  template: template,
  styles: [ styles ],
  providers: [UserService]
})
export class LoginComponent {
  constructor(public router: Router, public http: Http, private userService: UserService, private auth: AuthGuard) {
      if(this.auth.canActivate()) {
          this.router.navigate(['dashboard']);
      }
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.userService.login(body)
        .subscribe(
            response => {
              if(!response){alert(response); return;}
              // localStorage.setItem('id_token', response.token);
              localStorage.setItem('currentUser', JSON.stringify(response));
              this.router.navigate(['dashboard']);
            },
            error => {
              alert(error.text());
              console.log(error.text());
            }
        );
  }
}