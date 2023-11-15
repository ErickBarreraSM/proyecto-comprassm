import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ApiExternalService } from 'src/app/api/api-external.service';
import { CombosService } from 'src/app/api/combos.service';
import { SharedCategoryService } from 'src/app/api/shared-category.service';
import { GetCombos } from 'src/app/model/combos.interface';


@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit{
  idTienda!: string;
  products: any[] = [];
   // Asegúrate de inicializar esto con tus datos reales
   selectedCategory: string = '';
  

  constructor(private route: ActivatedRoute,private combosservice: CombosService,private service: ApiExternalService, private router: Router, private sharedCategoryService: SharedCategoryService ) {}

 


  ngOnInit() {
    // Obtén la categoría seleccionada desde el servicio
    this.sharedCategoryService.selectedCategory$.subscribe((category: string) => {
      this.selectedCategory = category;
    });

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.idTienda = params.get('idTienda') || '';
          return this.combosservice.getProducts(this.idTienda);
        })
      )
      .subscribe((data: GetCombos) => {
        if (data && data.body && Array.isArray(data.body)) {
          this.products = data.body;
        } else {
          // Maneja el caso cuando los datos no son válidos
        }
      });
  }


  getIdTienda(linkTienda: string) {
    this.service.getTienda(linkTienda).subscribe((data: any) => {
      console.log(data.body[0].blog_id);
      console.log(data.body[0].path);

      const idTienda = data.body[0].blog_id;
      const nombreTienda = data.body[0].path;

      // Navega a la ruta del componente de destino y pasa el blog_id y el nombre de la tienda como parámetros en la URL
      this.router.navigate(['/products', idTienda ]);
    });
  }

    changeCategory(category: string): void {
      this.selectedCategory = this.selectedCategory === category ? '' : category;
    }

    


}
 

    

  


