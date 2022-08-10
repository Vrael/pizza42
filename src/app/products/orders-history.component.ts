import { Observable, of } from 'rxjs';
import { UserMetadataService } from './../core/auth/user-metadata.service';
import { Component, OnInit } from "@angular/core";
import { OrdersService } from './orders.service';
import { Product } from './product.model';

@Component({
    selector: 'app-orders-history',
    template: `
        <div fxLayout="row wrap" fxLayoutGap="16px grid">
            <div fxFlex *ngFor="let order of orders$ | async">
                <mat-card class="order-card">
                    <mat-card-header>
                        <mat-card-title>Order: #{{order?.id}}</mat-card-title>
                        <mat-card-subtitle>{{ order?.created | date }}</mat-card-subtitle>
                    </mat-card-header>
                    <mat-card-content>
                        <ul>
                            <li *ngFor="let product of order.products">
                                <span>{{ product.name }}</span>
                            </li>
                        </ul>
                    </mat-card-content>
                    <mat-card-footer>
                        <span class="total">Total: {{ total(order.products) | currency }} </span>
                    </mat-card-footer>
                </mat-card>
            </div>
        </div>
    `,
    styles: [`
        .order-card {
            width: 200px;
        }
        mat-card-footer {
            padding: 14px;
        }
    `]
})
export class OrdersHistoryComponent implements OnInit {

    orders$: Observable<any|null|undefined> = of();

    constructor(private orderService: OrdersService) {}

    ngOnInit(): void {
        this.orders$ = this.orderService.list();
    }

    total(products: Product[]): number {
        return products.map(i => i.price).reduce((a, b) => a + b, 0);     }

}