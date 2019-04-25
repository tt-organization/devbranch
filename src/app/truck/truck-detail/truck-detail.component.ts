import { Component, OnInit } from '@angular/core';
import { TruckerDataService } from '../../data/trucker-data.service';
import { ActivatedRoute } from '@angular/router';
import { Truck, initTruck } from '../truck';

@Component({
  selector: 'app-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.css']
})
export class TruckDetailComponent implements OnInit {

  truck: Truck;
  truckLoaded: Promise<boolean>;

  constructor(private data: TruckerDataService,
    private route: ActivatedRoute) { }

  getLatitude(): Number {
    return this.truck.latitude;
  }

  getLongitude(): Number {
    return this.truck.longitude;
  }

  ngOnInit() {

    var id;
    this.route.params.subscribe(params => id = params.id);

    this.data.getTruckInfo(id)
      .subscribe(res => {
        console.log(res);
        this.truck = initTruck(res);
        console.log(this.truck);
        this.truckLoaded = Promise.resolve(true);
      });
    }
}
