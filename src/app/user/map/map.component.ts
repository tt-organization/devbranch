import { Component, OnInit, Input } from '@angular/core';
import { MapServiceService } from './map-service.service';
import { JwtService } from 'src/app/data/jwt.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private _lat: number;
  private _long: number;
  private _id: number;

  Location: Object;

  constructor(private map: MapServiceService,
    private auth: JwtService) { }

  @Input()
  set lat(lat: number) {
    this._lat = (lat);
  }

  @Input()
  set long(long: number) {
    this._long = (long);
  }

  @Input()
  set id(id: number) {
    this._id = (id);
  }

  get lat() {
    return this._lat;
  }

  get long() {
    return this._long;
  }

  get id() {
    return this._id;
  }

  ngOnInit() { }

  OnChooseLocation(event) {
    console.log( "logged in? " + this.auth.loggedIn() );
    console.log( this.auth.getTruckId() + " = " + this.id + "???" );
    if (this.auth.loggedIn() && this.auth.getTruckId() == this.id) {
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

}
