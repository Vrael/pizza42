import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { AuthService, User } from "@auth0/auth0-angular";
import { Observable, of } from "rxjs";

@Component({
    selector: 'app-auth-buttons',
    template: `
        <div *ngVar="isAuthenticated$ | async as isLogged">
            <app-login-button *ngIf="!isLogged"></app-login-button>
            <div *ngIf="isLogged">
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
                    <button mat-menu-item>History orders</button>
                    <mat-divider></mat-divider>
                    <app-logout-button></app-logout-button>
                </mat-menu>
            </div>
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
export class AuthButtons implements OnInit {

    isAuthenticated$: Observable<boolean> = of(false);
    user$: Observable<User | null | undefined> = of();

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.isAuthenticated$ = this.authService.isAuthenticated$;
        this.user$ = this.authService.getUser();
    }

}