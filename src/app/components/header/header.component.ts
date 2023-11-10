import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service';
import { initTE, Dropdown } from 'tw-elements';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public totalcartImtem: number = 0;
  


  constructor(private produuctService : ProductsService) { }

  ngOnInit(): void {



    
    // Inicializar Tw-Elements
    initTE({ Dropdown });
  }

}