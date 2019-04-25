import { Component, OnInit, Optional } from '@angular/core';
import { JwtService } from '../data/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  constructor( private auth: JwtService,
               private router: Router ) { }
               
  ngOnInit() { }

  loggedIn() {
    return this.auth.loggedIn();
  }

  getTruckId() {
    return this.auth.getTruckId();
  }

  signOut() {
    this.auth.logout();
    this.router.navigate(['home']);
  }
}