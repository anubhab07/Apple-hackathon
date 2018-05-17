import { Component, OnInit } from '@angular/core';
import { FetchLocationService } from './fetch-location.service';
import { Location } from './Location';
import { Observable } from 'rxjs';
// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-map-track',
  templateUrl: './map-track.component.html',
  styleUrls: ['./map-track.component.css']
})
export class MapTrackComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  isSourceFetched = false;
  isLocationFetched = false;
  orderId = 'ORD0001';


  // source = {latitude: 20.342861, longitude: 85.804166};
  currentLocation2 = {latitude: 20.342713, longitude: 85.800685};
  // destination = {latitude: 20.339121, longitude: 85.800778};
  source = new Location();
  destination = new Location();
  currentLocation = new Location();
  public latitude: number;
  public longitude: number;
  public maxSpeed: number;
  public zoom: number;
  public polyline: Array<any>;
  public polylines: Array<any>;
  private alive = true;
  constructor(private _fetchLocation: FetchLocationService) { }

  ngOnInit() {
    this.getOrderDetails(this.orderId);
    this.getcurrentLocation(this.orderId);
  }

  getSource() {

  }
  getOrderDetails(orderId) {
    // fetch order details
    this._fetchLocation.getOrderDetails(orderId).subscribe(res => {
      const sCoords = res.source.split(',');
      const dCoords = res.destination.split(',');
      this.source.latitude = parseFloat(sCoords[0]);
      this.source.longitude = parseFloat(sCoords[1]);
      this.destination.latitude = parseFloat(dCoords[0]);
      this.destination.longitude = parseFloat(dCoords[1]);
      this.isSourceFetched = true;
    });

  }

  getcurrentLocation(orderId) {
    // fetch current location
    this._fetchLocation.getCurrentLocation(orderId).subscribe(res => {
      this.currentLocation.latitude = parseFloat(res.lattitude);
      this.currentLocation.longitude = parseFloat(res.longitude);
      this.isLocationFetched = true;
      // console.log(this.currentLocation);
      // setTimeout(this.getcurrentLocation(orderId), 3000);
    });


    TimerObservable.create(0, 1000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this._fetchLocation.getCurrentLocation(orderId)
          .subscribe(res => {
            this.currentLocation.latitude = parseFloat(res.lattitude);
            this.currentLocation.longitude = parseFloat(res.longitude);
            // console.log(res);
          });
      });
  }

}
