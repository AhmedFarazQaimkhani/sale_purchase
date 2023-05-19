// Packages
import { Component, OnInit } from '@angular/core';
// Services
import { SaleService } from '../../services/sale.service';
import { PurchaseService } from '../../services/purchase.service';
// Constants
import { GlobalConstants } from 'src/globalConstants';

interface ChartData {
  name: string;
  data: number[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public dailySeries: ChartData[] = [];
  public monthlySeries: ChartData[] = [];
  public yearlySeries: ChartData[] = [];
  public months: string[] = GlobalConstants.Months;
  public days: number[] = GlobalConstants.Days;
  public years: string[] = GlobalConstants.Years;

  constructor(
    private salesService: SaleService,
    private purchaseService: PurchaseService
  ) {}

  /** On Init getCharts data*/
  ngOnInit() {
    this.getChartsData();
  }

  /** get charts data from server */
  getChartsData = () => {
    // daily sales purchases data
    this.dailySeries = [
      { name: 'Sales', data: this.salesService.getDailySalesData() },
      { name: 'Purchases', data: this.purchaseService.getDailyPurchaseData() },
    ];
    // monthly sales purchases data
    this.monthlySeries = [
      { name: 'Sales', data: this.salesService.getMonthlySalesData() },
      {
        name: 'Purchases',
        data: this.purchaseService.getMonthlyPurchaseData(),
      },
    ];
    // yearly sales purchases data
    this.yearlySeries = [
      { name: 'Sales', data: this.salesService.getYearlySalesData() },
      { name: 'Purchases', data: this.purchaseService.getYearlyPurchaseData() },
    ];
  };
}
