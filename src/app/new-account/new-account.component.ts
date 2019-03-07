import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TruckerDataService } from '../trucker-data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  accountForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private data: TruckerDataService) { 
    this.accountForm = this.formBuilder.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', Validators.required]
    });
  }

  onClick(user) {
    this.submitted = true;
    console.log("Entered click");
    
    if (this.accountForm.invalid) {
      return;
    }
    console.log(user);
    var body= {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "email": user.email,
      "password": user.password,
      "phone": user.phone
      }
      this.data.sendUserData(body);
    this.success = true;
  }

  ngOnInit() {
  }

}
