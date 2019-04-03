import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [AdminComponent, DashboardComponent, ItemsListComponent, ProductDetailComponent, CreateProductComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  exports: [
    ItemsListComponent
  ]
})
export class AdminModule { }
