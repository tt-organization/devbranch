import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Truck } from '../truck';

@Component({
  selector: 'app-truck-detail',
})

export class TruckDetailComponent implements OnInit {


  constructor(private truck: Truck) { }

  ngOnInit() {}
  }