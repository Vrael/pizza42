import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { TitleComponent } from './title.component';
import { TopnavComponent } from './topnav.component';
import { MatGridListModule } from '@angular/material/grid-list';

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
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutsModule { }
