import { Component } from '@angular/core';

@Component({
    selector: 'app-topnav',
    template: `
        <mat-toolbar color="primary">
            <mat-toolbar-row>
                <img routerLink="/" src="assets/images/logo.png" class="logo" />
                <span routerLink="/" class="brand">Pizza42</span>
                <hr width="0.5" size="20">
                <button mat-button>Stores</button>
                <button mat-button>Order status</button>
                <span class="spacer"></span>
                <app-auth-buttons></app-auth-buttons>
            </mat-toolbar-row>
            <mat-toolbar-row class="white mat-elevation-z2">
                <button mat-button><mat-icon>local_pizza</mat-icon>Pizzas</button>
                <button mat-button><mat-icon> fastfood</mat-icon>Menus</button>
                <button mat-button><mat-icon>star</mat-icon>Special</button>
                <button mat-button><mat-icon>local_florist</mat-icon>Vegan</button>
                <button mat-button><mat-icon>local_drink</mat-icon>Drinks & Desserts</button>
            </mat-toolbar-row>
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
        .white {
            color: black;
            background-color: white;
        }
        hr {
            margin: 0 6px;
        }
    `]
})
export class TopnavComponent {
}
