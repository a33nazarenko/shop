import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path:'', redirectTo:'/admin/dashboard', pathMatch:'full'},
  {
      path:'',
      component:AdminComponent,
      children: [
          { path:'dashboard', component: DashboardComponent },
          { path:'items-list', component: ItemsListComponent },
          { path:'product-detail', component: ProductDetailComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class AdminRoutingModule { }
