import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { CombosComponent } from './components/combos/combos.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { CategoriaproductosComponent } from './components/categoriaproductos/categoriaproductos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CombosComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent,
    PruebaComponent,
    AddressesComponent,
    CategoriaproductosComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
