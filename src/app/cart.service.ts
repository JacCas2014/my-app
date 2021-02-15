import { Injectable } from '@angular/core';

// service generated at CLI using: ng generate service cart
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];

  addToCart = (product: any) => {
    this.items.push(product);
  }

  getItems = () => this.items;

  clearCart = () => {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
