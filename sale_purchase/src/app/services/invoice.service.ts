import { Product } from './../models/product.model';
import { Customer } from './../models/customer.model';
import { Supplier } from './../models/supplier.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {}

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiServerUrl}/suppliers`);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiServerUrl}/customers`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/products`);
  }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.apiServerUrl}/invoices`);
  }

  getInvoicesBySupplier(supplierId: number): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(
      `${this.apiServerUrl}/invoices?supplierId=${supplierId}`
    );
  }

  getInvoicesByCustomer(customerId: number | null): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(
      `${this.apiServerUrl}/invoices?customerId=${customerId}`
    );
  }

  getInvoicesByProduct(productId: number): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(
      `${this.apiServerUrl}/invoices?productId=${productId}`
    );
  }
}
