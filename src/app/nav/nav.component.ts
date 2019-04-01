import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck/truck';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private truck: Truck) { }

  ngOnInit() {
    this.truck = null;
  }

  setTruck(truck: Truck) {
    this.truck = truck;
  }

  getTruckId() {
    if (this.truck == null) return -1;
    return this.truck.id;
  }

  signedIn()  {
    return true;
    return this.truck != null;
  }

  signOut() {
    this.truck = null;
  }

}
