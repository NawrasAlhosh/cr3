import { Injectable } from '@angular/core';
import { Imenu } from './Imenu';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Imenu[] = [];

  constructor() {}

  addToCart(item: Imenu): void {
    item.quantity = 1; 
    item.subtotal = item.price; 
    this.cartItems.push(item);
  }

  getCartItems(): Imenu[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
