// Packages
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
// Kendo Ui Components
import { NotificationService } from '@progress/kendo-angular-notification';
// Service
import { PurchaseService } from '../../services/purchase.service';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
})
export class PurchaseComponent {
  products: Product[] = [];
  /**
   * Just for the heads up I have used form group even with a single entry
   * This kind of forms have possibilities of new fields to be added in the form
   */
  public purchaseForm: FormGroup = new FormGroup({
    product: new FormControl(null, Validators.required),
  });

  constructor(
    private purchaseService: PurchaseService,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}
  /** onInit get products */
  ngOnInit() {
    this.getProducts();
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
  /** create purchase to by product */
  createPurchase(): void {
    this.purchaseService.addPurchase(this.purchaseForm.value).subscribe({
      next: () => {
        this.notificationService.show({
          content: 'Purchase Done Successfully',
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
}
