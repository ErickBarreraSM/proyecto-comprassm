import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/api/products.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { CombosService } from 'src/app/api/combos.service';
import { Contents } from 'src/app/model/contents.interface';
import { GetProducts } from 'src/app/model/product.interface';
import { ProductStock } from 'src/app/model/stock.interface';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: GetProducts[] = []; 
  selectedProducts: any[] = [];

  stock: ProductStock[] = [];
  body: Body  [] = []; 

  constructor(private dataService: ProductsService , private carrito: ServicesService) { }

  public productData: any;
  public productDataImg: any; 
  public Presentations: any;
  public Price: any;
  public productPrice: any;

  public presentationname:any;


 

  
  // Aquí almacenarás los datos del producto

 

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data) => {
     
      this.productData = data.body.contents;
      this.productDataImg = data.body.images;
      this.Presentations = data.body.presentations;
      this.presentationname = this.Presentations[0].name;
      
      
      

      
     
     
      
      this.Price = data.body.prices;
      this.productPrice = this.Price[0].price;
      
      
      this.products = data; 
      console.log('Datos de productos obtenidos:', this.products);
      
    });
  }

  agregarAlCarrito() {
    // Lógica para agregar el producto actual al carrito
    this.carrito.agregarAlCarrito(this.productData);
  }
  
}
 



  // Nuevo método para obtener datos de otro servicio
  



 


