import { Component, OnInit, Input } from '@angular/core';
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
  @Input() orderId: string;

  lat = 51.678418;
  lng = 7.809007;

  isSourceFetched = false;
  isLocationFetched = false;
  // orderId = 'ORD0020';


  // source = {latitude: 20.342861, longitude: 85.804166};
  currentLocation2 = {latitude: 20.342713, longitude: 85.800685};
  // destination = {latitude: 20.339121, longitude: 85.800778};
  source = new Location();
  destination = new Location();
  currentLocation = new Location();
  historyLocationArr = [];
  sourceLabel = {
    color: '#027c13',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Source',
  };
  destinationLabel = {
    color: '#027c13',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Destination',
  };
  currentLocationLabel = {
    color: '#0a4cb5',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Live'
  };

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
    this.getLocationHistory(this.orderId);
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
      if (res) {
        this.currentLocation.latitude = parseFloat(res.lattitude);
        this.currentLocation.longitude = parseFloat(res.longitude);
      } else {
        this.currentLocation = this.currentLocation2;
        this.source = this.currentLocation2;
      }
      // this.isLocationFetched = true;
    });
  }

  getLocationHistory(orderId) {
    this._fetchLocation.getLocationHistory(orderId).subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        const loc = res[i];
        const histElem = new Location();
        histElem.latitude = parseFloat(loc.lattitude);
        histElem.longitude = parseFloat(loc.longitude);
        this.historyLocationArr.push(histElem);
      }
      // console.log(this.historyLocationArr[0]);
      this.isLocationFetched = true;
      this.startLocationScheduler(orderId);
    });
  }

  startLocationScheduler(orderId) {
    TimerObservable.create(0, 1000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this._fetchLocation.getLocationHistory(orderId)
          .subscribe(res => {
            const previousLength = this.historyLocationArr.length;
            if (previousLength !== res.length) {
              for (let i = previousLength; i < res.length; i++) {
                const loc = res[i];
                const histElem = new Location();
                histElem.latitude = parseFloat(loc.lattitude);
                histElem.longitude = parseFloat(loc.longitude);
                this.historyLocationArr.push(histElem);
                this.currentLocation = this.historyLocationArr[res.length - 1];
              }
              this.isLocationFetched = true;
              console.log(this.orderId);
            }
          });
      });
  }

}
