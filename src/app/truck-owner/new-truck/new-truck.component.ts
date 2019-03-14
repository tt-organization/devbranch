import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TruckerDataService } from '../../data/trucker-data.service';

@Component({
  selector: 'app-new-truck',
  templateUrl: './new-truck.component.html',
  styleUrls: ['./new-truck.component.css']
})
export class NewTruckComponent implements OnInit {

  newTruckForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private data: TruckerDataService) {
    this.newTruckForm = this.formBuilder.group ({
      truckName: ['', Validators.required],
      city: ['', Validators.required],
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

     if(this.newTruckForm.invalid) {
       return;
     }
     console.log(truck);
     var body = {
       "truckName": truck.truckName,
       "city": truck.city,
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
     }
     this.data.sendTruckData(body);
     this.success = true;
   }

  ngOnInit() { }


}
