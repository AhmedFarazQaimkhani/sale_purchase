// Packages
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { DashboardComponent } from './../components/dashboard/dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DashboardRoutingModule {}
