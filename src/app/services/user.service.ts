import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {AppSettings} from "../settings/setting";

@Injectable()
export class UserService {
  root = 'http://localhost:800';
  constructor(private http:Http) {
      this.root = AppSettings.API_ENDPOINT;
  }

  login(data) {
    let headers = new Headers();
    let url = this.root + '/login';
    headers.append('Content-Type', 'application/json');

    return this.http.post(url, data, {headers: headers})
        .map(res => res.json());
  }
}
