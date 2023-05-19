// Packages
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// Components
import { SaleComponent } from '../components/sale/sale.component';

const routes: Routes = [{ path: '', component: SaleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
