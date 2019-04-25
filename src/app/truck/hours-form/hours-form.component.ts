import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TruckerDataService } from 'src/app/data/trucker-data.service';

@Component({
  selector: 'app-hours-form',
  templateUrl: './hours-form.component.html',
  styleUrls: ['./hours-form.component.css']
})
export class HoursFormComponent implements OnInit {

  private _id: number;
  private _hours: Object[];
  changeHours: FormGroup;

  constructor(private builder: FormBuilder,
    private data: TruckerDataService) {
    this.changeHours = this.builder.group({
      SundayOpen: [''],
      SundayClose: [''],
      MondayOpen: [''],
      MondayClose: [''],
      TuesdayOpen: [''],
      TuesdayClose: [''],
      WednesdayOpen: [''],
      WednesdayClose: [''],
      ThursdayOpen: [''],
      ThursdayClose: [''],
      FridayOpen: [''],
      FridayClose: [''],
      SaturdayOpen: [''],
      SaturdayClose: ['']
    })
  }

  ngOnInit() {
  }

  @Input()
  set id(id: number) {
    this._id = (id);
  }

  @Input()
  set hours(hours: Object[]) {
    this._hours = (hours);
  }

  get id() {
    return this._id;
  }

  get hours() {
    return this._hours;
  }

  updateHours(newHours: Object) {
    newHours['Truck_ID'] = this.id;
    console.log(newHours);
    if (confirm('Would you like to update your opening hours?')) {
      this.data.updateTruckHours(newHours).subscribe(res => {
        console.log(res);
      });
    }
  }
}
