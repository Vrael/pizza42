import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-topnav></app-topnav>

    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <app-title></app-title>
          </div>
        </div>

        <router-outlet></router-outlet>
      </div>
    </div>

    <app-footer></app-footer>
  `
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
