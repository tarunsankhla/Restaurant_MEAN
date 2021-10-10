import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants?: Restaurant[];
  currentrestaurant: Restaurant = {};
  currentIndex = -1;
  title = '';

  constructor(private restaurantservice: RestaurantService) { }

  ngOnInit(): void {
    this.retrieveRestaurant();
  }
  retrieveRestaurant():
    void {
      this.restaurantservice.getAll()
        .subscribe(
          data => {
            this.restaurants = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
  }


  refreshList(): void {
    this.retrieveRestaurant();
    this.currentrestaurant = {};
    this.currentIndex = -1;
  }

  setActiveRestaurant(tutorial: Restaurant, index: number): void {
    this.currentrestaurant = tutorial;
    this.currentIndex = index;
  }

  removeAllRestaurant(): void {
    this.restaurantservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentrestaurant = {};
    this.currentIndex = -1;

    this.restaurantservice.findByTitle(this.title)
      .subscribe(
        data => {
          this.restaurants = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
