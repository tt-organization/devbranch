import { Component, OnInit, Input } from '@angular/core';
import { MapServiceService } from './map-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    private _lat : number;
    private _long: number;

  Location: Object;

  constructor(private map: MapServiceService) { }

  @Input()
  set lat(lat: number) {
    this._lat = (lat);
  }
  
  @Input()
  set long(long: number) {
    this._long = (long);
  }

  get lat() {
    return this._lat;
  } 

  get long() {
    return this._long;
  }

  ngOnInit() {}

  OnChooseLocation(event) {
    console.log(event);
    if (confirm('Would you like to update your trucks location?')) {
      // Save it!
      this.lat = event.coords.lat;
     // this.long = event.coords.lng;
      //call php script to update database
    } else {
      // Do nothing!
    }
  }

}
