import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  restaurant :  Restaurant ={
    address: {
      building: '',
      coord: [{
        lat : '',
        lng : ''
         }],
      street : '',
      zipcode: ''
  },
  borouygh: '',
  cuisine: '',
  grades : [{
    date : '',
    grade : '',
    score: ''
  }],
  name: '',
  restaurant_id: '',
  
  }
  submitted = false;
  constructor(private  restaurantservice : RestaurantService) { }

  ngOnInit(): void {
  }
  saverestaurant(): void {
    const data = {
      title: this.restaurant.name,
      description: this.restaurant.cuisine
    };

    this.restaurantservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newrestaurant(): void {
    this.submitted = false;
    this.restaurant = {
      name: '',
      cuisine: '',
      borouygh: ''
    };
  }

}
