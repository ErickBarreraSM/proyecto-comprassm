import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProductsService } from 'src/app/api/products.service';
import { CombosService } from 'src/app/api/combos.service';
import { CartService } from 'src/app/api/cart.service';
import { ServicesService } from 'src/app/services/services.service';

import { Contents } from 'src/app/model/contents.interface';
import { GetProducts } from 'src/app/model/product.interface';
import { ProductStock } from 'src/app/model/stock.interface';
import { Products } from 'src/app/model/products.interface';
import { GetCombos } from 'src/app/model/combos.interface';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  checkboxState: boolean[][] = [];
  idTienda!: string;

  products: GetProducts[] = []; 
  selectedProducts: any[] = [];

  stock: ProductStock[] = [];
  body: Body  [] = []; 

  constructor(private cartService: CartService,private dataService: ProductsService , private carrito: ServicesService,  private router: Router) { }
 
  public productData: any;
  public productDataImg: any; 
  public Presentations: any;
  public Price: any;
  public productPrice: any;

  public presentationname:any;


 

  
  

 

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
      this.productData = data.body.contents.name_es;

      this.productDataImg = data.body.images;
      this.Presentations = data.body.presentations;
      this.presentationname = this.Presentations[0].name;
  
      this.Price = data.body.prices;
      this.productPrice = this.Price[0].price;
  
      // Inicializa this.checkboxState según la cantidad de presentaciones y productos
      this.checkboxState = Array.from({ length: this.Presentations.length }, () =>
      Array(this.productData.length).fill(false)
    );

    

    this.products = data; 
    console.log('Datos de productos obtenidos:', this.products);
  });
}
  
  


  
guardarYMostrar(): void {



  // Filtra las opciones seleccionadas
  const selectedOptions: any[] = [];
  const productName = this.productData;
  
 
  console.log('Datos de los Checkboxes seleccionados:');
  console.log(selectedOptions);
  this.router.navigate(['/cart']);// Definir productName fuera del bucle interno

  // Agregar el productName solo si hay opciones seleccionadas
  if (this.checkboxState.some(row => row.some(checked => checked))) {
    selectedOptions.push({
      optionName: 'Opciones ', // Puedes ajustar el nombre según tus necesidades
      productName: productName
    });
  }
  for (let j = 0; j < this.checkboxState.length; j++) {
    const selectedProduct = this.Presentations[j].name;

    for (let i = 0; i < this.checkboxState[j].length; i++) {
      if (this.checkboxState[j][i]) {
        // Agregar cada opción seleccionada al array
        selectedOptions.push({
          productName: selectedProduct,
          optionName: this.Presentations[j].presentation[i].name
        });
      }
    }
  }

  // Guarda las opciones seleccionadas en el carrito
 

  // Muestra las opciones seleccionadas, los nombres de los productos y otros datos relevantes
  console.log('Datos de los Checkboxes seleccionados:');
  console.log(selectedOptions);

  this.cartService.addToCart(selectedOptions);

 // this.router.navigate(['/cart']);
  // Resto del código...
}




  
  


 

  
  
}
 



 
  



 


