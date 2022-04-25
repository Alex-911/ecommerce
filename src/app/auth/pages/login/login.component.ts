import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    Auth.currentUserCredentials().then((data) => {
      console.log('data', data);

      if (data) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }
}
