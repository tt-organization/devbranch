import { Component, OnInit } from '@angular/core';
import { MapServiceService } from './map-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat : number;
  long : number;

  Location : Object;

  constructor(private map: MapServiceService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(data => {
      console.log(data);
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
    });
  }

  OnChooseLocation(event){
    console.log(event);
    if (confirm('Would you like to update your trucks location?')) {
      // Save it!
      this.lat = event.coords.lat;
      this.long = event.coords.lng;
      //call php script to update database
    } else {
      // Do nothing!
    }
  }

}
