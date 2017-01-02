import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'flw-logout',
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    this.logout();
  }
  logout() {
    console.log("logout");
    localStorage.removeItem('currentUser');
    // localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }
}
