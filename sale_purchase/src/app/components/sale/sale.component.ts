// Packages
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Services
import { SaleService } from '../../services/sale.service';
import { ProductService } from '../../services/product.service';
import { CustomerService } from '../../services/customer.service';
// Models
import { Sale } from '../../models/sale.model';
import { Product } from '../../models/product.model';
import { Customer } from '../../models/customer.model';
// Kendo Ui Components
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
})
export class SaleComponent {
  products: Product[] = [];
  customers: Customer[] = [];
  sale = new Sale();

  constructor(
    private saleService: SaleService,
    private productService: ProductService,
    private customerService: CustomerService,
    private notificationService: NotificationService
  ) {}

  public salesForm: FormGroup = new FormGroup({
    productId: new FormControl(null, Validators.required),
    customerId: new FormControl(null, Validators.required),
    quantity: new FormControl(0, [Validators.required]),
  });
  /** onInit get products and customers */
  ngOnInit() {
    this.getProducts();
    this.getCustomers();
  }
  /** add new sale */
  addSale(): void {
    this.saleService.addSale(this.sale).subscribe({
      next: () => {
        this.notificationService.show({
          content: 'Sales Done Successfully',
        });
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
  getProducts(): void {
    this.productService.getProducts().subscribe({
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
  /** get customers from server */
  getCustomers(): void {
    this.customerService.getCustomers().subscribe({
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
}
