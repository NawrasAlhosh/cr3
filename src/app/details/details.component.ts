import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { menu } from '../menu';
import { Imenu } from '../Imenu';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})



export class DetailsComponent implements OnInit {
  menu: Imenu ={}as Imenu;

  constructor(private route: ActivatedRoute,private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      console.log('ID:', id);
      this.menu = menu[id];
      console.log(this.menu)
    });
  }
    addToCart(){
      alert("added to the card")
       this.cartService.addToCart(this.menu)

     }

  }





