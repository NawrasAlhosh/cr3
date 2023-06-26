import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { menu } from '../menu';
import { Imenu } from '../Imenu';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Imenu[] = menu;
  selectedItem: Imenu | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const index = +params['indexFormRouting'];
      this.selectedItem = menu[index];
    });
  }

  addToCart(item: Imenu): void {
    this.cartService.addToCart(item);
    alert('Item has been added to your cart.');
  }
}


