import { Component, OnInit } from '@angular/core';
import { AuthService, IdToken, User } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  template: `
    <h2>User data</h2>
    <ul *ngIf="user$ | async as user">
      <li>Name:   {{ user?.name }}</li>
      <li>Email:  {{ user?.email }}</li>
      <li>Verify: {{ user?.email_verified }}</li>
    </ul>
    
    <h2>ID Token Claims</h2>
    <ul *ngIf="idTokenClaims$ | async as idTokenClaims">
      <li>{{ idTokenClaims | json }}</li>
    </ul>
    `

})
export class UserProfileComponent implements OnInit {

  user$: Observable<User|undefined|null> = of();
  idTokenClaims$: Observable<IdToken|undefined|null> = of();

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.idTokenClaims$ = this.authService.idTokenClaims$;
  }

  

}