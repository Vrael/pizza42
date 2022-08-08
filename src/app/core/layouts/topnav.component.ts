import { Component } from '@angular/core';

@Component({
    selector: 'app-topnav',
    template: `
        <mat-toolbar color="primary">
            <img routerLink="/" src="assets/images/logo.png" class="logo" />
            <span routerLink="/" class="brand">Pizza42</span>
            <span class="spacer"></span>
            <app-auth-buttons></app-auth-buttons>
        </mat-toolbar>
    `,
    styles: [`
        .spacer {
            flex: 1 1 auto;
        }
        .logo {
            width: 50px;
            height: 50px;
            margin-right: 4px;
            cursor: pointer;
        }
        .brand {
            cursor: pointer;
        }
    `]
})
export class TopnavComponent {
}
