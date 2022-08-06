import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthProfile, AuthService } from '@app/auth/auth.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-topbar',
  template: `
    <div class="navbar-custom">
    </div>
  `,
  styles: [`
      .btn-brand-color { background-color: #f7941eff; }
      .text-dark { color: #435966; }
      .btn-brand-color-outline { border: 1px solid #f7941eff; }
  `]
})
export class TopbarComponent implements OnInit {

  // openMobileMenu: boolean;
  // user$: Promise<AuthProfile>;
  accountEndpoint = `${environment.baseUrl}/${environment.endpoints.account.path}`;
  // shopEndpoint = `${environment.baseUrl}/${environment.endpoints.shop.path}`;

  constructor(
    public router: Router,
    // public authService: AuthService
  ) { }

  ngOnInit() {
    // this.openMobileMenu = false;
    // this.user$ = this.authService.loadUserProfile();
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    // this.settingsButtonClicked.emit();
  }

  /**
   * Logout the user
   */
  logout() {
    // this.authService.logout().then(_ => this.router.navigate(['/auth/login']));
  }

}
