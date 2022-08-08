import { RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './auth/authentication.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule,
    LayoutsModule
  ],
  exports: [
    LayoutsModule
  ]
})
export class CoreModule { }
