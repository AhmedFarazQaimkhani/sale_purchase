// Packages
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { ProductListComponent } from '../components/product/product-list/product-list.component';
import { ProductUpsertComponent } from '../components/product/product-upsert/product-upsert.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product', component: ProductUpsertComponent },
  { path: 'product/:id', component: ProductUpsertComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
