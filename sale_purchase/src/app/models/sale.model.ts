export class Sale {
  id!: number;
  productId!: number;
  customerId!: number | null; // Customer id will be null for unregistered customers
  quantity!: number;
  saleDate!: Date;
}
