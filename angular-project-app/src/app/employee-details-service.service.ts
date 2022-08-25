import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeDetails } from './Employeedetails';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsServiceService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/Employees_db';
  getAllEmployees_db() {
    console.log('inside get all employees from db');

    return this.http.get<EmployeeDetails[]>(this.url);
  }
  save_employeeData(Employeedetails: EmployeeDetails) {
    console.log('inside of save_employeedata fun');

    console.log(Employeedetails);
    console.log('data is displayed above');

    console.log(Employeedetails.avatar);
    var demo = Employeedetails.avatar?.slice(12);
    var demo1 = new String(demo);
    var fixed1 = new String('./assets/images/');
    // demo = demo?.concat(fixed1.toString());
    demo = fixed1.concat(demo1.toString());
    console.log(demo);
    Employeedetails.avatar = demo;
    console.log('modified employee details avatar');
    console.log(Employeedetails.avatar);
    return this.http.post<EmployeeDetails>(this.url, Employeedetails);
  }
}
