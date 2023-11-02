import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, pipe, throwError } from 'rxjs'
import { GetAddress } from '../model/address.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiExternalService {

  
  private apiUrl = 'http://192.168.111.13:3001/api/v1/client/phone/';
  private apiGetTienda ='http://192.168.111.13:3001/api/v1/blog/';
  


  constructor(private http: HttpClient) {}

  getAddress(numeroTelefono: string): Observable<GetAddress> {
    const apiUrlWithPhone = this.apiUrl + numeroTelefono;
    console.log(apiUrlWithPhone);
    return this.http.get<GetAddress>(apiUrlWithPhone);
  }

  getTienda(tienda :string): Observable<any> {
    const urlTienda = this.apiGetTienda + tienda;
    console.log(urlTienda);
    return this.http.get(urlTienda);
  
  }





}



