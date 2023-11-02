import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import  { HomeComponent } from './components/home/home.component'
import { CombosComponent } from './components/combos/combos.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { AddressesComponent } from './components/addresses/addresses.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'prueba', component:PruebaComponent},
  { path: 'combos/:idTienda', component: CombosComponent},
  
  { path: 'products', component: ProductsComponent },
  { path: 'telefono/:numeroTelefono', component: AddressesComponent },

 
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
