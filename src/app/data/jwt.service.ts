import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Truck } from '../truck/truck';

@Injectable({
providedIn: 'root'
})

export class JwtService {
  private currentUserSubject: BehaviorSubject<Truck>;
  public currentUser: Observable<Truck>;

  constructor(private httpClient: HttpClient) {    
    this.currentUserSubject = new BehaviorSubject<Truck>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(user: Object) {
    return this.httpClient.post<{access_token: string}>
      ('/login.php', user).pipe(tap(res => {
        localStorage.setItem('access_token', res.access_token);
        //localStorage.setItem('currentUser', JSON.stringify(res));
        // this.currentUserSubject.next(res);
      }))
  }

  register(truck: Object) {
    return this.httpClient.post<{access_token: string}>
      ('/sendTruck.php', truck).pipe(tap(res => {
        //login here? have to extract user from truck
      }))
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
};

