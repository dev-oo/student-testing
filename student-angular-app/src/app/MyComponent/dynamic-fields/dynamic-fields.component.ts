import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.css']
})
export class DynamicFieldsComponent implements OnInit {

  public addresses: any[] = [{
    id: 1,
    address: '',
    street: '',
    city: '',
    country: ''
  }];
  constructor() {}

  ngOnInit() {}

  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }
}
