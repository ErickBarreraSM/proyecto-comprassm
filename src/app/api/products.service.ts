import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, pipe } from 'rxjs'
import { GetProducts } from '../model/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  public cartItems: any[] = [];
  public productlist = new BehaviorSubject<any>([]);

  public cartimtemlist :any=[];

  
  
  private apiUrl = 'http://192.168.111.13:3001/api/v1/product/28/86960';
  private apiUrl2 = 'http://192.168.111.13:3001/api/v1/products/';
  
  private stockUrl = "http://192.168.111.13:3001/api/v1/product/stock/28/2620";// Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }


 

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  


  


  





  




}

