import { Injectable } from '@angular/core';
// import { DataModule } from '../data/data.module';
import { TruckerDataService } from '../data/trucker-data.service';

@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor(private data: TruckerDataService) { }
}
