import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service';
import { SharedCategoryService } from 'src/app/api/shared-category.service';
import { initTE, Dropdown } from 'tw-elements';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public totalcartImtem: number = 0;
  isDropdownVisible = false;
  


  constructor(private produuctService : ProductsService, private sharedCategoryService: SharedCategoryService) { }

  ngOnInit(): void {



    
     
    initTE({ Dropdown });


    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.totalcartImtem= JSON.parse(cartData).length
    }


  }


  
  changeCategory(category: string): void {
    console.log(`Changing category to: ${category}`);
    this.sharedCategoryService.setSelectedCategory(category);
  }

 

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
