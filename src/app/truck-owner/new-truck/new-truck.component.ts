import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TruckerDataService } from '../../data/trucker-data.service';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/data/jwt.service';

@Component({
  selector: 'app-new-truck',
  templateUrl: './new-truck.component.html',
  styleUrls: ['./new-truck.component.css']
})
export class NewTruckComponent implements OnInit {

  newTruckForm: FormGroup;
  submitted = false;
  success: Boolean;
  result: Object;
  string: String = '';
  id: Number;

  constructor(private formBuilder: FormBuilder, 
    private data: TruckerDataService, 
    private router: Router, 
    private jwt: JwtService) {
    this.newTruckForm = this.formBuilder.group({
      truckName: ['', Validators.required],
      sundayOpen: ['', Validators.required],
      sundayClose: ['', [Validators.required, Validators.maxLength(2)]],
      mondayOpen: ['', [Validators.required, Validators.maxLength(2)]],
      mondayClose: ['', [Validators.required, Validators.maxLength(2)]],
      tuesdayOpen: ['', [Validators.required, Validators.maxLength(2)]],
      tuesdayClose: ['', [Validators.required, Validators.maxLength(2)]],
      wednesdayOpen: ['', [Validators.required, Validators.maxLength(2)]],
      wednesdayClose: ['', [Validators.required, Validators.maxLength(2)]],
      thursdayOpen: ['', [Validators.required, Validators.maxLength(2)]],
      thursdayClose: ['', [Validators.required, Validators.maxLength(2)]],
      fridayOpen: ['', [Validators.required, Validators.maxLength(2)]],
      fridayClose: ['', [Validators.required, Validators.maxLength(2)]],
      saturdayOpen: ['', [Validators.required, Validators.maxLength(2)]],
      saturdayClose: ['', [Validators.required, Validators.maxLength(2)]]
    });
  }

  createTruck(truck) {
    this.submitted = true;

    if (this.newTruckForm.invalid) {
      return;
    }
    //console.log(truck);
    var body = {
      "truckName": truck.truckName,
      "sundayOpen": truck.sundayOpen,
      "sundayClose": truck.sundayClose,
      "mondayOpen": truck.mondayOpen,
      "mondayClose": truck.mondayClose,
      "tuesdayOpen": truck.tuesdayOpen,
      "tuesdayClose": truck.tuesdayClose,
      "wednesdayOpen": truck.wednesdayOpen,
      "wednesdayClose": truck.wednesdayClose,
      "thursdayOpen": truck.thursdayOpen,
      "thursdayClose": truck.thursdayClose,
      "fridayOpen": truck.fridayOpen,
      "fridayClose": truck.fridayClose,
      "saturdayOpen": truck.saturdayOpen,
      "saturdayClose": truck.saturdayClose,
      "userID": localStorage.getItem('userID')
    }
    console.log(body);
    this.data.sendTruckData(body).subscribe(data => {
      console.log(data);
      this.string = data['Message'];
      if (data['Success']) {
        var id = data['Truck_ID'];
        this.jwt.generateToken(id);
        localStorage.setItem('Truck_ID', id.toString() );
        var truck = 'truck/'.concat(id);
        this.router.navigate([truck])
      }
    });

    this.success = true;
  }

  ngOnInit() { }


}
