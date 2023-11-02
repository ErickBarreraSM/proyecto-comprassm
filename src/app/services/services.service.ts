import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://192.168.111.13:3001/api/v1/products/5';

  constructor() { }
}
