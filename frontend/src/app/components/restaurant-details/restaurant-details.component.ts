import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  currentRestaurant :  Restaurant ={
    name:'',
    cuisine:'',
    
  };
  message ='';
  constructor(private restaurantservice: RestaurantService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.message  ='';
    this.getRestaurant(this.route.snapshot.params.id)
  }

  getRestaurant(id: string): void {
    this.restaurantservice.get(id)
      .subscribe(
        data => {
          this.currentRestaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentRestaurant.name,
      description: this.currentRestaurant.cuisine,
      published: status
    };

    this.message = '';

    // this.restaurantservice.update(this.currentRestaurant.name, data)
    //   .subscribe(
    //     response => {
    //       this.currentRestaurant.name = status;
    //       console.log(response);
    //       this.message = response.message ? response.message : 'The status was updated successfully!';
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

  updateRestaurant(): void {
    this.message = '';

    this.restaurantservice.update(this.currentRestaurant.restaurant_id, this.currentRestaurant)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This restaurant was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRestaurant(): void {
    this.restaurantservice.delete(this.currentRestaurant.restaurant_id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/restaurant']);
        },
        error => {
          console.log(error);
        });
  }

}
