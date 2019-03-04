import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  accountForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { 
    this.accountForm = this.formBuilder.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
      phone: ['', Validators.required, Validators.pattern('^[2-9]\d{2}-\d{3}-\d{4}$')]
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.accountForm.invalid) {
      return;
    }
    this.success = true;
  }

  ngOnInit() {
  }

}
