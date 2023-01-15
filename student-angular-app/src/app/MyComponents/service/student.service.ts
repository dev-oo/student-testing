import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls, allStudentsURL } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private url:Urls) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getAllStudents(){
    return this.http.get(allStudentsURL);
  }
}
