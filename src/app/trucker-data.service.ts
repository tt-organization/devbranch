import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TruckerDataService {

  constructor(private http: HttpClient) { }

  sendUserData(user) {
    return this.http.post('/sendAccount.php', user);
  }
}
