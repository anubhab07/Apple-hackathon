import { Component, OnInit } from '@angular/core';
import { FetchLocationService } from './fetch-location.service';

@Component({
  selector: 'app-map-track',
  templateUrl: './map-track.component.html',
  styleUrls: ['./map-track.component.css']
})
export class MapTrackComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  currentLocation;
  orderId = '1234';

  constructor(private _fetchLocation: FetchLocationService) { }

  ngOnInit() {

  }

  getSource() {
    // fetch source location
  }
  getOrderDetails(orderId) {
    this._fetchLocation.getOrderDetails(orderId).subscribe(res => {
      console.log(res);
    });
    // fetch order details
  }

  getcurrentLocation() {
    // fetch current location
    this._fetchLocation.getCurrentLocation(this.orderId).subscribe(res => {
      this.currentLocation = {latitude: res.latitude, longitude: res.longitude};
    });
    // this.currentLocation
  }
}
