import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from './Employeedetails';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApilibraryService {
  //HttpClient
  constructor(private http: HttpClient) {}
  //Use Rxjx to transform data observables

  getEmployeeDetails(): Observable<EmployeeDetails[]> {
    // return this.http.get<EmployeeDetails[]>(
    //   'https://reqres.in/api/users?page=2'
    // );

    return this.http
      .get('https://reqres.in/api/users?page=2')
      .pipe(map((res: any) => res['data']));
  }
}
