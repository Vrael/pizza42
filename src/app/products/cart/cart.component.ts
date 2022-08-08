import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';
import { Order } from '../order.model';
import { OrdersService } from '../orders.service';
import { Product } from '../product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <mat-card> 
        <h2>Your order</h2>
        
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
        <mat-card-actions *ngIf="!isEmpty()">
            <button mat-button (click)="checkout()">Checkout</button>
            <button mat-button (click)="clear()">Clear</button>
        </mat-card-actions>
    </mat-card> 

    <ng-template #emptyCartTemplate>
        <h1 mat-dialog-title>Empty cart</h1>
        <div mat-dialog-content>
            Your cart is empty! 
            Add several pizzas before to do the checkout
        </div>
        <div mat-dialog-actions>
            <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
        </div>
    </ng-template>
  `
})
export class CartComponent {

    @ViewChild('emptyCartTemplate', { read: TemplateRef })
    emptyCartTemplate!:TemplateRef<any>;

    items = this.cartService.getItems();

    constructor(
        private cartService: CartService,
        private orderService: OrdersService,
        private authService: AuthService,
        private dialog: MatDialog,
        private router: Router
        ) {
    }

    isEmpty(): boolean {
        let items = this.cartService.getItems();
        return items == undefined || items.length < 1;
    }

    clear() {
        this.cartService.clearCart();
        this.items = this.cartService.getItems();
    }

    total(): number {
        return this.cartService.getTotal();
    }

   async checkout() {
        let products: Product[] = this.cartService.getItems();
        if(!products || products.length < 1) {
            this.dialog.open(this.emptyCartTemplate)
            return;
        }
        let logged = await firstValueFrom(this.authService.isAuthenticated$);
        if (!logged) {
            await firstValueFrom(this.authService.loginWithPopup());
        }
        const user = await firstValueFrom(this.authService.getUser());        
        if (!user?.email_verified) {
            alert("Sorry you cannot place an order until you verify your email.")
        }
        let order: Order = new Order();
        order.products = products;
        this.orderService.create(order)
            .subscribe(order => {
                this.clear();
                this.router.navigate(['/orders'])
            });
   }
}