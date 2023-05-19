export class Invoice {
  id!: number;
  supplierId!: number;
  customerId!: number | null; // Null represents unregistered customers
  productId!: number;
  totalAmount!: number;
  invoiceDate!: Date;
}
