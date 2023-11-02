import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CombosService } from 'src/app/api/combos.service';
import { GetCombos } from 'src/app/model/combos.interface';


@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit{
  idTienda!: string;
  products: any[] = [];

  constructor(private route: ActivatedRoute,private combosservice: CombosService, private router: Router ) {}

 


    ngOnInit() {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          this.idTienda = params.get('idTienda') || '';
          //console.log(this.numeroTelefono);
          return this.combosservice.getProducts(this.idTienda);
        })
      ).subscribe((data: GetCombos) => {
        if (data && data.body && Array.isArray(data.body)) {
          this.products = data.body;
          console.log(this.products);
          // Asigna la propiedad 'body' a this.address
          //console.log('Datos de dirección:', data);
        } else {
          //console.error('Los datos de dirección no son válidos:', data);
          // Puedes manejar este caso según tus necesidades, como mostrar un mensaje de error.
        }
      });

    }

}
 

    

  


