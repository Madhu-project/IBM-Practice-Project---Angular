import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  username: string = '';
  password: any = '';

  constructor() {
    sessionStorage.clear();
  }

  ngOnInit(): void {
    this.submitlogin();
  }
  submitlogin() {
    console.log('submit button clicked from login page');
    console.log(this.username);
    console.log(this.password);

    return true;
  }

  set_session_data() {
    sessionStorage.setItem('userid', this.username);
  }

  get_session_data() {
    console.log(sessionStorage.getItem('userid'));
  }
  delete_session_data() {
    sessionStorage.clear();
  }
}
