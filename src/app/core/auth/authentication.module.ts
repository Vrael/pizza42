import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard, AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './user-profile.component';
import { AuthButtonsComponent } from './auth-buttons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from '../../../environments/environment';
import { UserMetadataComponent } from './user-metadata.component';
import { UserProfilePage } from './user-profile.page';
import { AuthRoutingModule } from './auth-routering.module';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfilePage,
    AuthButtonsComponent,
    UserMetadataComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      responseType: 'token id_token',
      redirectUri: environment.auth.redirectUrl,
      audience: environment.auth.audience,
      scope: 'openid profile read:current_user update:current_user_metadata',
      httpInterceptor: {
        allowedList: [{
            uri: `${environment.auth.audience}*`,
            tokenOptions: {
              audience: environment.auth.audience,
              scope: 'read:current_user update:current_user_metadata'
            }
          }
        ]
      }
    }),
  ],
  exports: [
    UserProfileComponent,
    AuthButtonsComponent,
    UserMetadataComponent,
    AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    AuthGuard,
  ],
})
export class AuthenticationModule { }
