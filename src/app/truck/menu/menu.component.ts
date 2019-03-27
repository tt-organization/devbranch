import { Component, OnInit } from '@angular/core';
// import { Menu } from '../menu';
import { Truck } from '../truck';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private truck: Truck) { }

  ngOnInit() {
  }

}
