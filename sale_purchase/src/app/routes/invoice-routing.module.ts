// Packages
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// Components
import { InvoiceComponent } from '../components/invoice/invoice.component';

const routes: Routes = [{ path: '', component: InvoiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
