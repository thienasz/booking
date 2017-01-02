import { Component } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AuthGuard} from "./services/auth.guard";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthGuard) {}
}
