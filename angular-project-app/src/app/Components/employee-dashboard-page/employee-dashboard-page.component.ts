import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsServiceService } from 'src/app/employee-details-service.service';
import { ApilibraryService } from '../../apilibrary.service';
import { EmployeeDetails } from '../../Employeedetails';

@Component({
  selector: 'app-employee-dashboard-page',
  templateUrl: './employee-dashboard-page.component.html',
  styleUrls: ['./employee-dashboard-page.component.css'],
})
export class EmployeeDashboardPageComponent implements OnInit {
  employeedetailsapi_obj: EmployeeDetails[] = [];
  allEmployeeData: EmployeeDetails[] = [];
  user_in_dasgboard: boolean = false;

  constructor(
    private emp_detail_objapi: ApilibraryService,
    private emps: EmployeeDetailsServiceService
  ) {
    this.user_in_dasgboard = true;
    this.apiget();
    this.get();
  }
  ngOnInit(): void {}
  get_session_data() {
    return sessionStorage.getItem('userid');
  }
  apiget() {
    this.emp_detail_objapi.getEmployeeDetails().subscribe((data) => {
      this.employeedetailsapi_obj = data;
      console.log(this.employeedetailsapi_obj);
    });
  }
  get() {
    this.emps.getAllEmployees_db().subscribe((res) => {
      this.allEmployeeData = res;
      console.log(this.allEmployeeData);
    });
  }
}
