import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';

const baseUrl = 'http://localhost:8080/api/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(baseUrl);
  }

  get(id: any): Observable<Restaurant> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${baseUrl}?title=${title}`);
  }

}
