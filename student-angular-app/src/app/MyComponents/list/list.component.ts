import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private studentService:StudentService ) {
  }

  students:any;
  apiResponse:any;

  ngOnInit(): void {
    this.getAllStudents()
  }

  lists:any = [];

  addStudentsInList():void{
    this.students = this.apiResponse.result ? this.apiResponse.result : [];
    console.log(this.students);
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe({
      next: (res) => { this.apiResponse = res; },
      complete: () => {this.addStudentsInList();},
      error: (err) => {console.log('something went wrong');}
    });
  }
}
