import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class JwtService {

  private login = false;
 
  constructor(private httpClient: HttpClient) { }

  loggedIn() {
   if ( this.login ) return true;
    if ( !this.login && localStorage.getItem('access_token') !== null) {
      this.httpClient.post('/checkToken.php', {Truck_ID: this.getTruckId()}).subscribe(res => {
        if ( localStorage.getItem('access_token') === res['access_token'] ) {
          this.login = true;
          return true;
        } else {
          this.logout();
        }     
      });
    }
  }

  getTruckId(): number {
    return parseInt(localStorage.getItem('Truck_ID'));
  }

  generateToken(id: number) {
    this.httpClient.get<string>
        ('/getToken.php').subscribe(res => {
          localStorage.setItem('access_token', res);
          this.setToken(id, res).subscribe(res => {
          });
        });  
  }

  setToken(id: number, access_token: string) {
    return this.httpClient.post('/storeToken.php', {Truck_ID: id, access_token: access_token});
  }

  logout() {
    console.log( "logging out..." );
    this.login = false;
    localStorage.removeItem('access_token');
    localStorage.removeItem('Truck_ID');
  }
}

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
};

