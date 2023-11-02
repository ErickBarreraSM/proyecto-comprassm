import { Component } from '@angular/core';
import { ApiExternalService } from 'src/app/api/api-external.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  numeroTelefono: string = '';

  constructor(private servicio: ApiExternalService) {}


  
}
