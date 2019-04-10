import { Component, OnInit } from '@angular/core';
import { TruckDataService } from './../../truck-data.service';
import { MapServiceService } from '../map/map-service.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  lat : number;
  long : number;
  zoom = 13;
  trucks: Object;
  previous;
  letter : String = 'A';

  constructor(private data: TruckDataService, private maps: MapServiceService) { }

  ngOnInit() {
    this.data.gettrucks().subscribe(data => {
      this.trucks = data;
      console.log(this.trucks);
    });
    navigator.geolocation.getCurrentPosition(data => {
      console.log(data);
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
    });
  }

  isOpen(truck: object){
    let date = new Date();
    let today = date.getUTCDay();
    let bOpen = true;
    switch(today) {
      case 0:
      bOpen = !(truck['Close_Sunday'] === "0");
      break;
      case 1:
      bOpen = !(truck['Close_Monday'] === "0");
      break;
      case 2:
      bOpen = !(truck['Close_Tuesday'] === "0");
      break;
      case 3:
      bOpen = !(truck['Close_Wednesday'] === "0");
      break;
      case 4:
      bOpen = !(truck['Close_Thursday'] === "0");
      break;
      case 5:
      bOpen = !(truck['Close_Friday'] === "0");
      break;
      case 6:
      bOpen = !(truck['Close_Saturday'] === "0");
      break;

    }
    return bOpen;
  }

  clickedMarker(infowindow) {
    console.log("clicked");
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }

 ConvertToInt(val){
  return parseInt(val);
}
}
