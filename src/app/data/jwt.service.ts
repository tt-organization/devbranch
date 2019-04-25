import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class JwtService {

  private login = false;
  private tokenChecked: Promise<boolean>;
 
  constructor(private httpClient: HttpClient) { }

  loggedIn() {
   // return true;
   if ( this.login ) return true;
    console.log("logged in?");
    if ( !this.login && localStorage.getItem('access_token') !== null) {
      console.log("checking token...");
      var localToken = localStorage.getItem('access_token');
      //var storedToken = null;
      this.httpClient.post('/checkToken.php', {Truck_ID: this.getTruckId()}).subscribe(res => {
        console.log("local token: " + localToken);
        console.log( this.getTruckId() );
        console.log( res );
        if ( localStorage.getItem('access_token') === res['access_token'] ) {
          console.log( "theyMatch!");
          this.login = true;
          return true;
        } else {
          this.logout();
        }     
        console.log("stored token: " + res['access_token']);
      });
    }
  }

  checkToken(){
  }

  getTruckId(): number{
    console.log( localStorage.getItem('Truck_ID') );
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
    console.log("storing token: " + access_token);
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

