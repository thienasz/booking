import { Component, OnInit } from '@angular/core';
import {Booking} from "../interfaces/Booking";
import {BookingService} from "../services/booking.service";
import {AuthGuard} from "../services/auth.guard";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BookingService]
})
export class DashboardComponent implements OnInit {
  posts: Booking[];
  dishes: Array<any>;
  totalDishes = 0;
  totalPrice = 0;
  userActive = false;

  constructor(private bookingService: BookingService, auth: AuthGuard) {
    this.userActive = auth.canActivate();
    console.log(this.userActive);
    this.bookingService.getPosts().subscribe(posts => {
      var dishes = [];
      var total = {
        dishes: 0,
        price: 0
      };
      posts.forEach(function (value, index) {
        total.dishes++;
        total.price += value.price;
        if (value.price in dishes) {
          dishes[value.price].number++;
          dishes[value.price].price += value.price;
        } else {
          dishes[value.price] = {
            type: value.price,
            number: 1,
            price: value.price
          }
        }
      });

      this.dishes = dishes.filter(function(){return true;});
      console.log(this.dishes);
      this.posts = posts;
      this.totalDishes = total.dishes;
      this.totalPrice = total.price;
      // this.totalDishes = hist;
    })
  }

  ngOnInit() {
  }

  deleteDish(event: MouseEvent, post, index) {
    event.preventDefault();
    this.bookingService.deleteBooking(post.id).subscribe(
        rs => {
          this.dishes = this.dishes.map(function(a){
            if(a.type && a.type == post.price) {
              a.number -=1;
              a.price -=post.price;
            }
            return a;
          }).filter(function (a) {
            return a.number > 0;
          });
          this.posts.splice(index, 1);
          this.totalDishes -= 1;
          this.totalPrice -= post.price;
        }
    );
    console.log(post);
  }
}

interface DishAnalytics {
  total: string;
  price: number;
  date: any;
}