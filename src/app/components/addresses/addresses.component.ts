import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiExternalService } from 'src/app/api/api-external.service';
import { Address, GetAddress } from 'src/app/model/address.interface';



@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  numeroTelefono!: string;
  address: Address[] = []; // Utiliza el tipo 'Body' en lugar de 'any' para asegurarte de que coincida con la estructura de tus datos.

  constructor(private route: ActivatedRoute, private service: ApiExternalService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.numeroTelefono = params.get('numeroTelefono') || '';
        return this.service.getAddress(this.numeroTelefono);
      })
    ).subscribe((data: GetAddress) => {
      if (data && data.body && Array.isArray(data.body)) {
        this.address = data.body;
        console.log(this.address);
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
      this.router.navigate(['/combos', idTienda ]);
    });


    
  }


  

}



