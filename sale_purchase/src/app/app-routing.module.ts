// Packages
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { text: 'Dashboard', icon: 'k-i-cloud' },
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./routes/product-routing.module').then(
        (m) => m.ProductRoutingModule
      ),
    data: { text: 'Product', icon: 'k-i-cloud' },
  },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./routes/purchase-routing.module').then(
        (m) => m.PurchaseRoutingModule
      ),
    data: { text: 'Purchase', icon: 'k-i-cloud' },
  },
  {
    path: 'sale',
    loadChildren: () =>
      import('./routes/sale-routing.module').then((m) => m.SaleRoutingModule),
    data: { text: 'Sale', icon: 'k-i-cloud' },
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('./routes/invoice-routing.module').then(
        (m) => m.InvoiceRoutingModule
      ),
    data: { text: 'Invoice', icon: 'k-i-cloud' },
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
