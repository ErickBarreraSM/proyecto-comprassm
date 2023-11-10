import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private carrito: any[] = [];

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
  }

  obtenerCarrito() {
    return this.carrito;
  }

  limpiarCarrito() {
    this.carrito = [];
  }

  
}
