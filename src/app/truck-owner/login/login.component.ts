import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TruckerDataService } from '../../data/trucker-data.service';
import { NavComponent } from '../../nav/nav.component';
import { ActivatedRoute } from '@angular/router';

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
    private data: TruckerDataService,
    private route: ActivatedRoute) { 
    this.loginForm = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.nav = NavComponent.getInstance();
  }

  ngOnInit() {
  }

  onSubmit(user) {
    var body = {
      "username": user.username,
      "password": user.password
    };

    console.log( "onSubmit: " + body.username + " " + body.password );

    this.data.login(body).subscribe(data => {
      this.success = data['Success'];
      this.nav.setTruck( data['Truck_ID'] );
      this.message = data['Message'];
      console.log( "id: " + data['Truck_ID'] + " success: " + data['Success']);
      console.log( "message: " + this.message );
    });

    if (this.success) {
    }
  }
}
