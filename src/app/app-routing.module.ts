import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
 
  { 
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule' },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'shared',
    loadChildren: './shared/shared.module#SharedModule'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
