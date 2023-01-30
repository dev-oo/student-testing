import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-map-test',
  templateUrl: './header-map-test.component.html',
  styleUrls: ['./header-map-test.component.css']
})
export class HeaderMapTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headersArray: any[] = [
    {
      headerName: '',
      headerValue: ''
    }
  ];


  addHeader(){
    this.headersArray.push({
      headerName: '',
      headerValue: ''
    })
  }

  removeHeader(index:number){
    this.headersArray.splice(index, 1);

  }

  logHeader(){
    console.log(this.headersArray);
  }


}
