import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TruckerDataService {

  obj: Object;
  constructor(private http: HttpClient) { }

  sendUserData(user) {
    return this.http.post('/sendAccount.php', user);
  }

  getTruckInfo(id) {
    console.log( "id: " + id);
    return this.http.post('/getTruckInfo.php', id);   
  }

  login(user) {
    return this.http.post('/login.php', user);
  }

  sendTruckData(truck) {
    return this.http.post('/sendTruck.php', truck);
  }
}