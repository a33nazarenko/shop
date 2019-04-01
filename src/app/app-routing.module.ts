import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedInUserGuard } from './shared/guards/onlyLoggedInUser.guard';
import { RoleGuard } from './shared/guards/role.guard';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'auth', 
    pathMatch: 'full' },
 
  { 
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule' },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [OnlyLoggedInUserGuard, RoleGuard],
    data: {
      expectedRole: 'Admin'
    },
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
     canActivate: [OnlyLoggedInUserGuard, RoleGuard],
    data: {
      expectedRole: 'User'
    },
  },
  {
    path: 'shared',
    loadChildren: './shared/shared.module#SharedModule'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
