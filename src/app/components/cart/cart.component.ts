import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemName: string = '';
  sopas: string = '';
  sandwich: string = '';
  ensalada: string = '';
  itemDescription: string = '';



  public carrito: any;

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get('http://localhost:3000/items  ').subscribe((data: any) => {
      this.carrito = data;
    });
  }

  irPagina(titulo: string): void {
    console.log(titulo);
    this.route.navigate(['cart']);
  }

  onSubmit() {
    const newItem = {
      name: this.itemName,
      sopas: this.sopas,
      sandwich: this.sandwich,
      ensalada: this.ensalada,
      description: this.itemDescription,
    };

    this.http.post('http://localhost:3000/items', newItem).subscribe(response => {
      console.log('Item guardado:', response);
      // Limpia el formulario después de guardar
      this.itemName = '';
      this.itemDescription = '';

      // Recargar la lista de productos después de agregar uno nuevo
      this.getProducts();
    });
  }

  // Método para eliminar un elemento
  deleteItem(id: number) {
    this.http.delete(`http://localhost:3000/items/${id}`)
      .subscribe(response => {
        console.log('Item eliminado:', response);
        // Recargar la lista de productos después de eliminar uno
        this.getProducts();
      });
  }
}

