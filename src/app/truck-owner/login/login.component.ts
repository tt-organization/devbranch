import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TruckerDataService } from '../../data/trucker-data.service';
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
  message: string;
  truck_id: number;

  constructor(private formBuilder: FormBuilder,
    private data: TruckerDataService,
    private jwt: JwtService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
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
      this.truck_id = data['Truck_ID'];
      this.message = data['Message'];

      if (this.success) this.redirect(this.truck_id);
    });
  }

  public redirect(id) {
    this.jwt.generateToken(id);
    localStorage.setItem('Truck_ID', id.toString() );
    this.router.navigate(['truck/' + this.jwt.getTruckId()]);
  }

  unSubmit() {
    this.submitted = false;
  }
}