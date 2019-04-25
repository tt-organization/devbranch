import { JwtService } from './../../data/jwt.service';
import { TruckerDataService } from './../../data/trucker-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Object[];
  name: String;
  id: number;
  currCat: String;
  success: String;
  message: String;
  addItemForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private data: TruckerDataService, private route: ActivatedRoute, public jwt: JwtService) {
    this.route.params.subscribe(params => this.id = params.id);

    this.addItemForm = this.formBuilder.group ({
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
   }

  ngOnInit() {
    var request = {
      Truck_ID: this.id
    };
    this.data.getTruckInfo(this.id).subscribe(data => {
      console.log(this.data);
      this.name = data['Truck'][0].Truck_Name;
      this.menu = data['Menu'];
      this.currCat = this.menu[0]['Category_Desc'];
      console.log(this.currCat);
    })
  }

  changeCat(category) {
    console.log("Category is " + category);
    this.currCat = category;
    console.log("Check changed " + this.currCat);
  }
  removeItem(item) {

    var body = {
      'id': item.Item_ID,
      'name': item.Description
    }
    console.log("Hello");
    console.log(body);
    this.data.removeItem(body).subscribe(data => {
      console.log(this.data);
      this.success = data['Success'];
      this.message = data['Message'];
      console.log(this.success + " " + this.message);
    })
    var index = this.menu.indexOf(item);
    this.menu.splice(index, 1);
  }

  addItems(items) {
    this.submitted = true;

    if(this.addItemForm.invalid) {
      return;
    }
    var body = {
      'truck_ID': this.id,
      'category': items.category,
      'description': items.description,
      'price': items.price
    }
    console.log(body);
    this.data.addItem(body).subscribe(data => {
      console.log(data);
      this.success = data['Success'];
      this.message = data['Message'];

      if(this.success) {
        var o = {Category_Desc: items.category, Description: items.description, Price: items.price, Category_ID: data['Item']['Category_ID']};
        this.menu.push(o);
        this.menu.sort(function(a, b) {
          const IDa = a['Category_ID'];
          const IDb = b['Category_ID'];

          if(IDa > IDb) return 1;
          else return -1;
        });
      }
    });
    this.addItemForm.reset();
  }
}
