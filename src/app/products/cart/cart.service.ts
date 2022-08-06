import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  
  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getTotal(): number {
    return this.items.map(i => i.price).reduce((a, b) => a + b, 0); 
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
}
