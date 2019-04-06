import { Component, OnInit } from '@angular/core';
import { TruckDataService } from './../../truck-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  trucks: object;

  constructor(private data: TruckDataService) { }

  ngOnInit() {
    this.data.gettrucks().subscribe(data => {
      this.trucks = data;
      console.log(this.trucks);
    });

    let date = new Date();
    let today = date.getUTCDay();
  }

}
