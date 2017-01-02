import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppSettings} from "../settings/setting";

@Injectable()
export class BookingService {
  root = 'http://localhost:8000';
  constructor(private http:Http) {
    this.root = AppSettings.API_ENDPOINT;
  }

  getPosts() {
    console.log('1111');
    return this.http.get(this.root + '/booking/today')
        .map(res => res.json());
  }

  getOldUsers() {
    console.log('2222');
    return this.http.get(this.root + '/booking/user')
        .map(res => res.json());
  }

  addBooking(data) {
    console.log(JSON.stringify(data));
    let headers = new Headers();
    let url = this.root + '/booking';
    headers.append('Content-Type', 'application/json');
    console.log(headers);

    return this.http.post(url, data, {headers: headers})
        .map(res => res.json());
  }


  deleteBooking(id) {
    let headers = new Headers();
    let url = this.root + '/booking/' + id;
    headers.append('Content-Type', 'application/json');
    console.log(headers);

    return this.http.delete(url, {headers: headers})
        .map(res => res.json());
  }
}
