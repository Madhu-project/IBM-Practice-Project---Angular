import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  Isuserloggedin() {
    console.log(
      '---------------------------inside auth service: ' +
        sessionStorage.getItem('userid')
    );
    console.log('---------------');
    return sessionStorage.getItem('userid');
  }
}
