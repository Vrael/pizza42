import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { TitleComponent } from './title.component';
import { TopnavComponent } from './topnav.component';
import { AuthenticationModule } from '../auth/authentication.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    TopbarComponent,
    NavbarComponent,
    FooterComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule,
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutsModule { }
