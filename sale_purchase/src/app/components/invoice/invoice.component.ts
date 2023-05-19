import { NotificationService } from '@progress/kendo-angular-notification';
// Packages
import { Component, OnInit } from '@angular/core';
// Services
import { InvoiceService } from '../../services/invoice.service';
// Models
import { Supplier } from './../../models/supplier.model';
import { Customer } from './../../models/customer.model';
import { Product } from './../../models/product.model';
import { Invoice } from '../../models/invoice.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoices: Invoice[] = [];
  products: Product[] = [];
  customers: Customer[] = [];
  suppliers: Supplier[] = [];

  constructor(
    private invoiceService: InvoiceService,
    private notificationService: NotificationService
  ) {}

  /** onInit get invoices, customers, products, suppliers */
  ngOnInit() {
    this.loadInvoices();
    this.getCustomers();
    this.getProdcuts();
    this.getSuppliers();
  }

  /** get suppliers from server */
  getSuppliers(): void {
    this.invoiceService.getSuppliers().subscribe({
      next: (suppliers: Supplier[]) => {
        this.suppliers = suppliers;
      },
      error: (e) => {
        this.notificationService.show({
          content: e,
          type: { style: 'error' },
        });
      },
    });
  }
  /** get customers from server */
  getCustomers(): void {
    this.invoiceService.getCustomers().subscribe({
      next: (customers: Customer[]) => {
        this.customers = customers;
      },
      error: (e) => {
        this.notificationService.show({
          content: e,
          type: { style: 'error' },
        });
      },
    });
  }
  /** get products from server */
  getProdcuts(): void {
    this.invoiceService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (e) => {
        this.notificationService.show({
          content: e,
          type: { style: 'error' },
        });
      },
    });
  }

  /** get invoices by supplier id */
  handleSuppliers(value: Supplier): void {
    this.invoiceService.getInvoicesBySupplier(value.id).subscribe({
      next: (invoices: Invoice[]) => {
        this.invoices = invoices;
      },
      error: (e) => {
        this.notificationService.show({
          content: e,
          type: { style: 'error' },
        });
      },
    });
  }
  /** get invoices by customer id */
  handleCustomers(value: Customer | null): void {
    this.invoiceService.getInvoicesByCustomer(value && value.id).subscribe({
      next: (invoices: Invoice[]) => {
        this.invoices = invoices;
      },
      error: (e) => {
        this.notificationService.show({
          content: e,
          type: { style: 'error' },
        });
      },
    });
  }
  /** get invoices by product id */
  handleProducts(value: Product): void {
    this.invoiceService.getInvoicesByProduct(value.id).subscribe({
      next: (invoices: Invoice[]) => {
        this.invoices = invoices;
      },
      error: (e) => {
        this.notificationService.show({
          content: e,
          type: { style: 'error' },
        });
      },
    });
  }
  /** get all invoices by default */
  loadInvoices(): void {
    this.invoiceService.getInvoices().subscribe({
      next: (invoices: Invoice[]) => {
        this.invoices = invoices;
      },
      error: (e) => {
        this.notificationService.show({
          content: e,
          type: { style: 'error' },
        });
      },
    });
  }
}
