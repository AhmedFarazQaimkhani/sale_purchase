import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/products`);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.apiServerUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/products`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    const url = `${this.apiServerUrl}/products/${id}`;
    return this.http.delete<Product>(url);
  }

  updateProduct(product: Product, id: number): Observable<Product> {
    return this.http.put<Product>(`${this.apiServerUrl}/products/${id}`, product);
  }
}
