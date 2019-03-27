import { Component, OnInit, Optional } from '@angular/core';
//import { Truck } from '../truck/truck';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  truck: number;
  static instance: NavComponent;
  constructor() { 
    this.truck = -1;
  }

  static getInstance() {
    if (this.instance == null) return new NavComponent();
    return this.instance;
  }

  ngOnInit() { 
    console.log("truck: " + this.truck);
  }

  public setTruck(truck: number) {
    this.truck = truck;    
    console.log("setting truck: " + this.truck);
  }

  getTruckId() {
    return this.truck;
  }

  signedIn()  {
    return this.truck >= 0;
  }

  signOut() {
    this.truck = -1;
  }

}
