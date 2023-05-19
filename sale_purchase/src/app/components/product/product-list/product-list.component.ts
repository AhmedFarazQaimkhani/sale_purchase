import { NotificationService } from '@progress/kendo-angular-notification';
// Packages
import { Component, OnInit } from '@angular/core';
// Services
import { ProductService } from '../../../services/product.service';
// Models
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  /** onInit get products */
  ngOnInit(): void {
    this.getProducts();
  }

  /** get products from server */
  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        this.filteredProducts = products;
      },
      error: (e) => {
        this.notificationService.show({
          content: e,
          type: { style: 'error' },
        });
      },
    });
  }
  /** filter products */
  handleFilter(value: string): void {
    this.filteredProducts = this.products.filter(
      (s) => s.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
  /** delete products */
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter((product) => product.id !== id);
        this.handleFilter('');
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
