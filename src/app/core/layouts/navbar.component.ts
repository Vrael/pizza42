import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="topbar-menu">
      <div class="container-fluid in">
        <div id="navigation" class="active" (click)="isMenuCollapsed = true">
          <ul class="navigation-menu in">
            <li class="has-submenu">
              <a [routerLink]="['/dashboards/overview']" class="side-nav-link-ref">
                <i class="mdi mdi-view-dashboard"></i> <span>Dashboard</span>
              </a>
            </li>

            <li class="has-submenu">
              <a [routerLink]="['/trainings']" class="side-nav-link-ref">
                <i class="mdi mdi-clipboard-text-outline"></i> <span>Practice plans</span>
              </a>
            </li>

            <li class="has-submenu">
              <a [routerLink]="['/drills/']" class="side-nav-link-ref">
                <i class="mdi mdi-dumbbell"></i> <span>Drills</span></a>
            </li>

            <li class="has-submenu">
              <a [routerLink]="['/teams/']" class="side-nav-link-ref">
                <i class="mdi mdi-account-group"></i> <span>Teams</span></a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  `
})
export class NavbarComponent {

  @Input() isMenuCollapsed = true;

}
