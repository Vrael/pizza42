import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { UserProfilePage } from './user-profile.page';

const routes: Routes = [
    { path: 'profile', component: UserProfilePage, canActivate: [AuthGuard], data: { title: 'User profile!' } },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AuthRoutingModule { }
