import { Component, OnInit } from '@angular/core';
import { TruckDataService } from './../../truck-data.service';
import { MapServiceService } from '../map/map-service.service';
import { TruckService } from 'src/app/truck/truck.service';
import { IfStmt } from '@angular/compiler';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


export class ViewComponent implements OnInit {

  lat: number;
  long: number;
  zoom = 13;
  trucks: Object[];
  previous;
  letter: String = 'A';
  truckList = [];
  originalList = [];


  constructor(private data: TruckDataService, private maps: MapServiceService) { }

  ngOnInit() {
    this.data.gettrucks().subscribe(data => {
      this.trucks = data['Trucks'];
      for (let truck of this.trucks) {
        console.log(truck);
        if (this.isOpen(truck)) {
          this.truckList.push(truck);
          this.originalList.push(truck);
        }
      }
      console.log(this.trucks);
      console.log(this.truckList);
    });

    navigator.geolocation.getCurrentPosition(data => {
      console.log(data);
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
    });
  }

  isOpen(truck: object) {
    let date = new Date();
    let today = date.getUTCDay();
    let bOpen = true;
    switch (today) {
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


filterVeggie(none, veggie, meat, dessert) {
  let newList = [];
  if (none.checked === true) {
    none.checked = false;
  }
  if (meat.checked === true) {
    meat.checked = false;
  }
  if (dessert.checked === true) {
    dessert.checked = false;
  }

  this.truckList = [];
  for(let o of this.originalList){
    this.truckList.push(o);
  }

  if(veggie.checked === true) {
        for(let t of this.truckList){
          if (t.Option_Desc === 'veggie') {
            newList.push(t);
            console.log(t.Option_Desc + ' ' + t.Truck_ID);
          }
        }
        this.truckList = [];
        for(let t of newList){
          this.truckList.push(t);
        }
    } else {
      veggie.checked = false;
      this.truckList = [];
      for(let o of this.originalList){
        this.truckList.push(o);
      }
      if (none.checked === false) {
        none.checked = true;
      }
  }
}




filterMeat(none, meat, dessert, veggie) {
  let newList = [];

  if (none.checked === true) {
    none.checked = false;
  }
  if (veggie.checked === true) {
    veggie.checked = false;
  }
  if (dessert.checked === true) {
    dessert.checked = false;
  }

  this.truckList = [];
  for(let o of this.originalList){
    this.truckList.push(o);
  }

  if(meat.checked === true) {
    for(let t of this.truckList){
      if (t.Option_Desc === 'meat') {
        newList.push(t);
        console.log(t.Option_Desc + ' ' + t.Truck_ID);
      }
    }
    this.truckList = [];
    for(let t of newList){
      this.truckList.push(t);
    }
} else {
  meat.checked = false;
  this.truckList = [];
  for(let o of this.originalList){
    this.truckList.push(o);
  }
  if (none.checked === false) {
    none.checked = true;
  }
}
}

filterDessert(none, dessert, veggie, meat) {
  let newList = [];
  if (none.checked === true) {
    none.checked = false;
  }
  if (meat.checked === true) {
    meat.checked = false;
  }
  if (veggie.checked === true) {
    veggie.checked = false;
  }
  this.truckList = [];
  for(let o of this.originalList){
    this.truckList.push(o);
  }

  if(dessert.checked === true) {
    for(let t of this.truckList){
      if (t.Option_Desc === 'dessert') {
        newList.push(t);
        console.log(t.Option_Desc + ' ' + t.Truck_ID);
      }
    }
    this.truckList = [];
    for(let t of newList){
      this.truckList.push(t);
    }
} else {
  dessert.checked = false;
  this.truckList = [];
  for(let o of this.originalList){
    this.truckList.push(o);
  }
  if (none.checked === false) {
    none.checked = true;
  }
}
}


  filterResultsNone(veggie, meat, dessert) {
      veggie.checked = false;
      meat.checked = false;
      dessert.checked = false;

      this.truckList = [];
  for(let o of this.originalList){
    this.truckList.push(o);
  }
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
