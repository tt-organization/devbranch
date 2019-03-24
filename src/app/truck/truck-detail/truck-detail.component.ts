import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Truck } from '../truck';

@Component({
  selector: 'app-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.css']
})
export class TruckDetailComponent implements OnInit {

  constructor(private truck: Truck) { }

  ngOnInit() {
  }

}
