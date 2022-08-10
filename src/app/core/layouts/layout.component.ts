import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-topnav></app-topnav>

    <div class="content" fxLayout="row wrap">
      <div fxFlex> 
        <app-title></app-title>
        <router-outlet></router-outlet>
      </div>
    </div>
    
    <app-footer></app-footer>
  `,
  styles: [`
    .content {
      padding: 20px;
      background-color: #f4f4f4
    }
  `]
})
export class LayoutComponent implements OnInit, AfterViewInit {

  showMobileMenu = false;
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.body.classList.remove('authentication-bg');
  }

  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
  }

  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
