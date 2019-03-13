import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TruckDataService {

  constructor(private http: HttpClient) { }

  gettrucks() {
    return this.http.get('/truckList.php');
  }

}
