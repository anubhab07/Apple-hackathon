import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Http, Response} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Location } from './Location';

@Injectable({
  providedIn: 'root'
})
export class FetchLocationService {

  constructor(private _http: HttpClient) { }

  getCurrentLocation(orderId): Observable<Location> {
    // returns current order location
    const url = 'https://ordlocator.herokuapp.com/testService';
    return this._http.get(url)
    .map((res: Response) => res.json());
  }

  getOrderDetails(orderId): Observable<Location> {
    // returns order details
    return this._http.get('url')
    .map((res: Response) => res.json());
  }
}
