import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { AuthService, User } from "@auth0/auth0-angular";
import { Observable, of } from "rxjs";

@Component({
    selector: 'app-auth-buttons',
    template: `
        <div *ngVar="isAuthenticated$ | async as isLogged">
            <div *ngIf="!isLogged; else logged">
                <button mat-button (click)="signup()">Sign Up</button>
                <button mat-button (click)="login()">Log In</button>
            </div>
            
            <ng-template #logged>
                <button *ngVar="user$ | async as user" mat-button [matMenuTriggerFor]="menu" class="user-detail">
                    <div *ngIf="user; else default_icon" class="user-detail">
                        <img class="avatar" src="{{user.picture}}" referrerpolicy="no-referrer"/>
                        <span>{{user.name}}</span>
                    </div>
                    <ng-template #default_icon>
                        <mat-icon>account_circle</mat-icon>
                    </ng-template>
                </button>
                <mat-menu #menu="matMenu">
                    <a mat-menu-item routerLink="/profile">Profile</a>
                    <a mat-menu-item routerLink="/orders">Orders</a>
                    <mat-divider></mat-divider>
                    <button mat-button (click)="logout()">Log out</button>
                </mat-menu>
            </ng-template>
        </div>
    `,
    styles: [`
        .user-detail {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .user-detail > img {
            margin-right: 4px;
        }
        .user-detail > span {
            margin-top: 4px;
        }
        .avatar {
            width: 25px;
            height: 25px;
            border-radius: 50%;
        }
    `]
})
export class AuthButtonsComponent implements OnInit {

    isAuthenticated$: Observable<boolean> = of(false);
    user$: Observable<User | null | undefined> = of();

    constructor(
        @Inject(DOCUMENT) public document: Document,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.isAuthenticated$ = this.authService.isAuthenticated$;
        this.user$ = this.authService.getUser();
    }

    signup() {
        this.authService.loginWithRedirect({ screen_hint: 'signup' });
    }

    login() {
        this.authService.loginWithRedirect();
    }

    logout() {
        this.authService.logout({ 
            returnTo: this.document.location.origin 
        });
    }

}