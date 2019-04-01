import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent, ItemsListComponent, ProductDetailComponent, CreateProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [
    ItemsListComponent
  ]
})
export class AdminModule { }
