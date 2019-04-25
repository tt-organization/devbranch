import { Component, OnInit } from '@angular/core';
import { TruckerDataService } from '../../data/trucker-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.css']
})
export class TruckDetailComponent implements OnInit {

  id: number;
  truck: any;

  constructor(
    private data: TruckerDataService,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => this.id = params.id );
    }

  ngOnInit() {
    var request = {
      Truck_ID: this.id
    };
    console.log( "detail... id: " + this.id
                + " request: " + request
                + " request[Truck_ID] " + request['Truck_ID']);
    this.data.getTruckInfo(this.id)
      .subscribe(res => {
        this.truck = res;
        console.log( res );
      });
  }
}
