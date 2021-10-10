import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';


const routes: Routes = [
  { path: '', redirectTo :'restaurant', pathMatch:'full'},
  { path:'restaurant', component: RestaurantListComponent},
  { path:'restaurant/:id', component: RestaurantDetailsComponent},
  { path:'add', component: AddRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
