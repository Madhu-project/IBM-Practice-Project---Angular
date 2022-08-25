import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logoutpage',
  templateUrl: './logoutpage.component.html',
  styleUrls: ['./logoutpage.component.css'],
})
export class LogoutpageComponent implements OnInit {
  constructor() {
    sessionStorage.clear();
  }

  ngOnInit(): void {}
}
