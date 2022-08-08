import { Component } from '@angular/core';

@Component({
    selector: 'app-topnav',
    template: `
        <mat-toolbar color="primary">
            <img src="assets/images/logo.png" class="logo" />
            <span>Pizza42</span>
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
        }
    `]
})
export class TopnavComponent {
}
