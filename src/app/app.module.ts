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
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { SharedCategoryService } from './api/shared-category.service';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';


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
    CategoryFilterPipe,
    PaymentGatewayComponent,
   
    
    
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
  providers: [SharedCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
