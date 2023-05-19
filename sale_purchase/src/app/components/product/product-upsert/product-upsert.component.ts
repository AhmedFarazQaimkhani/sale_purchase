import { Product } from './../../../models/product.model';
// Packages
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
// Kendo Ui Components
import { NotificationService } from '@progress/kendo-angular-notification';
// Router
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
})
export class ProductUpsertComponent {
  id = Number(this.route.snapshot.paramMap.get('id'));

  public productForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl(null, Validators.required),
  });
  constructor(
    private productService: ProductService,
    private router: Router,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) {}
  /** onInit get Product By Id if Id available */
  ngOnInit(): void {
    this.id && this.getProduct();
  }

  /** upsert product add and update  */
  upsertProduct(): void {
    if (this.id) {
      this.productService
        .updateProduct(this.productForm.value, this.id)
        .subscribe({
          next: () => {
            this.notificationService.show({
              content: 'Product Updated Successfully',
            });
            this.router.navigate(['/product']);
          },
          error: (e) => {
            this.notificationService.show({
              content: e,
              type: { style: 'error' },
            });
          },
        });
    } else {
      this.productService.addProduct(this.productForm.value).subscribe({
        next: () => {
          this.notificationService.show({
            content: 'Product Added Successfully',
          });
          this.router.navigate(['/product']);
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

  /** get product by id */
  getProduct(): void {
    this.productService.getProduct(this.id).subscribe({
      next: (product: Product) => {
        this.productForm.setValue({
          name: product.name,
          price: product.price,
          description: product.description,
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
