// Packages
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { PurchaseComponent } from '../components/purchase/purchase.component';

const routes: Routes = [{ path: '', component: PurchaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule {}
