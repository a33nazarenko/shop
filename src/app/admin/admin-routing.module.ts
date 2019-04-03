import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

const routes: Routes = [
  { path:'', redirectTo:'/admin/dashboard', pathMatch:'full'},
  {
      path:'',
      component:AdminComponent,
      children: [
          { path:'dashboard', component: DashboardComponent },
          { path:'items-list', component: ItemsListComponent },
          { path:'create-product', component: CreateProductComponent },
          { path:'product-detail/:id', component: ProductDetailComponent },
          { path:'update-product/:id', component: UpdateProductComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class AdminRoutingModule { }
