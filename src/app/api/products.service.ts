import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiUrl = 'http://192.168.111.13:3001/api/v1/product/28/86960';
  constructor(private _http: HttpClient) {}


  
  getProductData(): Observable<any> {
    return this._http.get(this.apiUrl).pipe(
      map((response: any) => {
        console.log(response); // Agregamos un console log para mostrar la data que trae el servicio
        return response;
      })
    );
  }

}

