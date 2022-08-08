import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: '<button mat-button (click)="login()">Log in</button>'
})
export class LoginButtonComponent {

  constructor(private auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect();
  }
}