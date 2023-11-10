import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiUrl = 'http://192.168.111.13:3001/api/v1/product/28/86993';
  
  private stockUrl = "http://192.168.111.13:3001/api/v1/product/stock/28/2620";// Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  




}

