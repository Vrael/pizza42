import { Component, OnInit } from "@angular/core";
import { Observable, of } from 'rxjs';
import { CartService } from "./cart/cart.service";
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-list',
    template: `
        <div fxLayout="row wrap" fxLayoutGap="16px grid">
            <div fxFlex *ngFor="let product of products$ | async">
                <mat-card class="product-card">
                    <img mat-card-image src="{{ product.image }}" alt="{{ product.name }} product">
                    <mat-card-content>
                        <h3>{{ product.name }}: {{ product.price }}$</h3>
                    </mat-card-content>
                    <mat-card-actions>
                        <button mat-button (click)="addToCart(product)">Add</button>
                    </mat-card-actions>
                </mat-card>
            </div>
        </div>
    `,
    styles: [`
        .product-card {
            width: 200px;
        }
    `]
})
export class ProductListComponent implements OnInit {

    public products$: Observable<Product[]> = of([]);

    constructor(
        private productService: ProductService,
        private cartService: CartService
    ) {
    }

    ngOnInit(): void {
        this.products$ = this.productService.list();
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
      }

} 