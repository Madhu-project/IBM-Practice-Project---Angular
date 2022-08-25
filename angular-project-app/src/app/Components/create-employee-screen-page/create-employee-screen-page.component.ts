import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailsServiceService } from '../../employee-details-service.service';
import { EmployeeDetails } from '../../Employeedetails';
@Component({
  selector: 'app-create-employee-screen-page',
  templateUrl: './create-employee-screen-page.component.html',
  styleUrls: ['./create-employee-screen-page.component.css'],
})
export class CreateEmployeeScreenPageComponent implements OnInit {
  title = 'my_reactiveforms';
  create_employer_Form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
      this.noSpaceAllowed,
    ]),
    lastName: new FormControl('', [Validators.required, this.noSpaceAllowed]),
    EmployeeID: new FormControl('', [Validators.required]),
    EmailID: new FormControl('', [Validators.required, Validators.email]),
    avatar: new FormControl(''),
  });
  get firstName() {
    return this.create_employer_Form.get('firstName');
  }
  get lastName() {
    return this.create_employer_Form.get('lastName');
  }
  get EmployeeID() {
    return this.create_employer_Form.get('EmployeeID');
  }
  get EmailID() {
    return this.create_employer_Form.get('EmailID');
  }

  onFileSelected(event: any) {
    console.log(event);
  }
  dataBody: EmployeeDetails = {
    EmployeeID: '',
    firstName: '',
    lastName: '',
    EmailID: '',
    id: 0,
    avatar: '',
    email: undefined,
    first_name: '',
    last_name: '',
  };

  allEmployeeData: EmployeeDetails[] = [];
  constructor(private emps: EmployeeDetailsServiceService) {
    this.get();
  }
  ngOnInit(): void {}
  createemployee() {
    console.log('inside create employee fn');
    console.log(this.create_employer_Form.value);
    console.log('create employee fn data dispalyed above');

    this.emps.save_employeeData(this.dataBody).subscribe({
      next: (res) => {
        console.log('inside save 1');
        console.log(res);
      },
    });
  }
  get() {
    this.emps.getAllEmployees_db().subscribe((res) => {
      console.log('inside get');
      this.allEmployeeData = res;
      console.log(this.allEmployeeData);
    });
  }
  reloadCurrentPage() {
    window.location.reload();
  }
  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return {
        noSpaceAllowed: true,
      };
    }
    return null;
  }
}
