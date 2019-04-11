import { Component, OnInit } from '@angular/core';
import { TruckDataService } from './../../truck-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  trucks: object;
  options: object;

  constructor(private data: TruckDataService) { }

  ngOnInit() {
    this.data.gettrucks().subscribe(data => {
      this.trucks = data;
      console.log(this.trucks);
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

  filterResultsNone(veg, meat, dessert) {
    veg.checked = false;
    meat.checked = false;
    dessert.checked = false;
  }

  filter(none) {
    none.checked = false;
    return console.log("A check box was checked!");
  }


}
