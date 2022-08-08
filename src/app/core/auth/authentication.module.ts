import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './login-button.component';
import { LogoutButtonComponent } from './logout-button.component';
import { UserProfileComponent } from './user-profile.component';
import { AuthButtons } from './auth-buttons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [
    LoginButtonComponent,
    LogoutButtonComponent,
    UserProfileComponent,
    AuthButtons
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      responseType: 'token id_token',
      redirectUri: environment.auth.redirectUrl,
      scope: 'openid profile'
    }),
  ],
  exports: [
    LoginButtonComponent,
    LogoutButtonComponent,
    UserProfileComponent,
    AuthButtons
  ]
})
export class AuthenticationModule { }
