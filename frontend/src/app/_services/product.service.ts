import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;
  products = [];
  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get(this.baseUrl +'/products');
  }
}