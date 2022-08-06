import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>Order</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <div class="cart-item" *ngFor="let item of items">
                <span>{{ item.name }} {{ item.price | currency }}</span>
            </div>
            <hr/>
            <div>
                <span>Total: {{ total() | currency }}</span>
            </div>
        </mat-card-content>
        <mat-card-actions>
            <button mat-button (click)="checkout()">Checkout</button>
            <button mat-button (click)="clear()">Clear</button>
        </mat-card-actions>
    </mat-card> 
  `
})
export class CartComponent {

    items = this.cartService.getItems();

    constructor(private cartService: CartService) {
    }

   clear() {
       this.cartService.clearCart();
       this.items = this.cartService.getItems();
   }

   total(): number {
       return this.cartService.getTotal();
   }

   checkout() {

   }

}