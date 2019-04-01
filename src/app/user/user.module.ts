import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [UserComponent, DashboardComponent, UserListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    AdminModule
  ]
})
export class UserModule { }
