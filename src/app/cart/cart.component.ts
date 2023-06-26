import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Imenu } from '../Imenu';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Imenu[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
  }

  formatPrice(price: number): string {
    return "€" + price.toFixed(2);
  }

  formatSubtotal(subtotal: number): string {
    return "€" + subtotal.toFixed(2);
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    for (const item of this.cart) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  }
  

  calculateServiceCharge(): number {
    return this.calculateSubtotal() * 0.1;
  }

  calculateTotal(): number {
    return this.calculateSubtotal() + this.calculateServiceCharge();
  }

  applyDiscount(): boolean {
    return this.calculateTotal() > 40;
  }

  calculateDiscount(): number {
    return this.calculateTotal() * 0.15;
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() - this.calculateDiscount();
  }
}

