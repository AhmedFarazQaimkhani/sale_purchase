import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from '../models/purchase.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {}

  getPurchase(id: number): Observable<Purchase> {
    return this.http.get<Purchase>(`${this.apiServerUrl}/purchases/${id}`);
  }

  addPurchase(purchase: Purchase): Observable<Purchase> {
    return this.http.post<Purchase>(`${this.apiServerUrl}/purchases`, purchase);
  }
  // using dummy data for charts
  getDailyPurchaseData(): number[] {
    return [7, 10, 9, 6, 15, 4, 5, 12, 10, 8, 9, 6];
  }

  getMonthlyPurchaseData(): number[] {
    return [150, 200, 150, 110, 160, 140, 150, 130, 180, 170, 160, 150];
  }

  getYearlyPurchaseData(): number[] {
    return [2000, 2200, 2300, 2100];
  }
}
