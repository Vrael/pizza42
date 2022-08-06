import { Component } from '@angular/core';

@Component({
    selector: 'app-topnav',
    template: `
        <mat-toolbar>
            <span>Product42</span>
        </mat-toolbar>
        <header id="topnav">
        <!--
            <app-topbar (menuCollapsed)="isMenuCollapsed = $event"></app-topbar>
            <app-navbar [isMenuCollapsed]="isMenuCollapsed"></app-navbar>
        -->    
        </header>`,
    styles: [`
        :host { overflow: auto; }
    `]
})
export class TopnavComponent {
}
