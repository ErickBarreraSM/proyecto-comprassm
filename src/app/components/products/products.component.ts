import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/api/products.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { CombosService } from 'src/app/api/combos.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any[] = [];
  

  constructor(public productservice: ProductsService) {}

  ngOnInit() {
    
   


    
  }
}


 

  

 





