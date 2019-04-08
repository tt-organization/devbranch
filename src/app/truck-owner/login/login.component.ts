import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TruckerDataService } from '../../data/trucker-data.service';
import { NavComponent } from '../../nav/nav.component';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/data/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;
  message: String;
  nav: NavComponent;

  constructor(private formBuilder: FormBuilder, 
    private data: JwtService,
    private router: Router) { 
    this.loginForm = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.nav = NavComponent.getInstance();
  }

  ngOnInit() {
  }

  onSubmit(user) {
    this.submitted = true;

    var body = {
      "username": user.username,
      "password": user.password
    };

    this.data.login(body).subscribe(data => {
      this.success = data['Success'];
      this.nav.setTruck( data['Truck_ID'] );
      this.message = data['Message'];

      if (this.success) {
        this.router.navigate([ 'truck/' + this.nav.getTruckId() ]);
      }
    });
  }

  unSubmit() {
    this.submitted = false;
  }
}