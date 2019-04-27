import { Component, OnInit, Input } from '@angular/core';
import { MapServiceService } from './map-service.service';
import { ActivatedRoute } from '@angular/router';
import { TruckerDataService } from './../../data/trucker-data.service';
import { JwtService } from 'src/app/data/jwt.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private _lat: number;
  private _long: number;
  id: number;

  Location: Object;

  constructor(private map: MapServiceService, private route: ActivatedRoute, private data: TruckerDataService, private auth: JwtService) {
    this.route.params.subscribe(params => this.id = params.id);

  }
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

  ngOnInit() { }

  OnChooseLocation(event) {
    if (this.auth.loggedIn() && this.auth.getTruckId() == this.id) {
      console.log(event);
      if (confirm('Would you like to update your trucks location?')) {
        var request = {
          Truck_ID: this.id
        };
        this.lat = event.coords.lat;
        this.long = event.coords.lng;
        var body = {
          "Truck_ID": this.id,
          "latitude": this.lat,
          "longitude": this.long
        };
        this.data.sendLocation(body).subscribe(data => {
          console.log(data);
        });
      } else {
        // Do nothing!
      }
    }
  }
}
