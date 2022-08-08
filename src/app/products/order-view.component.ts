import { Component } from "@angular/core";

@Component({
    selector: 'app-order-view',
    template: `
    <mat-card> 
        <h2>Order: {{}}</h2>    
        <mat-card-content>
            <div *ngIf="isEmpty()">
                <p>Hurry up that pizzas will get cold!</p>
            </div>
            <div class="cart-item" *ngFor="let item of items">
                <span>{{ item.name }} {{ item.price | currency }}</span>
            </div>
            <hr/>
            <div>
                <span *ngIf="!isEmpty()">Total: {{ total() | currency }}</span>
            </div>
        </mat-card-content>
    </mat-card> 
    `
})
export class OrderViewComponent {

}