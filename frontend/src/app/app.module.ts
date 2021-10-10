import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
