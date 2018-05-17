import {GoogleMapsAPIWrapper} from '@agm/core';
import { Directive,  Input, OnInit} from '@angular/core';
// import {MapLocationService} from './map-location.service';
declare var google: any;
@Directive({
  selector: '[appMapDirections]'
})


export class MapDirectionsDirective implements OnInit {
  @Input() origin;
  @Input() destination;

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}

  ngOnInit() {
    this.getDirection();
  }

  getDirection() {
    this.gmapsApi.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers:true});
      directionsDisplay.setMap(map);
      console.log(this.destination);
      directionsService.route({
        origin: {lat: this.origin.latitude, lng: this.origin.longitude},
        destination: {lat: this.destination.latitude, lng: this.destination.longitude},
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          console.log('Directions request failed due to ' + status);
        }
      });
    });
  }
}
