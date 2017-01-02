import { Component, OnInit } from '@angular/core';
import {BookingService} from "../services/booking.service";
import {Booking} from "../interfaces/Booking";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookingService]
})
export class BookingComponent implements OnInit {

  booking: Booking;
  prices = [20, 25, 30, 35];
  oldUsers = [];

  constructor(private bookingService: BookingService, private router: Router) {
    this.booking = {
      "name" : "",
      "price" : 30,
      "date" : null
    };
    this.bookingService.getOldUsers().subscribe(
        rs => {
            this.oldUsers = rs;
            console.log(this.oldUsers);
        },
        err => {
            // Log errors if any
            console.log(err);
        });
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.booking);
    this.bookingService.addBooking(this.booking).subscribe(
        rs => {
          // Emit list event
          this.router.navigateByUrl('dashboard');
          console.log(rs);
        },
        err => {
          // Log errors if any
          console.log(err);
        });
  }
}

interface post {
  id: number;
  title: string;
  body: string;
}