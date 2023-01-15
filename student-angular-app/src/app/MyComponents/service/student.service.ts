import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { STUDENTS_LIST_URL, STUDENT_BY_ID_URL, } from '../constants/urls';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getAllStudents(){
    return this.http.get(STUDENTS_LIST_URL);
  }
  getStudentById(id:number){
    return this.http.get(STUDENT_BY_ID_URL + id);
  }
  saveStudent(student:Student){
    return null;
  }
  updateStudentById(id:number,student:Student){
    return null;
  }
}
