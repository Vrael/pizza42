import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer.component';
import { TitleComponent } from './title.component';
import { TopnavComponent } from './topnav.component';
import { AuthenticationModule } from '../auth/authentication.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
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
