import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class JwtService {
 
  constructor(private httpClient: HttpClient) { }

  loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }

  checkToken(): boolean {
    var localToken = localStorage.getItem('access_token');
    var storedToken = null;
    this.httpClient.post('/checkToken.php', {id: this.getTruckId()}).subscribe(res => {
      storedToken = res['access_token']
    });
    return localToken === storedToken;
  }

  getTruckId(): number{
    return parseInt(localStorage.getItem('Truck_ID'));
  }

  generateToken(id: number) {
    this.httpClient.get<{access_token: string}>
        ('/getToken.php').subscribe(res => {
          localStorage.setItem('access_token', res['access_token']);
          this.setToken(id, res['access_token']).subscribe(res => {
          });
        });  
  }

  setToken(id: number, access_token: string) {
    return this.httpClient.post('/storeToken.php', {Truck_ID: id, access_token: access_token});
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('Truck_ID');
  }
}

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
};

