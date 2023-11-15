import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, map, pipe, throwError } from 'rxjs'
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})
export class CombosService {

  private apiGetTienda ='http://192.168.111.13:3001/api/v1/blog/';
  private apiUrl = 'http://192.168.111.13:3001/api/v1/products/';

  constructor(private http: HttpClient) {}

  getProducts(idTienda :string): Observable<any> {
    const urlId = this.apiUrl + idTienda;
    console.log(urlId);
    return this.http.get(urlId);
  
  }

  
}


