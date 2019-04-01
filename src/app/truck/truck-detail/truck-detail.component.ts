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

  truck: any;

  constructor(
    private data: TruckerDataService, 
    private route: ActivatedRoute) { 
      this.route.params.subscribe( params => this.truck = params.id );
    }

  ngOnInit() {
    console.log( this.truck );
    this.data.getTruckInfo(this.truck)
      .subscribe(data => this.truck = data);
      
    console.log( this.truck );
  } 
}