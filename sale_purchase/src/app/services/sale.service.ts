import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  private apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {}

  addSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(`${this.apiServerUrl}/sales`, sale);
  }

  // using dummy data for charts
  getDailySalesData(): number[] {
    return [
      10, 15, 8, 12, 20, 5, 7, 14, 20, 16, 18, 9, 4, 25, 1, 7, 8, 11, 17
    ];
  }

  getMonthlySalesData(): number[] {
    return [99, 250, 480, 12, 200, 150, 300, 140, 900, 160, 780, 190];
  }

  getYearlySalesData(): number[] {
    return [4000, 6030, 1000, 3200, 3600, 2800, 5100];
  }
}
