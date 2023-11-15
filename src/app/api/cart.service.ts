import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetProducts } from '../model/product.interface';
import { Products } from '../model/products.interface';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedOptionsSubject = new BehaviorSubject<any[]>([]);
  selectedOptions$ = this.selectedOptionsSubject.asObservable();

  constructor() {}

  addToCart(options: any[]): void {
    const currentOptions = this.selectedOptionsSubject.value;
    this.selectedOptionsSubject.next([...currentOptions, ...options]);
  }

  clearCart(): void {
    this.selectedOptionsSubject.next([]);
  }
}








